"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 pt-20 pb-20 lg:px-12 lg:pt-28 lg:pb-28">

      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
          {t.about.eyebrow}
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-20 lg:grid-cols-2 lg:items-start">

        <FadeIn delay={0.08}>
          <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--primary)] md:text-6xl">
            {t.about.title}
          </h2>

          <p className="mt-8 text-xl text-slate-600 leading-relaxed">
            {t.about.description}
          </p>

          <div className="grid grid-cols-2 gap-8 mt-12 max-w-md">

            <div>
              <h3 className="text-4xl font-bold text-[var(--primary)]">50+</h3>
              <p className="text-slate-500 mt-2">{t.about.stats.projects}</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[var(--primary)]">4+</h3>
              <p className="text-slate-500 mt-2">{t.about.stats.years}</p>
            </div>

          </div>
        </FadeIn>

        <FadeIn delay={0.16} className="lg:flex lg:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[12px]">
            <Image
              src="/images/profile-hero.jpg"
              alt="Kertész Mátyás"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover object-[center_38%]"
            />
          </div>
        </FadeIn>

      </div>

    </section>
  );
}
