import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  title,
  description,
  align = "left",
  className,
}: {
  index?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("mb-10 sm:mb-14", align === "center" && "text-center", className)}>
      <div className={cn("flex items-baseline gap-3", align === "center" && "justify-center")}>
        {index && <span className="font-mono-tag text-sm text-accent">{index}</span>}
        <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-text text-balance">
          {title}
        </h2>
      </div>
      {description && (
        <p className={cn("mt-4 max-w-2xl text-text-muted leading-relaxed", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
