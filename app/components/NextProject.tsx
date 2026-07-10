import Link from "next/link";
import Image from "next/image";
import { Project } from "@/app/data/projects";

type Props = {
  project: Project;
  label: string;
};

export default function NextProject({ project, label }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group mt-40 block"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</p>

      <h2 className="mt-4 break-words text-4xl font-bold tracking-[-0.04em] text-[var(--primary)] sm:text-5xl">
        {project.title}
      </h2>

      <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-[40px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
        className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
    </Link>
  );
}
