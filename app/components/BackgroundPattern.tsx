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
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-[860px] top-1/2 h-[1500px] w-[1500px] -translate-y-1/2 lg:-right-[780px] lg:h-[1750px] lg:w-[1750px]"
        viewBox="0 0 1750 1750"
        fill="none"
      >
        <circle cx="875" cy="875" r="875" fill="#113B8E" opacity="0.045" />
        <circle cx="875" cy="875" r="765" fill="#294B98" opacity="0.055" />
        <circle cx="875" cy="875" r="655" fill="#536CAA" opacity="0.07" />
        <circle cx="875" cy="875" r="545" fill="#7C8BBC" opacity="0.09" />
        <circle cx="875" cy="875" r="435" fill="#A4AACD" opacity="0.12" />
        <circle cx="875" cy="875" r="325" fill="#C9CADF" opacity="0.18" />
      </motion.svg>
    </div>
  );
}
