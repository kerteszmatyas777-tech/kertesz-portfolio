import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  category: string;
  image: string;
  slug: string;
  mobile?: boolean;
};

export default function ProjectCard({
  title,
  category,
  image,
  slug,
  mobile = false,
}: Props) {
  if (mobile) {
    return (
      <Link href={`/projects/${slug}`} className="block group">

        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
          {category}
        </p>

        <h3 className="mt-5 text-5xl font-bold leading-[0.9] tracking-[-0.05em] text-[var(--primary)]">
          {title}
        </h3>

        <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-[32px]">

          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

        </div>

        <div className="mt-6 flex items-center gap-3 font-semibold text-[var(--primary)]">

          <span>View Project</span>

          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>

        </div>

      </Link>
    );
  }

  return (
    <Link href={`/projects/${slug}`} className="block group">

      <div className="overflow-hidden rounded-[32px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

        <div className="relative aspect-[16/10] overflow-hidden">

          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width:768px)100vw,50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

        </div>

        <div className="p-8">

          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            {category}
          </p>

          <h3 className="mt-4 text-3xl font-bold text-[var(--primary)]">
            {title}
          </h3>

          <div className="mt-8 flex items-center gap-3 font-semibold text-[var(--primary)]">

            <span>View Project</span>

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>

          </div>

        </div>

      </div>

    </Link>
  );
}