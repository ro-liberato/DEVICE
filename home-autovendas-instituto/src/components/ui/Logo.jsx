/** Logo do Instituto Braga (versão vetorial de apoio). Substitua pelo arquivo oficial se desejar. */
export default function Logo({ variant = "light", size = "md", stacked = false }) {
  return (
    <span className={`logo logo--${variant} logo--${size} ${stacked ? "logo--stacked" : ""}`} aria-label="Instituto Braga – Saúde Masculina" role="img">
      <svg className="logo__mark" viewBox="0 0 48 40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M14 20L24 5l10 15-10 15z" />
        <path d="M4 20L14 7M4 20l10 13M44 20L34 7M44 20L34 33" opacity=".7" />
        <path d="M18 20l6-9 6 9-6 9z" opacity=".55" />
      </svg>
      <span className="logo__text">
        <span className="logo__small">INSTITUTO</span>
        <span className="logo__big">BRAGA</span>
        <span className="logo__small logo__small--sub">SAÚDE MASCULINA</span>
      </span>
    </span>
  );
}
