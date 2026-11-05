import { Icon } from "../ui/Icons";
import { MODALITIES } from "../../data/demoData";
import { DOCTOR } from "../../config/siteConfig";

export function formatDateLong(date) {
  return date.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

/** Resumo da seleção (usado nas etapas 2 e 3). */
export default function BookingSummary({ date, time, modalityId, title = "Resumo do agendamento" }) {
  const modality = MODALITIES.find((m) => m.id === modalityId);
  return (
    <aside className="summary" aria-label={title}>
      <h4>{title}</h4>
      <ul>
        <li><Icon name="user" size={18} /> Consulta com {DOCTOR.name}</li>
        <li><Icon name="calendar" size={18} /> <span>{date ? formatDateLong(date) : "—"}</span></li>
        <li><Icon name="clock" size={18} /> {time ?? "—"}</li>
        <li>
          <Icon name="pin" size={18} />
          <span>{modality?.label}<small>{modality?.detail}</small></span>
        </li>
      </ul>
    </aside>
  );
}
