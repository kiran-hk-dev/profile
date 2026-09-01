"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return <span ref={ref}>{display}</span>;
}

export function AnimatedStat({ value, label }: { value: string; label: string }) {
  const numericMatch = value.match(/^(\d+)(\+?)/);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-(--color-border) bg-(--color-surface) p-6"
    >
      <p className="font-display text-3xl font-semibold text-(--color-text)">
        {numericMatch ? (
          <>
            <AnimatedNumber target={parseInt(numericMatch[1], 10)} />
            {numericMatch[2]}
          </>
        ) : (
          value
        )}
      </p>
      <p className="mt-1.5 text-sm text-(--color-text-muted)">{label}</p>
    </motion.div>
  );
}
