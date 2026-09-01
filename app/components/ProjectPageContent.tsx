"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { type Project } from "@/app/data/projects";
import { translations } from "@/app/data/translations";
import FadeIn from "./FadeIn";
import NextProject from "./NextProject";
import ProjectGallery from "./ProjectGallery";

type Props = {
  project: Project;
  nextProject: Project;
};

export default function ProjectPageContent({ project, nextProject }: Props) {
  const { language } = useLanguage();
  const coverRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: coverRef,
    offset: ["start end", "end start"],
  });
  const coverY = useTransform(scrollYProgress, [0, 1], ["-4%", "5%"]);
  const coverScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const projectTranslations = translations[language].projects;
  const labels = projectTranslations.detail;
  const categoryLabel =
    project.categoryLabel?.[language] ?? projectTranslations.categories[project.categoryKey];
  const caseStudy =
    project.slug === "kertesz-szigszer"
      ? projectTranslations.caseStudies.kerteszSzigszer
      : project.slug === "gibi-gyongy"
        ? projectTranslations.caseStudies.gibiGyongy
      : project.slug === "mazur"
        ? projectTranslations.caseStudies.mazur
      : project.slug === "hermon-kertepites"
        ? projectTranslations.caseStudies.hermonKertepites
      : projectTranslations.caseStudyTemplates[project.categoryKey];
  const overview = caseStudy.overview || project.overview;
  const services = caseStudy.services.length ? caseStudy.services : project.services;
  const challenge = caseStudy.challenge || project.challenge;
  const solution = caseStudy.solution || project.solution;
  const gallery =
    language === "en" && project.galleryEn ? project.galleryEn : project.gallery;
  const usesSplitGallery = project.galleryLayout === "wideGrid";
  const primaryGallery = usesSplitGallery ? gallery.slice(0, 2) : gallery;
  const secondaryGallery = usesSplitGallery ? gallery.slice(2) : [];
  const hasDetails = Boolean(
    overview ||
      services.length ||
      project.colors.length ||
      challenge ||
      solution ||
      gallery.length ||
      project.socialMediaGallery?.length
  );

  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      <section className="mx-auto max-w-[1600px] px-6 pb-0 pt-32 sm:px-8 lg:px-24 lg:pt-44">
        <FadeIn amount={0.01}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            {categoryLabel}
          </p>

          <h1 className="mt-6 max-w-5xl break-words text-5xl font-bold leading-[0.9] tracking-[-0.06em] text-[var(--primary)] md:text-7xl xl:text-8xl">
            {project.title}
          </h1>
        </FadeIn>

        <motion.div
          ref={coverRef}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 80, clipPath: "inset(12% 0 0 0)" }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[12px] shadow-[0_28px_65px_rgba(17,59,142,0.2)] sm:mt-16"
        >
          <motion.div
            className="absolute inset-0"
            style={shouldReduceMotion ? undefined : { y: coverY, scale: coverScale }}
          >
            <Image
              src={project.image}
              alt={`${project.title} project cover`}
              fill
              priority
              sizes="(min-width: 1600px) 1450px, 100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-24 sm:px-8 lg:px-0 lg:py-36">
        {hasDetails && (
          <>
            {overview && (
              <DetailSection label={labels.overview}>
                <FadeIn>
                  <p className="max-w-4xl text-[clamp(2rem,3.35vw,3.35rem)] leading-[1.12] tracking-[-0.035em] text-[var(--primary)]">
                    {overview}
                  </p>
                </FadeIn>
              </DetailSection>
            )}

            {challenge && (
              <DetailSection label={labels.challenge} className="mt-24 border-t border-[var(--primary)]/10 pt-10 lg:mt-36 lg:pt-14">
                <FadeIn>
                  <p className="max-w-3xl text-xl leading-9 text-slate-600 md:text-2xl md:leading-10">
                    {challenge}
                  </p>
                </FadeIn>
              </DetailSection>
            )}

            {solution && (
              <DetailSection label={labels.solution} className="mt-20 lg:mt-28">
                <FadeIn>
                  <p className="max-w-3xl text-xl leading-9 text-slate-600 md:text-2xl md:leading-10">
                    {solution}
                  </p>
                </FadeIn>
              </DetailSection>
            )}

            {services.length > 0 && (
              <DetailSection label={labels.services} className="mt-24 lg:mt-36">
                <div className="grid overflow-hidden rounded-[12px] border border-[var(--primary)]/10 bg-white sm:grid-cols-2">
                  {services.map((service, index) => (
                    <div
                      key={service}
                      className="flex items-start gap-5 border-b border-[var(--primary)]/10 px-5 py-6 last:border-b-0 sm:px-7 sm:py-8"
                    >
                      <span className="pt-0.5 text-xs font-semibold tracking-[0.14em] text-[var(--primary)]/45">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-lg font-medium leading-7 text-[var(--primary)]">{service}</p>
                    </div>
                  ))}
                </div>
              </DetailSection>
            )}

            {!usesSplitGallery && project.colors.length > 0 && (
              <DetailSection label={labels.colours} className="mt-24 lg:mt-36">
                <BrandColours colors={project.colors} />
              </DetailSection>
            )}

            {primaryGallery.length > 0 && (
              <div className="mt-28 lg:mt-40">
                <ProjectGallery
                  images={primaryGallery}
                  projectTitle={project.title}
                  labels={labels}
                  layout={project.galleryLayout}
                />
              </div>
            )}

            {usesSplitGallery && project.colors.length > 0 && (
              <DetailSection label={labels.colours} className="mt-24 lg:mt-36">
                <BrandColours colors={project.colors} />
              </DetailSection>
            )}

            {secondaryGallery.length > 0 && (
              <div className="mt-12 lg:mt-16">
                <ProjectGallery
                  images={secondaryGallery}
                  projectTitle={project.title}
                  labels={labels}
                  layout="widePairs"
                />
              </div>
            )}

            {project.socialMediaGallery && project.socialMediaGallery.length > 0 && (
              <DetailSection label={labels.socialMedia} className="mt-28 lg:mt-40">
                <ProjectGallery
                  images={project.socialMediaGallery}
                  projectTitle={project.title}
                  labels={labels}
                  layout="widePairs"
                />
              </DetailSection>
            )}
          </>
        )}

        <section className="mt-28 border-y border-[var(--primary)]/10 py-14 lg:mt-40 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            {labels.ctaEyebrow}
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-bold leading-[0.95] tracking-[-0.045em] text-[var(--primary)] md:text-6xl">
                {labels.ctaTitle}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                {labels.ctaDescription}
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex w-fit rounded-full bg-[var(--primary)] px-8 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {labels.ctaButton}
            </Link>
          </div>
        </section>

        <NextProject project={nextProject} label={labels.nextProject} />
      </section>
    </main>
  );
}

function BrandColours({ colors }: { colors: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-5 sm:gap-8 md:grid-cols-4">
      {colors.map((color) => (
        <div key={color}>
          <div
            className="aspect-square rounded-[8px] shadow-lg"
            style={{ backgroundColor: color }}
          />
          <p className="mt-4 text-center font-medium text-slate-500">{color}</p>
        </div>
      ))}
    </div>
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
    <div className={`grid gap-7 lg:grid-cols-[220px_1fr] lg:gap-16 ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{label}</p>
      {children}
    </div>
  );
}
