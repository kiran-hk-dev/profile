import { cn } from "@/lib/cn";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-(--color-accent) text-white hover:brightness-110 border border-transparent",
  secondary:
    "bg-transparent text-(--color-text) border border-(--color-border-strong) hover:border-(--color-accent) hover:text-(--color-accent)",
  ghost:
    "bg-transparent text-(--color-text-muted) hover:text-(--color-text) border border-transparent",
};

const base =
  "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-(--color-accent)";

export function Button({
  children,
  variant = "primary",
  className,
  icon,
  href,
  external,
  onClick,
  type = "button",
}: BaseProps & {
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = cn(base, variantClasses[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
