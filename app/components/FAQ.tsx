"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/data/translations";

export default function FAQ() {
  const { language } = useLanguage();
  const t = translations[language].faq;

  return (
    <section className="relative overflow-hidden bg-[#F8F9FB] px-6 py-24 sm:px-10 lg:px-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--primary)]/60">
              {t.eyebrow}
            </p>
            <h2 className="mt-5 max-w-lg text-4xl font-bold tracking-[-0.04em] text-[var(--primary)] sm:text-5xl">
              {t.title}
            </h2>
          </div>

          <div className="divide-y divide-[var(--primary)]/12 border-y border-[var(--primary)]/12">
            {t.items.map((item) => (
              <article key={item.question} className="py-8">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--primary)] sm:text-2xl">
                  {item.question}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                  {item.beforeLink}{" "}
                  <Link
                    href={item.linkHref}
                    className="font-semibold text-[var(--primary)] underline decoration-[var(--primary)]/25 underline-offset-4 transition-colors hover:decoration-[var(--primary)]"
                  >
                    {item.linkLabel}
                  </Link>
                  {item.afterLink}
                </p>
              </article>
            ))}

            <div className="py-8">
              <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {t.externalIntro}{" "}
                <a
                  href="https://schema.org"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[var(--primary)] underline decoration-[var(--primary)]/25 underline-offset-4 transition-colors hover:decoration-[var(--primary)]"
                >
                  Schema.org
                </a>{" "}
                {t.externalMiddle}{" "}
                <a
                  href="https://developers.google.com/search/docs"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[var(--primary)] underline decoration-[var(--primary)]/25 underline-offset-4 transition-colors hover:decoration-[var(--primary)]"
                >
                  Google Search Central
                </a>
                .
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {t.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]/75 transition-colors hover:text-[var(--primary)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
