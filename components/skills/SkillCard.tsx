import { SkillItem } from "@/types";

const usageColor: Record<SkillItem["usage"], string> = {
  Daily: "bg-(--color-cyan)",
  Regular: "bg-(--color-accent)",
  "Working knowledge": "bg-(--color-text-faint)",
};

export function SkillPill({ item }: { item: SkillItem }) {
  return (
    <li className="flex items-center justify-between gap-3 rounded-lg border border-(--color-border) bg-(--color-bg-elevated) px-3.5 py-2.5">
      <span className="text-sm text-(--color-text)">{item.name}</span>
      <span className="flex items-center gap-1.5">
        <span className={`h-1.5 w-1.5 rounded-full ${usageColor[item.usage]}`} />
        <span className="text-[11px] text-(--color-text-faint)">{item.usage}</span>
      </span>
    </li>
  );
}
