"use client";

import { SkillCategory as SkillCategoryType } from "@/types";
import {
  Activity,
  Boxes,
  Cloud,
  Code2,
  GitBranch,
  LucideIcon,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { staggerItem } from "../animations/Stagger";
import { motion } from "framer-motion";
import { SkillPill } from "./SkillCard";

const icons: Record<string, LucideIcon> = {
  GitBranch,
  Boxes,
  Cloud,
  Server,
  Activity,
  ShieldCheck,
  Terminal,
  Code2,
};

export function SkillCategoryCard({ category }: { category: SkillCategoryType }) {
  const Icon = icons[category.icon] ?? Code2;

  return (
    <motion.div
      variants={staggerItem}
      className="flex flex-col rounded-xl border border-(--color-border) bg-(--color-surface) p-6 transition-colors hover:border-(--color-border-strong)"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--color-accent-soft) text-(--color-accent)">
          <Icon size={17} />
        </span>
        <h3 className="font-display text-base font-semibold text-(--color-text)">
          {category.title}
        </h3>
      </div>
      <p className="mt-3 text-sm text-(--color-text-muted)">{category.description}</p>
      <ul className="mt-5 flex flex-col gap-2">
        {category.items.map((item) => (
          <SkillPill key={item.name} item={item} />
        ))}
      </ul>
    </motion.div>
  );
}
