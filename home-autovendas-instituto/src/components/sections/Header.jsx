import { useState } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { Icon } from "../ui/Icons";
import { NAV_LINKS, BOOKING_ANCHOR } from "../../config/siteConfig";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#topo" aria-label="Instituto Braga – início" onClick={close}>
          <Logo size="sm" />
        </a>
        <nav id="menu-principal" className={`nav ${open ? "nav--open" : ""}`} aria-label="Principal">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <Button href={BOOKING_ANCHOR} icon="calendar" className="nav__cta" onClick={close}>
            Agendar consulta
          </Button>
        </nav>
        <button
          className="header__toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={26} />
        </button>
      </div>
    </header>
  );
}
