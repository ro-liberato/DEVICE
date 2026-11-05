import { useState } from "react";

/**
 * Foto do médico com espaço reservado caso o arquivo ainda não exista em /public/images.
 */
export default function DoctorPhoto({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`photo-placeholder ${className}`} role="img" aria-label={alt}>
        <span>Foto do Dr. Guilherme Braga</span>
        <small>Adicione o arquivo em {src}</small>
      </div>
    );
  }
  return <img className={className} src={src} alt={alt} onError={() => setFailed(true)} loading="lazy" />;
}
