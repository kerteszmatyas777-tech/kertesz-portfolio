import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32">

      <p className="uppercase tracking-[0.3em] text-sm text-slate-500">
        About
      </p>

      <div className="grid lg:grid-cols-2 gap-20 items-center mt-12">

        <div>
          <h2 className="text-5xl font-bold text-[var(--primary)] leading-tight">
            Hi, I'm Mátyás.
          </h2>

          <p className="mt-8 text-xl text-slate-600 leading-relaxed">
            I'm a graphic designer from Hungary specializing in brand identity,
            print design and visual communication. I enjoy creating clean,
            timeless design that helps businesses grow.
          </p>

          <div className="grid grid-cols-3 gap-8 mt-12">

            <div>
              <h3 className="text-4xl font-bold text-[var(--primary)]">50+</h3>
              <p className="text-slate-500 mt-2">Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[var(--primary)]">4+</h3>
              <p className="text-slate-500 mt-2">Years</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[var(--primary)]">100%</h3>
              <p className="text-slate-500 mt-2">Custom</p>
            </div>

          </div>
        </div>

        <div>
          <Image
            src="/images/portrait.png"
            alt="image_kivágva"
            width={600}
            height={700}
            className="rounded-[32px]"
          />
        </div>

      </div>

    </section>
  );
}