/**
 * Configuração central do site.
 * Altere aqui links, endereço e caminhos de imagens — sem mexer nos componentes.
 */

// Link EXATO do WhatsApp (origem "lp-rod-ron"). Todos os botões de WhatsApp usam este valor.
export const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5521987348449&text=Ol%C3%A1%2C%20vim%20da%20p%C3%A1gina%20do%20Instituto.%20Gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos%20oferecidos.%20%28lp-rod-ron%29";

// Endereços configuráveis das políticas. TODO: substituir pelos URLs oficiais.
export const POLICY_LINKS = {
  privacy: "#politica-de-privacidade", // TODO: URL da Política de Privacidade
  terms: "#termos-de-uso", // TODO: URL dos Termos de Uso
};

/**
 * Imagens do Dr. Guilherme Braga.
 * Coloque os arquivos fornecidos em /public/images/ com estes nomes
 * (ou ajuste os caminhos). Enquanto o arquivo não existir, um espaço reservado é exibido.
 */
export const IMAGES = {
  doctorHero: "/images/dr-guilherme-braga-hero.jpg", // retrato em destaque (hero)
  doctorAbout: "/images/dr-guilherme-braga-sobre.jpg", // foto da seção "Sobre o médico"
};

export const DOCTOR = {
  name: "Dr. Guilherme Braga",
  specialty: "Urologista",
  institute: "Instituto Braga",
};

export const LOCATION = {
  short: "Barra da Tijuca, Rio de Janeiro – RJ",
  city: "Barra da Tijuca, Rio de Janeiro",
};

export const NAV_LINKS = [
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#duvidas" },
];

export const BOOKING_ANCHOR = "#agendamento";
