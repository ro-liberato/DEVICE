import Logo from "../ui/Logo";
import Button from "../ui/Button";
import DiamondPattern from "../ui/DiamondPattern";
import { Icon } from "../ui/Icons";
import { LOCATION, BOOKING_ANCHOR } from "../../config/siteConfig";

export default function Footer() {
  return (
    <footer className="footer">
      <DiamondPattern className="footer__pattern" />
      <div className="container footer__inner">
        <Logo size="md" />
        <div className="footer__cta">
          <p>Sua saúde merece atenção especializada.</p>
          <Button href={BOOKING_ANCHOR} icon="calendar">Agendar consulta</Button>
        </div>
        <address className="footer__loc">
          <Icon name="pin" size={20} />
          <span>
            {LOCATION.short}
            <small>Atendimento particular • Agenda online</small>
          </span>
        </address>
      </div>
    </footer>
  );
}
