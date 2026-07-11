"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { type Project } from "@/app/data/projects";
import { translations } from "@/app/data/translations";
import NextProject from "./NextProject";
import ProjectGallery from "./ProjectGallery";

type Props = {
  project: Project;
  nextProject: Project;
};

export default function ProjectPageContent({ project, nextProject }: Props) {
  const { language } = useLanguage();
  const projectTranslations = translations[language].projects;
  const labels = projectTranslations.detail;
  const caseStudy =
    project.slug === "kertesz-szigszer"
      ? projectTranslations.caseStudies.kerteszSzigszer
      : projectTranslations.caseStudyTemplates[project.categoryKey];
  const overview = caseStudy.overview || project.overview;
  const services = caseStudy.services.length ? caseStudy.services : project.services;
  const challenge = caseStudy.challenge || project.challenge;
  const solution = caseStudy.solution || project.solution;
  const hasDetails = Boolean(
    overview ||
      services.length ||
      project.colors.length ||
      challenge ||
      solution ||
      project.gallery.length
  );

  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      <section className="mx-auto max-w-[1600px] px-6 pb-0 pt-32 sm:px-8 lg:px-24 lg:pt-44">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          {projectTranslations.categories[project.categoryKey]}
        </p>

        <h1 className="mt-6 break-words text-5xl font-bold leading-none tracking-[-0.05em] text-[var(--primary)] md:text-7xl xl:text-8xl">
          {project.title}
        </h1>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[28px] shadow-2xl sm:mt-20 sm:rounded-[42px]">
          <Image
            src={project.image}
            alt={`${project.title} project cover`}
            fill
            priority
            sizes="(min-width: 1600px) 1450px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:px-0 lg:py-32">
        {hasDetails && (
          <>
            {overview && (
              <DetailSection label={labels.overview}>
                <p className="text-xl leading-10 text-slate-600">{overview}</p>
              </DetailSection>
            )}

            {services.length > 0 && (
              <DetailSection label={labels.services} className="mt-20 lg:mt-28">
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-white px-5 py-3 font-medium text-[var(--primary)] shadow-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </DetailSection>
            )}

            {project.colors.length > 0 && (
              <DetailSection label={labels.colours} className="mt-20 lg:mt-28">
                <div className="grid grid-cols-2 gap-5 sm:gap-8 md:grid-cols-4">
                  {project.colors.map((color) => (
                    <div key={color}>
                      <div
                        className="aspect-square rounded-[22px] shadow-md sm:rounded-[28px]"
                        style={{ backgroundColor: color }}
                      />
                      <p className="mt-4 text-center font-medium text-slate-500">{color}</p>
                    </div>
                  ))}
                </div>
              </DetailSection>
            )}

            {challenge && (
              <DetailSection label={labels.challenge} className="mt-20 lg:mt-32">
                <p className="text-xl leading-10 text-slate-600">{challenge}</p>
              </DetailSection>
            )}

            {solution && (
              <DetailSection label={labels.solution} className="mt-20 lg:mt-28">
                <p className="text-xl leading-10 text-slate-600">{solution}</p>
              </DetailSection>
            )}

            {project.gallery.length > 0 && (
              <div className="mt-24 lg:mt-40">
                <ProjectGallery
                  images={project.gallery}
                  projectTitle={project.title}
                  labels={labels}
                />
              </div>
            )}
          </>
        )}

        <NextProject project={nextProject} label={labels.nextProject} />
      </section>
    </main>
  );
}

function DetailSection({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-16 ${className}`}>
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</p>
      {children}
    </div>
  );
}
