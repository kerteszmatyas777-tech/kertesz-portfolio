import { projects } from "@/app/data/projects";
import ProjectGallery from "@/app/components/ProjectGallery";
import NextProject from "@/app/components/NextProject";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-[#F8F9FB]">

      {/* HERO */}

      <section className="mx-auto max-w-[1600px] px-8 pt-44 lg:px-24">

        <p className="uppercase tracking-[0.4em] text-sm text-slate-500">
          {project.category}
        </p>

        <h1 className="mt-6 text-6xl md:text-7xl xl:text-8xl font-bold tracking-[-0.05em] leading-none text-[var(--primary)]">
          {project.title}
        </h1>

        <div className="relative mt-20 aspect-[16/9] overflow-hidden rounded-[42px] shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

      </section>

      {/* CONTENT */}

      <section className="mx-auto max-w-[1200px] px-8 py-32">

        <div className="grid gap-16 lg:grid-cols-[220px_1fr]">
          <p className="uppercase tracking-[0.35em] text-xs text-slate-400">
            Overview
          </p>

          <p className="text-xl leading-10 text-slate-600">
            {project.overview}
          </p>
        </div>

        <div className="mt-28 grid gap-16 lg:grid-cols-[220px_1fr]">
          <p className="uppercase tracking-[0.35em] text-xs text-slate-400">
            Services
          </p>

          <div className="flex flex-wrap gap-4">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full bg-white px-6 py-3 shadow-sm font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-28 grid gap-16 lg:grid-cols-[220px_1fr]">
          <p className="uppercase tracking-[0.35em] text-xs text-slate-400">
            Brand Colours
          </p>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {project.colors.map((color) => (
              <div key={color}>
                <div
                  className="aspect-square rounded-[28px] shadow-md"
                  style={{ backgroundColor: color }}
                />

                <p className="mt-4 text-center font-medium text-slate-500">
                  {color}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 grid gap-16 lg:grid-cols-[220px_1fr]">
          <p className="uppercase tracking-[0.35em] text-xs text-slate-400">
            Challenge
          </p>

          <p className="text-xl leading-10 text-slate-600">
            {project.challenge}
          </p>
        </div>

        <div className="mt-28 grid gap-16 lg:grid-cols-[220px_1fr]">
          <p className="uppercase tracking-[0.35em] text-xs text-slate-400">
            Solution
          </p>

          <p className="text-xl leading-10 text-slate-600">
            {project.solution}
          </p>
        </div>

        <div className="mt-40">
          <ProjectGallery images={project.gallery} />
        </div>

        <NextProject project={nextProject} />

      </section>

    </main>
  );
}