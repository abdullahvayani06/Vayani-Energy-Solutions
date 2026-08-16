import Link from "next/link";
import Image from "next/image";

type Props = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className }: Props) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 focus-ring ${className ?? ""}`}
      aria-label="Vayani Energy Solutions — Home"
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={83}
        height={77}
        priority
        className="h-9 w-auto shrink-0 md:h-10"
      />
      <span className="leading-tight">
        <span className={`block text-[15px] font-semibold tracking-tight ${isLight ? "text-white" : "text-navy"}`}>
          Vayani Energy
        </span>
        <span
          className={`block text-[10px] font-medium tracking-[0.2em] uppercase ${
            isLight ? "text-white/60" : "text-muted"
          }`}
        >
          Solutions
        </span>
      </span>
    </Link>
  );
}
