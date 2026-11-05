import { Icon } from "../ui/Icons";
import { TREATMENTS, HOW_IT_WORKS } from "../../data/demoData";

export function TreatmentCard({ icon, title, description, href }) {
  return (
    <article className="card treatment">
      <span className="treatment__icon">
        <Icon name={icon} size={30} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="link" href={href} aria-label={`Saiba mais sobre ${title}`}>
          Saiba mais <Icon name="chevron" size={14} />
        </a>
      </div>
    </article>
  );
}

export default function Treatments() {
  return (
    <>
      <section className="section section--tint" id="tratamentos">
        <div className="container">
          <header className="section__head">
            <h2>Tratamentos e cuidados</h2>
            <p>Acompanhamento urológico com foco em saúde, bem-estar e qualidade de vida.</p>
          </header>
          <div className="grid-3">
            {TREATMENTS.map((t) => (
              <TreatmentCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>
      <section className="how" id="como-funciona" aria-labelledby="como-titulo">
        <div className="container">
          <h2 id="como-titulo" className="sr-only">Como funciona</h2>
          <ol className="how__list">
            {HOW_IT_WORKS.map((s, i) => (
              <li key={s.title}>
                <span className="how__num">{i + 1}</span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
