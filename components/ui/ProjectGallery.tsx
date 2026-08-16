"use client";

import { useState } from "react";
import { X, Zap } from "lucide-react";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";

export default function ProjectGallery({ title, count = 4 }: { title: string; count?: number }) {
  const [open, setOpen] = useState<number | null>(null);
  const tiles = Array.from({ length: count });

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {tiles.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpen(i)}
            className="h-48 w-full overflow-hidden rounded-sm focus-ring sm:h-56"
            aria-label={`Open photo ${i + 1} of ${title}`}
          >
            <PlaceholderPhoto label={`${title} — photo ${i + 1} placeholder`} icon={Zap} tone="navy" />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/90 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} photo ${open + 1}`}
        >
          <button
            onClick={() => setOpen(null)}
            aria-label="Close gallery"
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white focus-ring"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
          <div className="h-[70vh] w-full max-w-2xl">
            <PlaceholderPhoto label={`${title} — photo ${open + 1} placeholder`} icon={Zap} tone="navy" />
          </div>
        </div>
      )}
    </div>
  );
}
