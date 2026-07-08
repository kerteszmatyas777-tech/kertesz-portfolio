import Link from "next/link";
import Image from "next/image";
import { Project } from "@/app/data/projects";

type Props = {
  project: Project;
};

export default function NextProject({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group mt-40 block"
    >
      <p className="uppercase tracking-[0.35em] text-xs text-slate-400">
        Next Project
      </p>

      <h2 className="mt-4 text-5xl font-bold text-[var(--primary)]">
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