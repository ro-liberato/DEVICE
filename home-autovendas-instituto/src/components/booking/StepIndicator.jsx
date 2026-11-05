export default function StepIndicator({ steps, current }) {
  return (
    <ol className="steps" aria-label="Etapas do agendamento">
      {steps.map((label, i) => {
        const n = i + 1;
        const state = n === current ? "is-current" : n < current ? "is-done" : "";
        return (
          <li key={label} className={`steps__item ${state}`} aria-current={n === current ? "step" : undefined}>
            <span className="steps__num">{n}</span>
            <span className="steps__label">{label}</span>
          </li>
        );
      })}
    </ol>
  );
}
