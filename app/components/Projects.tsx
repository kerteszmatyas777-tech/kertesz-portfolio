"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { useRef, useState } from "react";

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToProject = (index: number) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const slides = Array.from(
      carousel.querySelectorAll<HTMLElement>("[data-project-slide]")
    );
    const target = slides[index];

    if (!target) return;

    carousel.scrollTo({
      left: target.offsetLeft - (carousel.clientWidth - target.clientWidth) / 2,
      behavior: "smooth",
    });
  };

  const handleCarouselScroll = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const slides = Array.from(
      carousel.querySelectorAll<HTMLElement>("[data-project-slide]")
    );
    const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2;
    const closestIndex = slides.reduce((closest, slide, index) => {
      const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
      const closestCenter =
        slides[closest].offsetLeft + slides[closest].clientWidth / 2;

      return Math.abs(slideCenter - carouselCenter) <
        Math.abs(closestCenter - carouselCenter)
        ? index
        : closest;
    }, 0);

    setActiveIndex(closestIndex);
  };

  return (
    <section
      id="work"
      className="mx-auto max-w-[1600px] px-6 pt-28 pb-20 lg:px-24 lg:pt-40 lg:pb-28"
    >
      {/* Heading */}

      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
        {t.projects.eyebrow}
      </p>

      <h2 className="mt-5 text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--primary)] md:text-6xl">
        {t.projects.title}
      </h2>

      {/* Mobile */}

      <div
        ref={carouselRef}
        onScroll={handleCarouselScroll}
        className="-mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[10vw] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden"
      >
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

      <div className="mt-6 flex items-center justify-center gap-5 lg:hidden">
        <button
          type="button"
          onClick={() => scrollToProject(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label={t.projects.previousProject}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary)]/20 text-lg text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white disabled:pointer-events-none disabled:opacity-30"
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className="flex items-center gap-2" aria-label={t.projects.projectPagination}>
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => scrollToProject(index)}
              aria-label={`${t.projects.goToProject} ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-[var(--primary)]"
                  : "w-2 bg-[var(--primary)]/25 hover:bg-[var(--primary)]/50"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToProject(activeIndex + 1)}
          disabled={activeIndex === projects.length - 1}
          aria-label={t.projects.nextProject}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary)]/20 text-lg text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white disabled:pointer-events-none disabled:opacity-30"
        >
          <span aria-hidden="true">→</span>
        </button>
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
