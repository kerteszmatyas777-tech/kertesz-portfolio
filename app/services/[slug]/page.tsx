import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ServicePageContent from "@/app/components/ServicePageContent";
import { isServiceSlug, serviceSlugs } from "@/app/data/services";
import { translations } from "@/app/data/translations";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (!isServiceSlug(slug)) return {};

  const service = translations.en.services.items.find((item) => item.slug === slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.title} | Kertész Mátyás`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  if (!isServiceSlug(slug)) notFound();

  return (
    <>
      <Navbar />
      <ServicePageContent slug={slug} />
      <Footer />
    </>
  );
}
