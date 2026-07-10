"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-12 py-32">

      <p className="uppercase tracking-[0.3em] text-sm text-slate-500">
        {t.about.eyebrow}
      </p>

      <div className="grid lg:grid-cols-2 gap-20 items-center mt-12">

        <div>
          <h2 className="text-5xl font-bold text-[var(--primary)] leading-tight">
            {t.about.title}
          </h2>

          <p className="mt-8 text-xl text-slate-600 leading-relaxed">
            {t.about.description}
          </p>

          <div className="grid grid-cols-3 gap-8 mt-12">

            <div>
              <h3 className="text-4xl font-bold text-[var(--primary)]">50+</h3>
              <p className="text-slate-500 mt-2">{t.about.stats.projects}</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[var(--primary)]">4+</h3>
              <p className="text-slate-500 mt-2">{t.about.stats.years}</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[var(--primary)]">100%</h3>
              <p className="text-slate-500 mt-2">{t.about.stats.custom}</p>
            </div>

          </div>
        </div>

        <div>
          <Image
            src="/images/about-portrait.png"
            alt="Kertész Mátyás"
            width={600}
            height={700}
            className="rounded-[32px]"
          />
        </div>

      </div>

    </section>
  );
}
