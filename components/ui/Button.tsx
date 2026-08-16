import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost-light" | "text";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 focus-ring";

const variants: Record<Variant, string> = {
  primary:
    "bg-green hover:bg-green-dark text-navy px-6 py-3.5 rounded-sm text-[15px] tracking-wide",
  secondary:
    "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-white px-6 py-3.5 rounded-sm text-[15px] tracking-wide",
  "ghost-light":
    "border border-white/40 text-white hover:bg-white hover:text-navy px-6 py-3.5 rounded-sm text-[15px] tracking-wide",
  text: "text-green hover:text-green-dark underline-offset-4 hover:underline gap-1.5",
};

type CommonProps = {
  variant?: Variant;
  showArrow?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type Props = ButtonAsLink | ButtonAsButton;

export default function Button(props: Props) {
  const { variant = "primary", showArrow = true, children, className, ...rest } = props;
  const classes = clsx(base, variants[variant], className);

  if ("href" in props && props.href) {
    const href: string = props.href;
    const { external, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      external?: boolean;
      href?: string;
    };
    delete (anchorRest as { href?: string }).href;
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          {...anchorRest}
        >
          {children}
          {showArrow && variant !== "text" && <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />}
          {showArrow && variant === "text" && <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
        {showArrow && <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />}
      </Link>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />}
    </button>
  );
}
