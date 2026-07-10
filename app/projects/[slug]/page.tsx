import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ProjectPageContent from "@/app/components/ProjectPageContent";
import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  const description =
    project.overview ||
    `${project.title} — a ${project.category.toLowerCase()} project by Kertész Mátyás.`;

  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Kertész Mátyás`,
      description,
      images: [{ url: project.image, alt: `${project.title} project cover` }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Navbar />
      <ProjectPageContent project={project} nextProject={nextProject} />
      <Footer />
    </>
  );
}
