"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import type { ServiceSlug } from "../data/services";

type Props = {
  slug: ServiceSlug;
};

export default function ServicePageContent({ slug }: Props) {
  const { language } = useLanguage();
  const t = translations[language];
  const service = t.services.items.find((item) => item.slug === slug);

  if (!service) return null;

  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute -right-56 -top-56 h-[38rem] w-[38rem]">
          <div className="absolute inset-0 rounded-full bg-[#113B8E] opacity-[0.045]" />
          <div className="absolute inset-12 rounded-full bg-[#294B98] opacity-[0.055]" />
          <div className="absolute inset-24 rounded-full bg-[#536CAA] opacity-[0.07]" />
          <div className="absolute inset-36 rounded-full bg-[#7C8BBC] opacity-[0.09]" />
          <div className="absolute inset-48 rounded-full bg-[#A4AACD] opacity-[0.12]" />
          <div className="absolute inset-60 rounded-full bg-[#C9CADF] opacity-[0.18]" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 pb-24 pt-36 lg:px-24 lg:pb-36 lg:pt-48">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]/65">
            {t.services.eyebrow}
          </p>

          <h1 className="mt-6 max-w-4xl break-words text-5xl font-bold leading-[0.92] tracking-[-0.05em] text-[var(--primary)] md:text-7xl">
            {service.title}
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
            {service.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24 lg:px-0 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            {t.services.page.outcome}
          </p>

          <p className="max-w-3xl text-2xl leading-10 tracking-[-0.02em] text-[var(--primary)] md:text-3xl md:leading-[1.35]">
            {service.intro}
          </p>
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            {t.services.page.deliverables}
          </p>

          <div className="overflow-hidden rounded-[12px] border border-[var(--primary)]/10 bg-white">
            {service.deliverables.map((item) => (
              <div
                key={item}
                className="flex gap-5 border-b border-[var(--primary)]/10 px-6 py-6 last:border-b-0 md:px-8"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--primary)]" />
                <p className="text-lg leading-8 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-[14px] bg-[var(--primary)] px-7 py-10 text-white md:px-12 md:py-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold leading-[0.98] tracking-[-0.04em] md:text-5xl">
              {t.services.page.ctaTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              {t.services.page.ctaDescription}
            </p>
            <Link
              href="/#project-brief"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-[var(--primary)] transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              {t.services.page.cta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
