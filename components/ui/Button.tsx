import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
  icon?: ReactNode;
  onClick?: () => void;
};

export function Button({ children, href, variant = "secondary", className, target, rel, icon, onClick }: ButtonProps) {
  const styles = cn(
    "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-150",
    variant === "primary" && "bg-accent text-bg hover:bg-accent/90",
    variant === "secondary" && "border border-border bg-bg-elevated text-text hover:border-accent/50",
    variant === "ghost" && "text-text-muted hover:text-text",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles} target={target} rel={rel}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {icon}
      {children}
    </button>
  );
}
