import clsx from "clsx";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: Props) {
  const isLight = tone === "light";
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "mb-3 flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase",
            align === "center" && "justify-center",
            isLight ? "text-green" : "text-green-dark"
          )}
        >
          <span className={clsx("h-px w-6", isLight ? "bg-green" : "bg-green-dark")} aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] font-medium tracking-tight",
          isLight ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-base md:text-lg leading-relaxed",
            isLight ? "text-white/70" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
