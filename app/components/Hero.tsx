"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BackgroundPattern from "./BackgroundPattern";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/data/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  const scrollToProjectBrief = () => {
    document.getElementById("project-brief")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };
  const mobileTitleClass =
    language === "hu"
      ? "mt-7 max-w-full break-words text-[clamp(3.8rem,16vw,5.2rem)] font-bold leading-[1.03] tracking-[-0.08em] text-[var(--primary)]"
      : "mt-7 max-w-full text-[clamp(3.3rem,15.8vw,4.5rem)] font-bold leading-[0.84] tracking-[-0.06em] text-[var(--primary)]";
  const desktopTitleClass =
    language === "hu"
      ? "max-w-full break-words text-[clamp(6.3rem,7.6vw,8.4rem)] font-bold leading-[1.02] tracking-[-0.06em] text-[var(--primary)]"
      : "text-[7rem] font-bold leading-[0.88] tracking-[-0.05em] text-[var(--primary)]";
  const hungarianLineScale = ["", "", ""];

  return (
    <section className="relative overflow-hidden bg-[#F8F9FB]">
      <BackgroundPattern />

      {/* ================= MOBILE ================= */}

      <div className="relative z-10 flex min-h-[100svh] flex-col px-6 pt-28 lg:hidden">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[20rem] text-sm font-semibold uppercase leading-5 tracking-[0.22em] text-[var(--primary)]/70"
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={mobileTitleClass}
        >
          {t.hero.mobileTitle.map((line, index) => (
            <span
              key={line}
              className={`block ${
                language === "hu"
                  ? `whitespace-nowrap ${hungarianLineScale[index]}`
                  : ""
              }`}
            >
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-[20rem] break-words text-[1.05rem] leading-7 text-slate-600"
        >
          {t.hero.mobileDescription}
        </motion.p>

        <div className="mt-8 flex flex-col items-start gap-3">

          <button
            type="button"
            onClick={scrollToWork}
            className="rounded-full bg-[var(--primary)] px-11 py-4 text-[1.35rem] font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]"
          >
            {t.hero.projects}
          </button>

          <button
            type="button"
            onClick={scrollToProjectBrief}
            className="rounded-full border border-[var(--primary)]/20 bg-white px-11 py-4 text-[1.35rem] font-semibold text-[var(--primary)] shadow-[0_8px_20px_rgba(17,59,142,0.12)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[var(--primary)] hover:text-white hover:shadow-2xl active:scale-[0.98]"
          >
            {t.hero.contact}
          </button>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="-mx-6 mt-auto flex w-[calc(100%+3rem)] justify-center pt-8"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] shadow-[0_18px_42px_rgba(17,59,142,0.18)]">

            <Image
              src="/images/profile-work.jpg"
              alt="Kertész Mátyás"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_42%]"
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
            {t.hero.eyebrow}
          </p>

          <h1 className={desktopTitleClass}>
            {language === "hu"
              ? t.hero.mobileTitle.map((line, index) => (
                  <span
                    key={line}
                    className={`block whitespace-nowrap ${hungarianLineScale[index]}`}
                  >
                    {line}
                  </span>
                ))
              : t.hero.title}
          </h1>

          <p className="mt-10 max-w-xl break-words text-lg leading-8 text-slate-600">
            {t.hero.description}
          </p>

          <div className="mt-12 flex gap-5">

            <button className="rounded-full bg-[var(--primary)] px-10 py-5 text-lg font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]">
              {t.hero.projects}
            </button>

            <button
              type="button"
              onClick={scrollToProjectBrief}
              className="rounded-full border border-[var(--primary)]/20 bg-white px-10 py-5 text-lg font-semibold text-[var(--primary)] shadow-[0_8px_20px_rgba(17,59,142,0.12)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[var(--primary)] hover:text-white hover:shadow-2xl active:scale-[0.98]"
            >
              {t.hero.contact}
            </button>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex justify-end"
        >
          <div className="relative h-[min(650px,68vh)] w-full max-w-[600px] overflow-hidden rounded-[14px] shadow-[0_28px_65px_rgba(17,59,142,0.2)]">

            <Image
              src="/images/profile-work.jpg"
              alt="Kertész Mátyás"
              fill
              priority
              sizes="(max-width: 1024px) 76vw, 600px"
              className="object-cover object-[center_42%]"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}
