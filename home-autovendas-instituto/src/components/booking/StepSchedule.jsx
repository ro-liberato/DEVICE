import Calendar from "./Calendar";
import Button from "../ui/Button";
import { MODALITIES } from "../../data/demoData";
import { fetchAvailableSlots } from "../../services/bookingService";

/** Etapa 1 — data, horário e modalidade. Os horários exibidos são FICTÍCIOS (protótipo). */
export default function StepSchedule({ value, onChange, onNext }) {
  const { date, time, modalityId } = value;
  const slots = date ? fetchAvailableSlots(date, modalityId) : [];
  const canContinue = date && time;

  return (
    <div className="step-panel step-panel--schedule">
      <div className="step-panel__col">
        <Calendar selectedDate={date} modalityId={modalityId} onSelect={(d) => onChange({ date: d, time: null })} />
      </div>
      <div className="step-panel__col">
        <p className="demo-note" role="note">
          Protótipo: datas e horários abaixo são fictícios e não representam a agenda real.
        </p>
        <h3>
          {date ? `Horários de demonstração em ${date.toLocaleDateString("pt-BR", { day: "numeric", month: "long" })}` : "Selecione uma data no calendário"}
        </h3>
        <div className="slots" role="group" aria-label="Horários de demonstração">
          {slots.map((s) => (
            <button
              type="button"
              key={s}
              className={`slot ${time === s ? "is-selected" : ""}`}
              aria-pressed={time === s}
              onClick={() => onChange({ time: s })}
            >
              {s}
            </button>
          ))}
        </div>

        <fieldset className="modalities">
          <legend>Modalidade de atendimento</legend>
          {MODALITIES.map((m) => (
            <label key={m.id} className={`modality ${modalityId === m.id ? "is-selected" : ""}`}>
              <input
                type="radio"
                name="modality"
                value={m.id}
                checked={modalityId === m.id}
                onChange={() => onChange({ modalityId: m.id, time: null })}
              />
              <span>
                <strong>{m.label}</strong>
                <small>{m.detail}</small>
              </span>
            </label>
          ))}
        </fieldset>

        <Button className="btn--block" iconRight disabled={!canContinue} onClick={onNext}>
          Continuar
        </Button>
        {!canContinue && <p className="hint">Escolha data e horário para continuar.</p>}
      </div>
    </div>
  );
}
