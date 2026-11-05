import { useState } from "react";
import StepIndicator from "./StepIndicator";
import StepSchedule from "./StepSchedule";
import StepPatient from "./StepPatient";
import StepPayment from "./StepPayment";

const STEPS = ["Escolha um horário", "Seus dados", "Pagamento"];

/**
 * Seção "Agende sua consulta" — PROTÓTIPO DE INTERFACE.
 * Todo o estado vive em memória (React). Nada é enviado, salvo ou reservado.
 *
 * Pontos de integração (ver src/services/bookingService.js):
 *  1. Disponibilidade da agenda  -> fetchAvailableSlots (usada por Calendar/StepSchedule)
 *  2. Reserva/liberação do horário -> reserveSlot / releaseSlot (ao avançar/voltar/abandonar)
 *  3. Envio dos dados -> submitBookingData (StepPatient, ao validar)
 *  4. Checkout de pagamento -> createPaymentCheckout (StepPayment)
 *  5. Confirmação + evento na agenda -> confirmBookingAndCreateEvent (StepPayment)
 */
export default function Booking() {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({ date: null, time: null, modalityId: "presencial" });
  const [patient, setPatient] = useState({ name: "", email: "", phone: "", birth: "", consent: false });

  const goTo = (n) => {
    setStep(n);
    document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="section section--tint booking" id="agendamento">
      <div className="container">
        <header className="section__head">
          <h2>Agende sua consulta</h2>
          <p>Escolha a data, o horário e a modalidade de atendimento.</p>
        </header>
        <div className="booking__card card">
          <StepIndicator steps={STEPS} current={step} />
          {step === 1 && (
            <StepSchedule
              value={selection}
              onChange={(patch) => setSelection((s) => ({ ...s, ...patch }))}
              onNext={() => goTo(2)}
            />
          )}
          {step === 2 && (
            <StepPatient
              selection={selection}
              patient={patient}
              onChange={setPatient}
              onBack={() => goTo(1)}
              onNext={() => goTo(3)}
            />
          )}
          {step === 3 && <StepPayment selection={selection} onBack={() => goTo(2)} />}
        </div>
      </div>
    </section>
  );
}
