/**
 * ============================================================
 * PONTOS DE INTEGRAÇÃO (BACKEND) — PROTÓTIPO, NADA AQUI É REAL
 * ============================================================
 * app.js chama apenas estas funções. O próximo desenvolvedor deve substituir
 * o corpo de cada uma pela chamada real. Nenhuma envia dados, reserva horários
 * ou processa pagamentos.
 */
window.BookingService = {
  /**
   * [INTEGRAÇÃO 1] Busca de disponibilidade na agenda.
   * Hoje: horários FICTÍCIOS de demonstração.
   * TODO: consultar a agenda real e devolver array de "HH:mm" para a data.
   */
  fetchAvailableSlots(date, modalityId) {
    var D = window.DEMO_DATA;
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var limit = new Date(today); limit.setDate(limit.getDate() + D.demoWindowDays);
    if (date <= today || date > limit) return [];
    return D.demoSlotsByWeekday[date.getDay()] || [];
  },

  /**
   * [INTEGRAÇÃO 2] Reserva e liberação de horário.
   * TODO: reservar (hold) ao avançar para dados/pagamento; liberar ao voltar,
   * abandonar ou expirar. Chamar nas transições de etapa (app.js › goTo).
   */
  reserveSlot(/* { date, time, modalityId } */) {},
  releaseSlot(/* reservationId */) {},

  /**
   * [INTEGRAÇÃO 3] Envio dos dados do agendamento.
   * TODO: enviar { patient, date, time, modalityId } ao backend (com consentimento LGPD).
   * Chamado em app.js após validar a etapa "Seus dados".
   */
  submitBookingData(/* payload */) {},

  /**
   * [INTEGRAÇÃO 4] Checkout do provedor de pagamento.
   * TODO: criar sessão/checkout e renderizar o componente oficial do provedor
   * no lugar do bloco ".pay-demo". NUNCA capturar cartão em campos próprios.
   */
  createPaymentCheckout(/* bookingId */) {},

  /**
   * [INTEGRAÇÃO 5] Confirmação final e criação do evento na agenda.
   * TODO: após o backend confirmar o pagamento, criar o evento na agenda e
   * exibir a confirmação real.
   */
  confirmBookingAndCreateEvent(/* bookingId */) {},
};
