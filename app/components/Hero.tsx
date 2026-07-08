"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BackgroundPattern from "./BackgroundPattern";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FB]">
      <BackgroundPattern />

      {/* ================= MOBILE ================= */}

      <div className="relative z-10 flex min-h-screen flex-col px-8 pt-32 pb-12 lg:hidden">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.4em] text-[var(--primary)]/70"
        >
          Brand Identity Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-[5rem] font-bold leading-[0.84] tracking-[-0.08em] text-[var(--primary)]"
        >
          Designing
          <br />
          brands
          <br />
          people
          <br />
          remember.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-xs text-lg leading-8 text-slate-600"
        >
          Strategic branding and visual identity for ambitious businesses.
        </motion.p>

        <div className="mt-12 flex flex-col gap-4">

          <button className="rounded-full bg-[var(--primary)] px-10 py-5 text-lg font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]">
            View Projects
          </button>

          <button className="rounded-full border border-[var(--primary)] px-10 py-5 text-lg font-semibold text-[var(--primary)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[var(--primary)] hover:text-white hover:shadow-2xl active:scale-[0.98]">
            Get in Touch
          </button>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <div className="relative aspect-[4/5] w-56 overflow-hidden rounded-[36px] shadow-2xl">

            <Image
              src="/images/profile.png"
              alt="Kertész Mátyás"
              fill
              priority
              className="object-cover"
            />

          </div>

        </motion.div>

      </div>

      {/* ================= DESKTOP ================= */}

      <div className="relative z-10 mx-auto hidden min-h-screen max-w-[1600px] grid-cols-2 items-center gap-24 px-24 pt-40 pb-20 lg:grid">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[var(--primary)]/70">
            Brand Identity Designer
          </p>

          <h1 className="text-[7rem] font-bold leading-[0.88] tracking-[-0.05em] text-[var(--primary)]">
            Designing brands
            <br />
            people remember.
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-8 text-slate-600">
            I create strategic brand identities, print design and visual
            communication for cafés, restaurants, gyms and ambitious
            businesses that want to stand out.
          </p>

          <div className="mt-12 flex gap-5">

            <button className="rounded-full bg-[var(--primary)] px-10 py-5 text-lg font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]">
              View Projects
            </button>

            <button className="rounded-full border border-[var(--primary)] px-10 py-5 text-lg font-semibold text-[var(--primary)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[var(--primary)] hover:text-white hover:shadow-2xl active:scale-[0.98]">
              Get in Touch
            </button>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex justify-end"
        >
          <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[40px] shadow-2xl">

            <Image
              src="/images/profile.png"
              alt="Kertész Mátyás"
              fill
              priority
              className="object-cover"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}