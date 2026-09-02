"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

export function SkillsGrid() {
  return (
    <section id="skills" className="scroll-mt-24 bg-bg-elevated/30 border-y border-border-soft">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          title="Skills & Technologies"
          description="Grounded in the tools I've actually used in production — no percentage bars, just what each one was for."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: (ci % 3) * 0.06 }}
            >
              <h3 className="font-mono-tag text-xs uppercase tracking-wide text-accent mb-3">{cat.category}</h3>
              <div className="flex flex-col gap-2">
                {cat.items.map((item) => (
                  <div key={item.name} className="rounded-lg border border-border-soft bg-bg-elevated px-4 py-3">
                    <p className="text-sm font-medium text-text">{item.name}</p>
                    <p className="text-xs text-text-faint mt-1 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
