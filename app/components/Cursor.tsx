"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      gsap.to(cursor.current, {
        x: e.clientX - 30,
        y: e.clientY - 30,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursor}
      className="fixed top-0 left-0 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#113B8E] text-xs font-semibold uppercase tracking-wider text-white pointer-events-none"
    >
      View
    </div>
  );
}
