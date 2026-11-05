import Button from "../ui/Button";
import BookingSummary from "./BookingSummary";
import { Icon } from "../ui/Icons";

/**
 * Etapa 3 — SOMENTE interface visual de pagamento.
 * Os campos abaixo estão desabilitados e não capturam, validam nem enviam dados de cartão.
 *
 * [INTEGRAÇÃO 4] Checkout do provedor de pagamento: substituir o bloco `.pay-demo`
 *   pelo componente/redirect oficial do provedor (createPaymentCheckout em bookingService.js).
 * [INTEGRAÇÃO 5] Confirmação final: após o backend confirmar o pagamento, chamar
 *   confirmBookingAndCreateEvent(...) e exibir a tela de confirmação real.
 */
export default function StepPayment({ selection, onBack }) {
  return (
    <div className="step-panel step-panel--payment">
      <div className="step-panel__col">
        <h3><Icon name="lock" size={20} /> Pagamento</h3>
        <div className="notice" role="status">
          <Icon name="info" size={20} />
          <p>O pagamento será conectado na próxima etapa de desenvolvimento. Nenhum pagamento é processado e nenhuma consulta é confirmada neste protótipo.</p>
        </div>
        <div className="pay-demo" aria-label="Demonstração visual dos campos de cartão (inativos)">
          <div className="field">
            <label htmlFor="card-name">Nome no cartão</label>
            <input id="card-name" disabled placeholder="Demonstração visual" autoComplete="off" />
          </div>
          <div className="field">
            <label htmlFor="card-number">Número do cartão</label>
            <input id="card-number" disabled placeholder="•••• •••• •••• ••••" autoComplete="off" />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="card-exp">Validade</label>
              <input id="card-exp" disabled placeholder="MM/AA" autoComplete="off" />
            </div>
            <div className="field">
              <label htmlFor="card-cvv">CVV</label>
              <input id="card-cvv" disabled placeholder="•••" autoComplete="off" />
            </div>
          </div>
        </div>
      </div>
      <div className="step-panel__col">
        <BookingSummary {...selection} />
        <p className="summary__price">Valor da consulta: <strong>a definir na integração</strong></p>
        <div className="actions">
          <Button type="button" variant="outline" onClick={onBack}>Voltar</Button>
          <Button type="button" icon="lock" disabled aria-disabled="true">Confirmar agendamento (em breve)</Button>
        </div>
      </div>
    </div>
  );
}
