"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 lg:px-12 py-32">

      <p className="uppercase tracking-[0.3em] text-sm text-slate-500">
        {t.services.eyebrow}
      </p>

      <h2 className="mt-4 text-5xl font-bold text-[var(--primary)]">
        {t.services.title}
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        {t.services.items.map((service) => (
          <div key={service.title} className="border border-slate-200 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="mt-4 text-slate-600">
              {service.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}
