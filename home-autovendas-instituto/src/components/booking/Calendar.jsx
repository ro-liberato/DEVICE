import { useMemo, useState } from "react";
import { Icon } from "../ui/Icons";
import { toISODate } from "../../data/demoData";
import { fetchAvailableSlots } from "../../services/bookingService";

const MONTHS = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const WEEKDAYS = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

/** Calendário mensal interativo. Dias sem horários (na demonstração) ficam desabilitados. */
export default function Calendar({ selectedDate, onSelect, modalityId }) {
  const now = new Date();
  const [view, setView] = useState(() => selectedDate ?? new Date(now.getFullYear(), now.getMonth(), 1));
  const year = view.getFullYear();
  const month = view.getMonth();

  const cells = useMemo(() => {
    const first = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();
    const list = Array(first).fill(null);
    for (let d = 1; d <= days; d++) {
      const date = new Date(year, month, d);
      // [INTEGRAÇÃO] disponibilidade por dia: hoje vem de dados fictícios via bookingService.
      list.push({ date, available: fetchAvailableSlots(date, modalityId).length > 0 });
    }
    return list;
  }, [year, month, modalityId]);

  const isCurrentMonth = year === now.getFullYear() && month === now.getMonth();
  const go = (delta) => setView(new Date(year, month + delta, 1));
  const selectedISO = selectedDate ? toISODate(selectedDate) : null;

  return (
    <div className="calendar">
      <div className="calendar__nav">
        <button type="button" onClick={() => go(-1)} disabled={isCurrentMonth} aria-label="Mês anterior">
          <Icon name="chevronLeft" size={18} />
        </button>
        <strong aria-live="polite">{MONTHS[month]} {year}</strong>
        <button type="button" onClick={() => go(1)} aria-label="Próximo mês">
          <Icon name="chevron" size={18} />
        </button>
      </div>
      <div className="calendar__grid" role="grid" aria-label="Calendário de demonstração">
        {WEEKDAYS.map((w) => (
          <span key={w} className="calendar__wd" role="columnheader">{w}</span>
        ))}
        {cells.map((c, i) =>
          c === null ? (
            <span key={`e${i}`} />
          ) : (
            <button
              type="button"
              key={i}
              role="gridcell"
              className={`calendar__day ${c.available ? "is-available" : ""} ${toISODate(c.date) === selectedISO ? "is-selected" : ""}`}
              disabled={!c.available}
              aria-pressed={toISODate(c.date) === selectedISO}
              aria-label={`${c.date.getDate()} de ${MONTHS[month]}${c.available ? "" : " (sem horários na demonstração)"}`}
              onClick={() => onSelect(c.date)}
            >
              {c.date.getDate()}
            </button>
          )
        )}
      </div>
    </div>
  );
}
