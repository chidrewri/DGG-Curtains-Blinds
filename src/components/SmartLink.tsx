import type { ReactNode } from "react";

/**
 * Renders a real link when `href` is set, and plain text when it is null
 * (for links that are not confirmed yet, such as TikTok). Never renders a dead link.
 */
export function SmartLink({
  href,
  children,
  className = "",
  external = true,
}: {
  href: string | null | undefined;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  if (!href) return <span className={className}>{children}</span>;
  const ext = external && /^https?:/.test(href);
  return (
    <a href={href} className={className} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}
