"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

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
    <section id="contact" className="bg-white py-28 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-20">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
          {t.contact.eyebrow}
        </p>

        <div className="mt-6 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--primary)] md:text-7xl">
                {t.contact.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              <p className="mt-16 max-w-md text-lg leading-8 text-slate-600 lg:mt-24">
                {t.contact.description}
              </p>

              <a
                href="mailto:kerteszmatyas777@gmail.com"
                className="mt-10 inline-block text-2xl font-bold tracking-[-0.03em] text-[var(--primary)] transition hover:opacity-70"
              >
                kerteszmatyas777@gmail.com
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[var(--primary)] lg:mt-24">
              <a
                href="https://www.instagram.com/kerteszmatyas_grafikus/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-60"
              >
                Instagram
              </a>

              <a href="#" className="transition hover:opacity-60">
                Behance
              </a>

              <a href="#" className="transition hover:opacity-60">
                LinkedIn
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-[var(--primary)]/10 bg-[#F8F9FB] p-6 sm:p-8 lg:p-10"
          >
            <h3 className="text-3xl font-bold leading-[0.98] tracking-[-0.04em] text-[var(--primary)] md:text-4xl">
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
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t.contact.form.nameLabel}
                </span>
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="name"
                  className="mt-3 w-full border-b border-[var(--primary)]/20 bg-transparent py-3 text-[var(--primary)] outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)]"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t.contact.form.emailLabel}
                </span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  className="mt-3 w-full border-b border-[var(--primary)]/20 bg-transparent py-3 text-[var(--primary)] outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)]"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t.contact.form.serviceLabel}
                </span>
                <select
                  required
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  className="mt-3 w-full appearance-none border-b border-[var(--primary)]/20 bg-transparent py-3 text-[var(--primary)] outline-none transition focus:border-[var(--primary)]"
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
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t.contact.form.budgetLabel}
                </span>
                <select
                  required
                  value={budget}
                  onChange={(event) => setBudget(event.target.value)}
                  className="mt-3 w-full appearance-none border-b border-[var(--primary)]/20 bg-transparent py-3 text-[var(--primary)] outline-none transition focus:border-[var(--primary)]"
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
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {t.contact.form.messageLabel}
              </span>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={t.contact.form.messagePlaceholder}
                className="mt-3 w-full resize-none border-b border-[var(--primary)]/20 bg-transparent py-3 text-[var(--primary)] outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)]"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-10 w-full rounded-full bg-[var(--primary)] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:cursor-wait disabled:opacity-70"
            >
              {status === "sending" ? t.contact.form.sending : t.contact.form.submit}
            </button>

            {status !== "idle" && status !== "sending" && (
              <p
                className={`mt-5 text-sm leading-6 ${
                  status === "success" ? "text-emerald-700" : "text-red-600"
                }`}
                role="status"
              >
                {status === "success" ? t.contact.form.success : t.contact.form.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
