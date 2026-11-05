import { Icon } from "./Icons";

/**
 * Botão/link reutilizável.
 * variant: "primary" (azul vivo) | "outline" | "ghost-light"
 * Se `href` for informado, renderiza <a>; caso contrário, <button>.
 */
export default function Button({
  variant = "primary",
  href,
  external = false,
  icon,
  iconRight = false,
  children,
  className = "",
  ...rest
}) {
  const cls = `btn btn--${variant} ${className}`;
  const content = (
    <>
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
      {iconRight && <Icon name="chevron" size={16} />}
    </>
  );
  if (href) {
    return (
      <a
        className={cls}
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}
