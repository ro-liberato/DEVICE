/** Padrão discreto de losangos (decorativo). tone: "dark" (fundos escuros) | "light" */
export default function DiamondPattern({ tone = "dark", className = "" }) {
  return (
    <svg
      className={`diamonds diamonds--${tone} ${className}`}
      viewBox="0 0 600 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <path d="M300 20l140 180-140 180L160 200z" />
      <path d="M300 70l95 130-95 130-95-130z" />
      <path d="M520 60l80 110-80 110-80-110z" />
      <path d="M80 120l70 90-70 90-70-90z" />
      <path d="M120 350l50-60M480 340l60-70" />
    </svg>
  );
}
