import { ImageIcon, type LucideIcon } from "lucide-react";
import clsx from "clsx";

type Tone = "navy" | "green" | "light";

const tones: Record<Tone, string> = {
  navy: "from-navy-light via-navy to-navy-dark",
  green: "from-green-dark via-navy to-navy-dark",
  light: "from-off-white via-green-light to-off-white",
};

type Props = {
  label: string;
  icon?: LucideIcon;
  tone?: Tone;
  className?: string;
  compact?: boolean;
};

/**
 * Clearly-marked placeholder tile used wherever real project or product
 * photography has not yet been supplied. Intentionally styled as an
 * abstract gradient, not a stock photo, so it is never mistaken for a real
 * Vayani installation photo. Swap for real images via the `images`/`image`
 * fields in the relevant data file.
 */
export default function PlaceholderPhoto({ label, icon: Icon = ImageIcon, tone = "navy", className, compact }: Props) {
  const isLight = tone === "light";
  return (
    <div
      className={clsx(
        "relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br text-center",
        tones[tone],
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
          color: isLight ? "#071b2d" : "#ffffff",
        }}
        aria-hidden
      />
      <Icon
        className={clsx(compact ? "h-6 w-6 mb-2" : "h-9 w-9 mb-3", isLight ? "text-navy/40" : "text-white/40")}
        aria-hidden
        strokeWidth={1.5}
      />
      {!compact && (
        <p className={clsx("px-4 text-xs font-medium tracking-wide", isLight ? "text-navy/50" : "text-white/50")}>
          {label}
        </p>
      )}
    </div>
  );
}
