"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/devops", label: "DevOps" },
  { href: "/learn", label: "Learn" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-200",
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border-soft" : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 py-4">
        <Link href="/" className="font-display text-lg font-medium tracking-tight text-text" onClick={() => setOpen(false)}>
          KHK<span className="text-accent">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-text-muted hover:text-text transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-soft text-text-muted hover:text-text hover:border-accent/40 transition-colors">
            <GithubIcon size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-soft text-text-muted hover:text-text hover:border-accent/40 transition-colors">
            <LinkedinIcon size={16} />
          </a>
          <a href="/resume/Kiran-HK-Resume.pdf" target="_blank" rel="noreferrer" aria-label="Resume" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-soft text-text-muted hover:text-text hover:border-accent/40 transition-colors">
            <FileText size={16} />
          </a>
          <ThemeToggle />
        </div>

        <button className="md:hidden text-text" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border-soft bg-bg px-5 py-4">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-text-muted hover:text-text" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-border-soft mt-1">
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-text-muted"><GithubIcon size={18} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-text-muted"><LinkedinIcon size={18} /></a>
              <a href="/resume/Kiran-HK-Resume.pdf" target="_blank" rel="noreferrer" className="text-text-muted"><FileText size={18} /></a>
              <div className="ml-auto"><ThemeToggle /></div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
