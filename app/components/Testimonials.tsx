"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import FadeIn from "./FadeIn";

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  return (
    <section className="bg-[#F8F9FB] py-20 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            {t.eyebrow}
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--primary)] md:text-6xl">
              {t.title}
            </h2>

            <p className="max-w-xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              {t.description}
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 h-px bg-[var(--primary)]/10" />

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {t.items.map((item, index) => (
            <FadeIn key={item.project} delay={index * 0.08} className="h-full">
              <article className="relative flex h-full min-h-[20rem] flex-col overflow-hidden rounded-[12px] border border-[var(--primary)]/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--primary)]/20 hover:shadow-2xl md:p-8">
                <div
                  aria-hidden="true"
                  className="absolute -right-28 -top-28 h-64 w-64"
                >
                  <div className="absolute inset-0 rounded-full bg-[#113B8E] opacity-[0.035]" />
                  <div className="absolute inset-5 rounded-full bg-[#294B98] opacity-[0.045]" />
                  <div className="absolute inset-10 rounded-full bg-[#536CAA] opacity-[0.06]" />
                  <div className="absolute inset-[3.75rem] rounded-full bg-[#7C8BBC] opacity-[0.08]" />
                  <div className="absolute inset-20 rounded-full bg-[#C9CADF] opacity-[0.13]" />
                </div>

                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    {item.project}
                  </p>

                  <p className="mt-8 text-2xl font-semibold leading-[1.18] tracking-[-0.035em] text-[var(--primary)] md:text-3xl">
                    “{item.quote}”
                  </p>
                </div>

                <div className="relative mt-auto pt-10">
                  <div className="h-px w-16 bg-[var(--primary)]/20" />
                  <p className="mt-5 text-sm font-medium leading-6 text-slate-500">
                    {item.context}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
