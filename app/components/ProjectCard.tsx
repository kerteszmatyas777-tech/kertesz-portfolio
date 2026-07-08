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
      <Link href={`/projects/${slug}`} className="group block">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
          {category}
        </p>

        <div className="mt-4 flex items-start justify-between gap-4">
          <h3 className="text-5xl font-bold leading-[0.9] tracking-[-0.05em] text-[var(--primary)]">
            {title}
          </h3>

          <span className="mt-2 text-3xl text-[var(--primary)] transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </div>

        <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-[32px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/projects/${slug}`} className="group block">
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

          <div className="mt-5 flex items-start justify-between gap-4">

            <h3 className="text-3xl font-bold tracking-[-0.03em] text-[var(--primary)] transition duration-300 group-hover:translate-x-1">
              {title}
            </h3>

            <span className="text-3xl text-[var(--primary)] transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>

          </div>

        </div>

      </div>
    </Link>
  );
}