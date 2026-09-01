"use client";

import { navItems, profile } from "@/data/profile";
import { cn } from "@/lib/cn";
import { FileDown } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { ThemeToggle } from "../ThemeToggle";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={cn(
        "grid overflow-hidden border-b border-(--color-border) glass transition-[grid-template-rows] duration-300 ease-out lg:hidden",
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      )}
    >
      <div className="min-h-0">
        <ul className="flex flex-col gap-1 px-5 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block rounded-lg px-3 py-3 text-base text-(--color-text-muted) transition-colors hover:bg-(--color-surface) hover:text-(--color-text)"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-(--color-border) px-5 py-4">
          <div className="flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-(--color-text-muted)"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-(--color-text-muted)"
            >
              <LinkedinIcon size={18} />
            </a>
            <a href={profile.resumePath} download className="text-(--color-text-muted)">
              <FileDown size={18} />
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
