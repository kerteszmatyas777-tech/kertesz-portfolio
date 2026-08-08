"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import FadeIn from "./FadeIn";

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? t.items.length - 1 : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === t.items.length - 1 ? 0 : current + 1
    );
  };

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

        <FadeIn className="mt-8">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-center">
            <div className="max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(t.items.length).padStart(2, "0")}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={previous}
                  aria-label={t.previous}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--primary)]/20 text-xl text-[var(--primary)] transition hover:-translate-y-0.5 hover:bg-[var(--primary)] hover:text-white hover:shadow-xl"
                >
                  <span aria-hidden="true">←</span>
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label={t.next}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--primary)]/20 text-xl text-[var(--primary)] transition hover:-translate-y-0.5 hover:bg-[var(--primary)] hover:text-white hover:shadow-xl"
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>

              <div className="mt-8 flex gap-2">
                {t.items.map((item, index) => (
                  <button
                    key={item.project}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`${t.goTo} ${index + 1}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-8 bg-[var(--primary)]"
                        : "w-2 bg-[var(--primary)]/25 hover:bg-[var(--primary)]/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative mx-auto min-h-[25rem] w-full max-w-[680px] overflow-visible pb-12 pr-10 sm:min-h-[24rem] lg:min-h-[28rem]">
              {t.items.map((item, index) => {
                const offset = (index - activeIndex + t.items.length) % t.items.length;
                const isActive = offset === 0;
                const translateX = offset * 22;
                const translateY = offset * 22;
                const rotate = offset === 0 ? 0 : offset % 2 === 0 ? 4.5 : -5;
                const scale = 1 - offset * 0.045;

                return (
                  <article
                    key={item.project}
                    className={`absolute left-0 top-0 flex h-[21rem] w-[calc(100%-2.5rem)] flex-col overflow-hidden rounded-[14px] border bg-white p-6 shadow-[0_22px_60px_rgba(17,59,142,0.12)] transition-all duration-500 ease-out sm:h-[22rem] md:p-8 lg:h-[24rem] ${
                      isActive
                        ? "border-[var(--primary)]/20 opacity-100"
                        : "border-[var(--primary)]/10 opacity-90"
                    }`}
                    style={{
                      zIndex: t.items.length - offset,
                      transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    aria-hidden={!isActive}
                  >
                    {!isActive && (
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 z-20 bg-white/80 backdrop-blur-[1px]"
                      />
                    )}

                    <div
                      aria-hidden="true"
                      className="absolute -right-14 -top-20 h-56 w-56 rounded-full border border-[var(--primary)]/10"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -right-4 -top-8 h-36 w-36 rounded-full border border-[var(--primary)]/10"
                    />

                    <div className={`relative ${isActive ? "" : "opacity-20 blur-[1px]"}`}>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                        {item.project}
                      </p>

                      <p className="mt-7 line-clamp-4 text-[clamp(1.55rem,3vw,2.65rem)] font-bold leading-[1.02] tracking-[-0.05em] text-[var(--primary)] md:mt-8">
                        “{item.quote}”
                      </p>
                    </div>

                    <div className={`relative mt-auto pt-8 ${isActive ? "" : "opacity-20 blur-[1px]"}`}>
                      <div className="h-px w-full bg-[var(--primary)]/10" />
                      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="text-lg font-bold tracking-[-0.03em] text-[var(--primary)]">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm font-medium text-slate-500">
                            {item.role}
                          </p>
                        </div>

                        <p className="max-w-xs text-sm font-medium leading-6 text-slate-500 sm:text-right">
                          {item.context}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
