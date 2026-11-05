/**
 * ============================================================
 * PONTOS DE INTEGRAÇÃO (BACKEND) — PROTÓTIPO, NADA AQUI É REAL
 * ============================================================
 * O frontend chama apenas as funções deste arquivo. O próximo desenvolvedor
 * deve substituir o corpo de cada uma pela chamada real (API/SDK).
 * Nenhuma função aqui envia dados, reserva horários ou processa pagamentos.
 */
import { getDemoSlotsForDate } from "../data/demoData";

/**
 * [INTEGRAÇÃO 1] Busca de disponibilidade na agenda.
 * Hoje: devolve horários FICTÍCIOS de demonstração.
 * TODO: consultar a agenda real (ex.: Google Calendar / sistema de agenda) e
 * devolver um array de strings "HH:mm" para a data informada.
 * @param {Date} date
 * @param {string} modalityId
 * @returns {string[]}
 */
export function fetchAvailableSlots(date, modalityId) {
  void modalityId;
  return getDemoSlotsForDate(date);
}

/**
 * [INTEGRAÇÃO 2] Reserva e liberação de horário.
 * TODO: reservar (hold) o horário ao avançar para os dados/pagamento e liberá-lo
 * se o usuário voltar, abandonar ou expirar o tempo. Chamar em Booking.jsx
 * (transições de etapa) e ao desmontar o fluxo.
 */
export function reserveSlot(/* { date, time, modalityId } */) {
  // TODO: implementar reserva
}
export function releaseSlot(/* reservationId */) {
  // TODO: implementar liberação
}

/**
 * [INTEGRAÇÃO 3] Envio dos dados do agendamento.
 * TODO: enviar { patient, date, time, modalityId } ao backend (com consentimento LGPD).
 * Chamar em Booking.jsx após a validação da etapa "Seus dados".
 */
export function submitBookingData(/* payload */) {
  // TODO: implementar envio
}

/**
 * [INTEGRAÇÃO 4] Checkout do provedor de pagamento.
 * TODO: criar sessão/checkout no provedor escolhido e renderizar o componente
 * oficial deles em PaymentStep.jsx. Os campos de cartão atuais são só visuais.
 * NUNCA capturar dados de cartão em campos próprios.
 */
export function createPaymentCheckout(/* bookingId */) {
  // TODO: implementar checkout
}

/**
 * [INTEGRAÇÃO 5] Confirmação final e criação do evento na agenda.
 * TODO: após confirmação do pagamento pelo backend, criar o evento na agenda,
 * e exibir a tela de confirmação real.
 */
export function confirmBookingAndCreateEvent(/* bookingId */) {
  // TODO: implementar confirmação
}
