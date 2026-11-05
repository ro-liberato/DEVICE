/**
 * ============================================================
 * DADOS DE DEMONSTRAÇÃO (PROTÓTIPO) — NÃO SÃO DADOS REAIS
 * ============================================================
 * Substitua pelas fontes reais ao integrar o backend.
 */
window.DEMO_DATA = {
  highlights: [
    { icon: "calendar", label: "Consulta particular" },
    { icon: "shield", label: "Atendimento confidencial" },
    { icon: "team", label: "Equipe especializada" },
  ],

  // Textos informativos e genéricos, sem promessa de resultado.
  treatments: [
    { icon: "male", title: "Disfunção erétil", description: "Avaliação completa e opções de tratamento personalizadas.", href: "#agendamento" },
    { icon: "protese", title: "Prótese peniana", description: "Opção avaliada individualmente pelo médico, conforme cada caso.", href: "#agendamento" },
    { icon: "syringe", title: "Preenchimento", description: "Procedimento avaliado em consulta, com orientação individualizada.", href: "#agendamento" },
    { icon: "curve", title: "Doença de Peyronie", description: "Avaliação da curvatura peniana, com foco na função e no conforto.", href: "#agendamento" },
    { icon: "shield", title: "Fimose", description: "Avaliação clínica e orientação sobre as opções de acompanhamento.", href: "#agendamento" },
    { icon: "prostate", title: "Saúde da próstata", description: "Acompanhamento preventivo e avaliação de alterações da próstata.", href: "#agendamento" },
  ],

  howItWorks: [
    { title: "Escolha um horário", text: "Selecione data, horário e modalidade de atendimento." },
    { title: "Informe seus dados", text: "Preencha as informações necessárias para o agendamento." },
    { title: "Pagamento", text: "Etapa final para concluir o agendamento." },
  ],

  faq: [
    { q: "Como funciona o agendamento?", a: "Você escolhe data, horário e modalidade, informa seus dados e segue para a etapa de pagamento. Em caso de dúvidas, a equipe pode ajudar pelo WhatsApp." },
    { q: "Posso escolher um horário?", a: "Sim. Na seção de agendamento você seleciona a data e o horário de sua preferência entre as opções apresentadas." },
    { q: "Como meus dados serão tratados?", a: "As informações de tratamento de dados estão descritas na Política de Privacidade do Instituto. Consulte o link ao lado." },
  ],

  // Modalidades (DEMONSTRAÇÃO — confirmar modalidades reais com o Instituto).
  modalities: [
    { id: "presencial", label: "Consulta presencial", detail: "Barra da Tijuca, Rio de Janeiro" },
    { id: "online", label: "Consulta online", detail: "Atendimento por vídeo" },
  ],

  // HORÁRIOS FICTÍCIOS PARA PROTÓTIPO — não refletem a agenda real do médico.
  demoSlotsByWeekday: {
    1: ["09:00", "10:30", "14:00", "15:30"],
    2: ["09:00", "11:00", "14:00", "16:00"],
    3: ["09:00", "10:30", "14:00", "15:30"],
    4: ["09:00", "11:00", "14:00", "16:00"],
    5: ["09:00", "10:30", "13:30"],
  },
  demoWindowDays: 60,
};
