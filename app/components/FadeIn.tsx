"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FadeIn({
  children,
  className,
  delay = 0,
  amount = 0.18,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 72, filter: "blur(10px)", clipPath: "inset(0 0 18% 0)" }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, y: 0, filter: "blur(0px)", clipPath: "inset(0 0 0% 0)" }
      }
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
      transition={{
        delay,
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
