"use client";

import { motion } from "framer-motion";

export default function BackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.svg
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-[850px] top-1/2 -translate-y-1/2 w-[1800px] h-[1800px]"
        viewBox="0 0 1800 1800"
        fill="none"
      >
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#113B8E" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#B9CAE8" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        <circle
          cx="900"
          cy="900"
          r="820"
          stroke="url(#ring)"
          strokeWidth="60"
        />

        <circle
          cx="900"
          cy="900"
          r="700"
          stroke="url(#ring)"
          strokeWidth="60"
        />

        <circle
          cx="900"
          cy="900"
          r="580"
          stroke="url(#ring)"
          strokeWidth="60"
        />

        <circle
          cx="900"
          cy="900"
          r="460"
          stroke="url(#ring)"
          strokeWidth="60"
        />

        <circle
          cx="900"
          cy="900"
          r="340"
          stroke="url(#ring)"
          strokeWidth="60"
        />
      </motion.svg>
    </div>
  );
}