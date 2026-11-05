import { Icon } from "../ui/Icons";
import { HIGHLIGHTS } from "../../data/demoData";

export default function HighlightsBar() {
  return (
    <section className="highlights" aria-label="Destaques">
      <ul className="container highlights__list">
        {HIGHLIGHTS.map((h) => (
          <li key={h.label}>
            <Icon name={h.icon} size={24} />
            <span>{h.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
