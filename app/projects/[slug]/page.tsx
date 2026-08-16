import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Zap, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import ProjectGallery from "@/components/ui/ProjectGallery";
import { projects } from "@/data/projects";
import { buildWhatsAppLink, whatsappMessages } from "@/data/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="bg-navy py-16 md:py-20 text-white">
        <div className="container-vayani">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-green">{project.category}</p>
          <h1 className="mt-3 text-[clamp(1.75rem,4vw,3rem)] font-medium tracking-tight">{project.title}</h1>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" aria-hidden />
              {project.area}
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4" aria-hidden />
              {project.capacity} · {project.systemType}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden />
              {project.installationDate}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-vayani grid gap-14 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <ProjectGallery title={project.title} />
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xl font-medium text-navy">Project Overview</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

            <dl className="mt-8 space-y-3 border-t border-border-brand pt-6 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-muted">System Capacity</dt>
                <dd className="font-medium text-navy">{project.capacity}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted">System Type</dt>
                <dd className="text-right font-medium text-navy">{project.systemType}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Panel Model</dt>
                <dd className="text-right font-medium text-navy">{project.panelModel}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Inverter</dt>
                <dd className="text-right font-medium text-navy">{project.inverter}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Battery</dt>
                <dd className="text-right font-medium text-navy">{project.battery}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Location</dt>
                <dd className="font-medium text-navy">{project.area}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3">
              <Button href="/contact#quote" variant="primary" data-cta="project-detail-similar-system">
                Get a Similar System
              </Button>
              <Button
                href={buildWhatsAppLink(whatsappMessages.project(project.title))}
                variant="secondary"
                data-cta="project-detail-whatsapp"
              >
                Ask About This Project
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
