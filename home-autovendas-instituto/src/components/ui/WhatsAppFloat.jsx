import { WhatsAppIcon } from "../ui/Icons";
import { WHATSAPP_URL } from "../../config/siteConfig";

/** Botão flutuante fixo (canto inferior direito). No celular vira versão compacta só com ícone. */
export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com a equipe pelo WhatsApp"
    >
      <WhatsAppIcon size={26} />
      <span className="wa-float__text">Fale com a equipe</span>
    </a>
  );
}
