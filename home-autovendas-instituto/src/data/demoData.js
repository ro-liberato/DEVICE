/**
 * ============================================================
 * DADOS DE DEMONSTRAÇÃO (PROTÓTIPO) — NÃO SÃO DADOS REAIS
 * ============================================================
 * Tudo neste arquivo existe apenas para demonstrar a interface.
 * Substitua pelas fontes reais ao integrar o backend.
 */

/** Tratamentos (textos informativos e genéricos, sem promessa de resultado). */
export const TREATMENTS = [
  {
    id: "disfuncao-eretil",
    icon: "male",
    title: "Disfunção erétil",
    description: "Avaliação completa e opções de tratamento personalizadas.",
    href: "#agendamento", // TODO: link para página/seção detalhada
  },
  {
    id: "protese-peniana",
    icon: "protese",
    title: "Prótese peniana",
    description: "Opção avaliada individualmente pelo médico, conforme cada caso.",
    href: "#agendamento",
  },
  {
    id: "preenchimento",
    icon: "syringe",
    title: "Preenchimento",
    description: "Procedimento avaliado em consulta, com orientação individualizada.",
    href: "#agendamento",
  },
  {
    id: "peyronie",
    icon: "curve",
    title: "Doença de Peyronie",
    description: "Avaliação da curvatura peniana, com foco na função e no conforto.",
    href: "#agendamento",
  },
  {
    id: "fimose",
    icon: "shield",
    title: "Fimose",
    description: "Avaliação clínica e orientação sobre as opções de acompanhamento.",
    href: "#agendamento",
  },
  {
    id: "prostata",
    icon: "prostate",
    title: "Saúde da próstata",
    description: "Acompanhamento preventivo e avaliação de alterações da próstata.",
    href: "#agendamento",
  },
];

export const HIGHLIGHTS = [
  { icon: "calendar", label: "Consulta particular" },
  { icon: "shield", label: "Atendimento confidencial" },
  { icon: "team", label: "Equipe especializada" },
];

export const HOW_IT_WORKS = [
  { title: "Escolha um horário", text: "Selecione data, horário e modalidade de atendimento." },
  { title: "Informe seus dados", text: "Preencha as informações necessárias para o agendamento." },
  { title: "Pagamento", text: "Etapa final para concluir o agendamento." },
];

export const FAQ_ITEMS = [
  {
    q: "Como funciona o agendamento?",
    a: "Você escolhe data, horário e modalidade, informa seus dados e segue para a etapa de pagamento. Em caso de dúvidas, a equipe pode ajudar pelo WhatsApp.",
  },
  {
    q: "Posso escolher um horário?",
    a: "Sim. Na seção de agendamento você seleciona a data e o horário de sua preferência entre as opções apresentadas.",
  },
  {
    q: "Como meus dados serão tratados?",
    a: "As informações de tratamento de dados estão descritas na Política de Privacidade do Instituto. Consulte o link ao final desta seção.",
  },
];

/** Modalidades de atendimento (DEMONSTRAÇÃO — confirmar modalidades reais com o Instituto). */
export const MODALITIES = [
  { id: "presencial", label: "Consulta presencial", detail: "Barra da Tijuca, Rio de Janeiro" },
  { id: "online", label: "Consulta online", detail: "Atendimento por vídeo" },
];

/**
 * HORÁRIOS FICTÍCIOS PARA PROTÓTIPO.
 * Estes horários NÃO refletem a agenda real do médico.
 */
const DEMO_SLOTS_BY_WEEKDAY = {
  1: ["09:00", "10:30", "14:00", "15:30"], // segunda
  2: ["09:00", "11:00", "14:00", "16:00"], // terça
  3: ["09:00", "10:30", "14:00", "15:30"], // quarta
  4: ["09:00", "11:00", "14:00", "16:00"], // quinta
  5: ["09:00", "10:30", "13:30"], // sexta
};
const DEMO_WINDOW_DAYS = 60;

export const toISODate = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

/** Retorna os horários FICTÍCIOS de uma data (array vazio = sem horários na demonstração). */
export function getDemoSlotsForDate(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const limit = new Date(today);
  limit.setDate(limit.getDate() + DEMO_WINDOW_DAYS);
  if (date <= today || date > limit) return []; // hoje e passado ficam indisponíveis
  return DEMO_SLOTS_BY_WEEKDAY[date.getDay()] ?? [];
}
