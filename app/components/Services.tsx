"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import Link from "next/link";

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="services"
      className="mx-auto max-w-[1600px] px-6 pt-20 pb-20 lg:px-24 lg:pt-28 lg:pb-28"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
        {t.services.eyebrow}
      </p>

      <h2 className="mt-5 max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--primary)] md:text-6xl">
        {t.services.title}
      </h2>

      <div className="mt-14 h-px bg-[var(--primary)]/10" />

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {t.services.items.map((service) => (
          <Link
            key={service.title}
            href={`/services/${service.slug}`}
            className="group block"
          >
            <article className="relative min-h-[20rem] overflow-hidden rounded-[28px] border border-[var(--primary)]/10 bg-white p-8 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[var(--primary)]/25 group-hover:shadow-2xl md:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-56 w-56 transition-transform duration-700 group-hover:scale-125"
              >
                <div className="absolute inset-0 rounded-full bg-[#113B8E] opacity-[0.045]" />
                <div className="absolute inset-4 rounded-full bg-[#294B98] opacity-[0.055]" />
                <div className="absolute inset-8 rounded-full bg-[#536CAA] opacity-[0.07]" />
                <div className="absolute inset-12 rounded-full bg-[#7C8BBC] opacity-[0.09]" />
                <div className="absolute inset-16 rounded-full bg-[#A4AACD] opacity-[0.12]" />
                <div className="absolute inset-20 rounded-full bg-[#C9CADF] opacity-[0.18]" />
              </div>

              <div className="relative flex h-full flex-col">
                <h3 className="mt-8 max-w-full break-words text-[2rem] font-bold leading-[0.98] tracking-[-0.04em] text-[var(--primary)] transition-transform duration-500 group-hover:translate-x-1">
                  {service.title}
                </h3>

                <p className="mt-5 max-w-xs break-words text-base leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-auto pt-10">
                  <div className="h-px w-12 bg-[var(--primary)]/25 transition-all duration-500 group-hover:w-20 group-hover:bg-[var(--primary)]" />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
