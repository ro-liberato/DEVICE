import { useState } from "react";
import Button from "../ui/Button";
import BookingSummary from "./BookingSummary";
import { POLICY_LINKS } from "../../config/siteConfig";

const onlyDigits = (v) => v.replace(/\D/g, "");

/** Validação 100% no frontend. Retorna { campo: "mensagem" }. */
export function validatePatient(p) {
  const e = {};
  if (p.name.trim().split(/\s+/).filter(Boolean).length < 2) e.name = "Informe seu nome completo (nome e sobrenome).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(p.email.trim())) e.email = "Informe um e-mail válido, por exemplo nome@email.com.";
  const phone = onlyDigits(p.phone);
  if (phone.length < 10 || phone.length > 11) e.phone = "Informe um telefone com DDD, por exemplo (21) 99999-9999.";
  const birth = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(p.birth);
  if (!birth) e.birth = "Informe a data de nascimento no formato DD/MM/AAAA.";
  else {
    const [, d, m, y] = birth.map(Number);
    const dt = new Date(y, m - 1, d);
    const valid = dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d;
    if (!valid || dt > new Date() || y < 1900) e.birth = "Data de nascimento inválida.";
  }
  if (!p.consent) e.consent = "É necessário confirmar a ciência da Política de Privacidade para continuar.";
  return e;
}

function maskPhone(v) {
  const d = onlyDigits(v).slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
function maskDate(v) {
  const d = onlyDigits(v).slice(0, 8);
  if (d.length <= 2) return d;
  if (d.length <= 4) return `${d.slice(0, 2)}/${d.slice(2)}`;
  return `${d.slice(0, 2)}/${d.slice(2, 4)}/${d.slice(4)}`;
}

function Field({ id, label, error, children }) {
  return (
    <div className={`field ${error ? "has-error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <p className="field__error" id={`${id}-error`} role="alert">{error}</p>}
    </div>
  );
}

/** Etapa 2 — dados do paciente. Os dados ficam só em memória (estado React); nada é enviado ou salvo. */
export default function StepPatient({ selection, patient, onChange, onBack, onNext }) {
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => {
    const next = { ...patient, [field]: value };
    onChange(next);
    if (submitted) setErrors(validatePatient(next));
  };

  const submit = (ev) => {
    ev.preventDefault();
    setSubmitted(true);
    const errs = validatePatient(patient);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // [INTEGRAÇÃO 3] Envio dos dados do agendamento: chamar submitBookingData(...) aqui
      // e, em seguida, reserveSlot(...) para segurar o horário. (bookingService.js)
      onNext();
    } else {
      document.querySelector(".field.has-error input")?.focus();
    }
  };

  const aria = (k) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });

  return (
    <form className="step-panel step-panel--patient" onSubmit={submit} noValidate>
      <div className="step-panel__col">
        <h3>Seus dados</h3>
        <Field id="name" label="Nome completo" error={errors.name}>
          <input id="name" autoComplete="name" value={patient.name} onChange={(e) => update("name", e.target.value)} {...aria("name")} />
        </Field>
        <Field id="email" label="E-mail" error={errors.email}>
          <input id="email" type="email" autoComplete="email" value={patient.email} onChange={(e) => update("email", e.target.value)} {...aria("email")} />
        </Field>
        <div className="field-row">
          <Field id="phone" label="Telefone / WhatsApp" error={errors.phone}>
            <input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(21) 99999-9999" value={patient.phone} onChange={(e) => update("phone", maskPhone(e.target.value))} {...aria("phone")} />
          </Field>
          <Field id="birth" label="Data de nascimento" error={errors.birth}>
            <input id="birth" inputMode="numeric" autoComplete="bday" placeholder="DD/MM/AAAA" value={patient.birth} onChange={(e) => update("birth", maskDate(e.target.value))} {...aria("birth")} />
          </Field>
        </div>
        <div className={`field field--check ${errors.consent ? "has-error" : ""}`}>
          <label>
            <input type="checkbox" checked={patient.consent} onChange={(e) => update("consent", e.target.checked)} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "consent-error" : undefined} />
            <span>
              Li e estou ciente da <a className="link" href={POLICY_LINKS.privacy}>Política de Privacidade</a> e dos{" "}
              <a className="link" href={POLICY_LINKS.terms}>Termos de Uso</a>.
            </span>
          </label>
          {errors.consent && <p className="field__error" id="consent-error" role="alert">{errors.consent}</p>}
        </div>
        <p className="hint">Protótipo: os dados informados não são enviados nem armazenados.</p>
      </div>
      <div className="step-panel__col">
        <BookingSummary {...selection} />
        <div className="actions">
          <Button type="button" variant="outline" onClick={onBack}>Voltar</Button>
          <Button type="submit" iconRight>Continuar</Button>
        </div>
      </div>
    </form>
  );
}
