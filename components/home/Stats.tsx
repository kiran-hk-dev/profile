"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

const stats = [
  { value: profile.experience, label: "DevOps · MERN across product teams" },
  { value: "30% faster", label: "Deployments via Jenkins automation" },
  { value: "99% Uptime", label: "Kubernetes · zero critical vulns shipped" },
  { value: "60% faster", label: "Onboarding · 97% reporting accuracy" },
];

export function Stats() {
  return (
    <section className="border-y border-border-soft bg-bg-elevated/40">
      <Container className="py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <p className="font-display text-2xl sm:text-3xl text-accent">{s.value}</p>
              <p className="mt-1 text-xs sm:text-sm text-text-muted">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
