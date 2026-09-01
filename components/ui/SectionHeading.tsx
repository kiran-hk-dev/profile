import { cn } from "@/lib/cn";

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
    <div
      className={cn(
        "mb-12 flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <div className="flex items-baseline gap-3">
        {index && (
          <span className="font-mono text-sm text-(--color-accent)">{index}</span>
        )}
        <h2 className="font-display text-3xl font-semibold tracking-tight text-(--color-text) sm:text-4xl">
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base text-(--color-text-muted)",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
