import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="container-vayani">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Recent Projects"
            title="Powering Karachi, one project at a time."
            tone="light"
          />
          <Button href="/projects" variant="ghost-light" data-cta="projects-view-all" className="shrink-0">
            View All Projects
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
