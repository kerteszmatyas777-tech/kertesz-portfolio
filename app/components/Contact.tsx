export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-40"
    >
      <div className="mx-auto max-w-[1500px] px-8 lg:px-20">

        <p className="uppercase tracking-[0.4em] text-xs text-slate-500">
          CONTACT
        </p>

        <h2 className="mt-6 max-w-4xl text-6xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--primary)] md:text-7xl">
          Let's create
          <br />
          something memorable.
        </h2>

        <div className="mt-24 grid gap-20 lg:grid-cols-2">

          <div>

            <p className="text-xl leading-9 text-slate-600">
              Have a project in mind? I'd love to hear about it.
            </p>

            <a
              href="mailto:kerteszmatyas777@gmail.com"
              className="mt-10 inline-block text-3xl font-bold text-[var(--primary)] transition hover:opacity-70"
            >
              kerteszmatyas777@gmail.com
            </a>

          </div>

          <div className="flex flex-col gap-6 text-2xl font-semibold text-[var(--primary)]">

            <a
              href="https://www.instagram.com/kerteszmatyas_grafikus/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-70"
            >
              Instagram ↗
            </a>

            <a
              href="#"
              className="transition hover:opacity-70"
            >
              Behance ↗
            </a>

            <a
              href="#"
              className="transition hover:opacity-70"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}