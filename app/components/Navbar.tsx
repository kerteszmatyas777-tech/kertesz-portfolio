"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/data/translations";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const handleMobileLanguageChange = (nextLanguage: typeof language) => {
    setLanguage(nextLanguage);
    setOpen(false);
  };

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

          <Link href="/" aria-label="Kertész Mátyás homepage">
            <Image
              src="/logo.png"
              alt=""
              width={96}
              height={96}
              className="h-16 w-auto lg:h-24"
              priority
            />
          </Link>

          {/* Desktop */}

          <div className="hidden items-center gap-12 md:flex">

            <Link
              href="/#work"
              className="font-medium text-[var(--primary)] transition hover:opacity-60"
            >
              {t.nav.work}
            </Link>

            <Link
              href="/#services"
              className="font-medium text-[var(--primary)] transition hover:opacity-60"
            >
              {t.nav.services}
            </Link>

            <Link
              href="/#about"
              className="font-medium text-[var(--primary)] transition hover:opacity-60"
            >
              {t.nav.about}
            </Link>

            <Link
              href="/#contact"
              className="font-medium text-[var(--primary)] transition hover:opacity-60"
            >
              {t.nav.contact}
            </Link>

            <div className="flex gap-3 text-sm font-semibold text-[var(--primary)]">
              <button
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
                className={language === "en" ? "" : "opacity-40"}
              >
                EN
              </button>

              <button
                onClick={() => setLanguage("hu")}
                aria-pressed={language === "hu"}
                className={language === "hu" ? "" : "opacity-40"}
              >
                HU
              </button>
            </div>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="relative h-10 w-10 md:hidden"
          >
            <span
              className={`absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 bg-[var(--primary)] transition ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 bg-[var(--primary)] transition ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-between overflow-x-hidden bg-[#F8F9FB] px-6 pt-32 pb-10 transition-all duration-500 ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Links */}

        <div className="space-y-6">

          <Link
            href="/#work"
            onClick={() => setOpen(false)}
            className="block max-w-full whitespace-nowrap text-[clamp(2rem,10vw,3.25rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--primary)]"
          >
            {t.nav.work}
          </Link>

          <Link
            href="/#services"
            onClick={() => setOpen(false)}
            className="block max-w-full whitespace-nowrap text-[clamp(2rem,10vw,3.25rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--primary)]"
          >
            {t.nav.services}
          </Link>

          <Link
            href="/#about"
            onClick={() => setOpen(false)}
            className="block max-w-full whitespace-nowrap text-[clamp(2rem,10vw,3.25rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--primary)]"
          >
            {t.nav.about}
          </Link>

          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="block max-w-full whitespace-nowrap text-[clamp(2rem,10vw,3.25rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--primary)]"
          >
            {t.nav.contact}
          </Link>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-200 pt-8">

          <div className="flex items-center justify-between">

            <div className="flex gap-6 text-lg font-semibold text-[var(--primary)]">
              <button
                onClick={() => handleMobileLanguageChange("en")}
                aria-pressed={language === "en"}
                className={language === "en" ? "" : "opacity-40"}
              >
                EN
              </button>

              <button
                onClick={() => handleMobileLanguageChange("hu")}
                aria-pressed={language === "hu"}
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
