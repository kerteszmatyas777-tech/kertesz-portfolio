"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import FadeIn from "./FadeIn";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, budget, message, website }),
      });

      if (!response.ok) throw new Error("Unable to send contact form.");

      setName("");
      setEmail("");
      setService("");
      setBudget("");
      setMessage("");
      setWebsite("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white pt-20 pb-28 lg:pt-28 lg:pb-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-20">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            {t.contact.eyebrow}
          </p>
        </FadeIn>

        <div className="mt-6 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <FadeIn className="min-w-0 flex flex-col justify-between" delay={0.08}>
            <div>
              <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--primary)] md:text-7xl">
                {t.contact.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              <p className="mt-16 max-w-md text-lg leading-8 text-slate-600 lg:mt-24">
                {language === "hu" ? (
                  <>
                    Van egy márkaötleted vagy új feladatod? Írj, és nézzük meg,
                    <br className="lg:hidden" /> merre indulhatunk.
                  </>
                ) : (
                  t.contact.description
                )}
              </p>

              <a
                href="mailto:kerteszmatyas777@gmail.com"
                className="mt-10 block max-w-full break-words text-[clamp(1.15rem,5.5vw,2rem)] font-bold leading-tight tracking-[-0.03em] text-[var(--primary)] transition hover:opacity-70"
              >
                kerteszmatyas777@gmail.com
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-3 lg:mt-24">
              <a
                href="https://www.instagram.com/kerteszmatyas_grafikus/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--primary)]/20 text-[var(--primary)] transition hover:-translate-y-0.5 hover:bg-[var(--primary)] hover:text-white hover:shadow-lg"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/m%C3%A1ty%C3%A1s-kert%C3%A9sz-89856a267"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--primary)]/20 text-[var(--primary)] transition hover:-translate-y-0.5 hover:bg-[var(--primary)] hover:text-white hover:shadow-lg"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M6.3 8.6H3.2V20h3.1V8.6ZM4.75 3.7A1.8 1.8 0 1 0 4.75 7.3a1.8 1.8 0 0 0 0-3.6ZM20.8 13.5c0-3.44-1.84-5.04-4.3-5.04-1.98 0-2.86 1.09-3.35 1.86V8.6h-3.1V20h3.1v-5.65c0-1.49.28-2.93 2.12-2.93 1.81 0 1.83 1.69 1.83 3.03V20h3.1v-6.5Z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61571713991529"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--primary)]/20 text-[var(--primary)] transition hover:-translate-y-0.5 hover:bg-[var(--primary)] hover:text-white hover:shadow-lg"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M13.6 21v-7h2.45l.36-2.8H13.6V9.42c0-.81.23-1.36 1.4-1.36h1.5V5.55c-.26-.04-1.15-.12-2.19-.12-2.17 0-3.65 1.32-3.65 3.75v2.08H8v2.8h2.66v7h2.94Z" />
                </svg>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.16}>
            <form
            id="project-brief"
            onSubmit={handleSubmit}
            className="min-w-0 scroll-mt-28 rounded-[32px] border border-[var(--primary)]/10 bg-[#F8F9FB] p-6 sm:p-8 lg:p-10"
          >
            <h3 className="text-[2.35rem] font-bold leading-[0.94] tracking-[-0.045em] text-[var(--primary)] md:text-4xl">
              {t.contact.form.title}
            </h3>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <label className="absolute h-px w-px overflow-hidden whitespace-nowrap">
                Website
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </label>

              <label className="block">
                <span className="text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-slate-500 lg:text-xs lg:tracking-[0.18em]">
                  {t.contact.form.nameLabel}
                </span>
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="name"
                  className="mt-3 w-full border-b border-[var(--primary)]/20 bg-transparent py-3 text-lg text-[var(--primary)] outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)] lg:text-base"
                />
              </label>

              <label className="block">
                <span className="text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-slate-500 lg:text-xs lg:tracking-[0.18em]">
                  {t.contact.form.emailLabel}
                </span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  className="mt-3 w-full border-b border-[var(--primary)]/20 bg-transparent py-3 text-lg text-[var(--primary)] outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)] lg:text-base"
                />
              </label>

              <label className="block">
                <span className="text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-slate-500 lg:text-xs lg:tracking-[0.18em]">
                  {t.contact.form.serviceLabel}
                </span>
                <select
                  required
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  className="mt-3 w-full appearance-none border-b border-[var(--primary)]/20 bg-transparent py-3 text-lg text-[var(--primary)] outline-none transition focus:border-[var(--primary)] lg:text-base"
                >
                  <option value="" disabled>
                    {t.contact.form.selectPlaceholder}
                  </option>
                  {t.contact.form.services.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-slate-500 lg:text-xs lg:tracking-[0.18em]">
                  {t.contact.form.budgetLabel}
                </span>
                <select
                  required
                  value={budget}
                  onChange={(event) => setBudget(event.target.value)}
                  className="mt-3 w-full appearance-none border-b border-[var(--primary)]/20 bg-transparent py-3 text-lg text-[var(--primary)] outline-none transition focus:border-[var(--primary)] lg:text-base"
                >
                  <option value="" disabled>
                    {t.contact.form.selectPlaceholder}
                  </option>
                  {t.contact.form.budgets.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-8 block">
              <span className="text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-slate-500 lg:text-xs lg:tracking-[0.18em]">
                {t.contact.form.messageLabel}
              </span>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={t.contact.form.messagePlaceholder}
                className="mt-3 w-full resize-none border-b border-[var(--primary)]/20 bg-transparent py-3 text-lg leading-7 text-[var(--primary)] outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)] lg:text-base"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mx-auto mt-10 block w-fit rounded-full bg-[var(--primary)] px-7 py-3 text-xl font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:cursor-wait disabled:opacity-70 lg:w-full lg:px-8 lg:py-4 lg:text-base"
            >
              {status === "sending" ? t.contact.form.sending : t.contact.form.submit}
            </button>

            {status !== "idle" && status !== "sending" && (
              <p
                className={`mt-5 text-base leading-6 lg:text-sm ${
                  status === "success" ? "text-emerald-700" : "text-red-600"
                }`}
                role={status === "success" ? "status" : "alert"}
                aria-live="polite"
              >
                {status === "success" ? t.contact.form.success : t.contact.form.error}
              </p>
            )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
