export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32">

      <p className="uppercase tracking-[0.3em] text-sm text-slate-500">
        Services
      </p>

      <h2 className="mt-4 text-5xl font-bold text-[var(--primary)]">
        What I can help you with
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        <div className="border border-slate-200 rounded-3xl p-8">
          <h3 className="text-2xl font-semibold">Brand Identity</h3>
          <p className="mt-4 text-slate-600">
            Logos, visual identity systems and brand guidelines.
          </p>
        </div>

        <div className="border border-slate-200 rounded-3xl p-8">
          <h3 className="text-2xl font-semibold">Print Design</h3>
          <p className="mt-4 text-slate-600">
            Posters, books, brochures and editorial layouts.
          </p>
        </div>

        <div className="border border-slate-200 rounded-3xl p-8">
          <h3 className="text-2xl font-semibold">Social Media</h3>
          <p className="mt-4 text-slate-600">
            Campaign graphics and content for modern brands.
          </p>
        </div>

      </div>

    </section>
  );
}