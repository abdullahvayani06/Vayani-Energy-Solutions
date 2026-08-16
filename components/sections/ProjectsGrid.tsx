"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";

const categories: (ProjectCategory | "All")[] = [
  "All",
  "Residential",
  "Commercial",
  "Hybrid",
  "Solar Structures",
  "DB & Electrical Work",
  "Battery Storage",
];

export default function ProjectsGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors focus-ring ${
              active === cat
                ? "border-green bg-green-light text-navy"
                : "border-border-brand text-navy/60 hover:border-navy/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-sm text-muted">No projects in this category yet.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
