"use client";

import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, MapPin } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { Container } from "../ui/Container";
import { TerminalVisual } from "./TerminalVisual";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-(--color-accent) opacity-[0.12] blur-[140px]" />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge dot>Available for DevOps opportunities</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-(--color-text) sm:text-5xl lg:text-[3.4rem]"
          >
            Building reliable infrastructure.
            <br />
            <span className="text-gradient">Automating everything.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-(--color-text-muted) sm:text-lg"
          >
            {profile.title} focused on cloud infrastructure, CI/CD automation,
            containerization, Kubernetes, observability, and secure
            deployments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-4 flex items-center gap-2 text-sm text-(--color-text-faint)"
          >
            <MapPin size={14} />
            {profile.location} · Open to {profile.openTo.join(", ")}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-(--color-accent) px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
            >
              View projects
              <ArrowRight size={15} />
            </Link>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-(--color-border-strong) px-5 py-2.5 text-sm font-medium text-(--color-text) transition hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <FileDown size={15} />
              Download resume
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-(--color-text-muted) transition hover:text-(--color-text)"
            >
              Contact me
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TerminalVisual />
        </motion.div>
      </Container>
    </section>
  );
}
