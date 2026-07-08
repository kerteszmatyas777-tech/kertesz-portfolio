"use client";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#F8F9FB]">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-8 px-8 py-12 text-center lg:flex-row lg:px-20 lg:text-left">

        <div>
          <h3 className="text-2xl font-bold text-[var(--primary)]">
            Kertész Mátyás
          </h3>

          <p className="mt-2 text-slate-500">
            Brand Identity & Graphic Designer
          </p>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-semibold text-[var(--primary)] transition hover:opacity-60"
        >
          Back to Top ↑
        </button>

        <p className="text-slate-500">
          © {new Date().getFullYear()} Kertész Mátyás
        </p>

      </div>
    </footer>
  );
}