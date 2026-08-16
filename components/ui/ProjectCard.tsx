import Link from "next/link";
import { Zap } from "lucide-react";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cta={`project-card-${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-sm border border-border-brand bg-white transition-shadow hover:shadow-lg"
    >
      <div className="h-52 w-full">
        <PlaceholderPhoto label={`${project.title} — photo placeholder`} icon={Zap} tone="navy" />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-green-dark">{project.category}</p>
        <h3 className="mt-2 text-lg font-medium text-navy">{project.title}</h3>
        <p className="mt-1 text-sm text-muted">
          {project.area} · {project.capacity}
        </p>
        <span className="mt-4 inline-block text-sm font-medium text-navy/80 group-hover:text-green-dark">
          View project →
        </span>
      </div>
    </Link>
  );
}
