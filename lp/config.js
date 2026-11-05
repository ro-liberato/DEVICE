/**
 * Configuração central da landing page (versão estática).
 * Altere aqui links, endereço e imagens.
 */
window.SITE_CONFIG = {
  // Link EXATO do WhatsApp (origem "lp-rod-ron"). Todos os botões de WhatsApp usam este valor.
  whatsappUrl:
    "https://api.whatsapp.com/send?phone=5521987348449&text=Ol%C3%A1%2C%20vim%20da%20p%C3%A1gina%20do%20Instituto.%20Gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos%20oferecidos.%20%28lp-rod-ron%29",

  // Endereços configuráveis. TODO: substituir pelos URLs oficiais.
  policyLinks: {
    privacy: "#politica-de-privacidade", // TODO: URL da Política de Privacidade
    terms: "#termos-de-uso", // TODO: URL dos Termos de Uso
  },

  doctor: { name: "Dr. Guilherme Braga", specialty: "Urologista", institute: "Instituto Braga" },
};
