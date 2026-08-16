import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectsGrid from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Recent Projects",
  description: "Recent residential, commercial and hybrid solar installations by Vayani Energy Solutions in Karachi.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28 text-white">
        <div className="container-vayani">
          <SectionHeading
            eyebrow="Recent Projects"
            title="Powering Karachi, one project at a time."
            description="A growing record of residential, commercial and hybrid solar installations across the city."
            tone="light"
          />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-vayani">
          <ProjectsGrid />
        </div>
      </section>
    </>
  );
}
