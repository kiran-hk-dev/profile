"use client";

import { navItems, profile } from "@/data/profile";
import { cn } from "@/lib/cn";
import { FileDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { ThemeToggle } from "../ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-(--color-border)"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/#home"
          className="font-display text-sm font-semibold tracking-tight text-(--color-text)"
        >
          KIRAN<span className="text-(--color-accent)">.</span>HK
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-(--color-text-muted) transition-colors hover:text-(--color-text)"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-(--color-text-muted) transition-colors hover:text-(--color-text)"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-(--color-text-muted) transition-colors hover:text-(--color-text)"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href={profile.resumePath}
            download
            className="flex items-center gap-1.5 text-sm text-(--color-text-muted) transition-colors hover:text-(--color-text)"
          >
            <FileDown size={15} />
            Resume
          </a>
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="flex items-center justify-center text-(--color-text) lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
