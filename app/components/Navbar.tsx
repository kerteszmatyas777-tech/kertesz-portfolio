"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/data/translations";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 lg:px-20">

          {/* Logo */}

          <a href="#">
            <Image
              src="/logo.png"
              alt="Logo"
              width={96}
              height={96}
              className="h-16 w-auto lg:h-24"
              priority
            />
          </a>

          {/* Desktop */}

          <div className="hidden items-center gap-12 md:flex">

            <a
              href="#work"
              className="font-medium text-[var(--primary)] transition hover:opacity-60"
            >
              {t.nav.work}
            </a>

            <a
              href="#services"
              className="font-medium text-[var(--primary)] transition hover:opacity-60"
            >
              {t.nav.services}
            </a>

            <a
              href="#about"
              className="font-medium text-[var(--primary)] transition hover:opacity-60"
            >
              {t.nav.about}
            </a>

            <a
              href="#contact"
              className="font-medium text-[var(--primary)] transition hover:opacity-60"
            >
              {t.nav.contact}
            </a>

            <div className="flex gap-3 text-sm font-semibold text-[var(--primary)]">
              <button
                onClick={() => setLanguage("en")}
                className={language === "en" ? "" : "opacity-40"}
              >
                EN
              </button>

              <button
                onClick={() => setLanguage("hu")}
                className={language === "hu" ? "" : "opacity-40"}
              >
                HU
              </button>
            </div>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-5xl font-light text-[var(--primary)] transition"
          >
            {open ? "✕" : "☰"}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}

      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-[#F8F9FB] px-8 pt-32 pb-12 transition-all duration-500 ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Links */}

        <div className="space-y-8">

          <a
            href="#work"
            onClick={() => setOpen(false)}
            className="block text-6xl font-bold leading-none tracking-[-0.05em] text-[var(--primary)]"
          >
            {t.nav.work}
          </a>

          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="block text-6xl font-bold leading-none tracking-[-0.05em] text-[var(--primary)]"
          >
            {t.nav.services}
          </a>

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block text-6xl font-bold leading-none tracking-[-0.05em] text-[var(--primary)]"
          >
            {t.nav.about}
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-6xl font-bold leading-none tracking-[-0.05em] text-[var(--primary)]"
          >
            {t.nav.contact}
          </a>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-200 pt-8">

          <div className="flex items-center justify-between">

            <div className="flex gap-6 text-lg font-semibold text-[var(--primary)]">
              <button
                onClick={() => setLanguage("en")}
                className={language === "en" ? "" : "opacity-40"}
              >
                EN
              </button>

              <button
                onClick={() => setLanguage("hu")}
                className={language === "hu" ? "" : "opacity-40"}
              >
                HU
              </button>
            </div>

            <p className="text-sm tracking-[0.3em] uppercase text-slate-400">
              Kertész Mátyás
            </p>

          </div>

        </div>

      </div>
    </>
  );
}
