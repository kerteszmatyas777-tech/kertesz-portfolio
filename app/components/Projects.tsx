"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="work"
      className="mx-auto max-w-[1600px] px-6 py-28 lg:px-24 lg:py-40"
    >
      {/* Heading */}

      <p className="uppercase tracking-[0.45em] text-xs text-slate-500">
        {t.projects.eyebrow}
      </p>

      <h2 className="mt-6 text-4xl font-bold text-[var(--primary)] md:text-6xl">
        {t.projects.title}
      </h2>

      {/* Mobile */}

      <div className="mt-16 flex flex-col gap-24 lg:hidden">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            category={project.category}
            image={project.image}
            slug={project.slug}
            mobile
          />
        ))}
      </div>

      {/* Desktop */}

      <div className="mt-20 hidden gap-14 lg:grid lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            category={project.category}
            image={project.image}
            slug={project.slug}
          />
        ))}
      </div>
    </section>
  );
}
