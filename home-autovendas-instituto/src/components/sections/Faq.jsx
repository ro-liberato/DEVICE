import { useState } from "react";
import { Icon } from "../ui/Icons";
import { FAQ_ITEMS } from "../../data/demoData";
import { POLICY_LINKS } from "../../config/siteConfig";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="section" id="duvidas">
      <div className="container faq">
        <header className="faq__head">
          <h2>Dúvidas frequentes</h2>
          <p className="faq__links">
            <a className="link" href={POLICY_LINKS.privacy}>Política de privacidade</a>
            <a className="link" href={POLICY_LINKS.terms}>Termos de uso</a>
          </p>
        </header>
        <div className="faq__list">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className={`faq__item ${open ? "is-open" : ""}`}>
                <h3>
                  <button
                    aria-expanded={open}
                    aria-controls={`faq-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                  >
                    {item.q}
                    <Icon name="chevronDown" size={18} className="faq__chev" />
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!open}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
