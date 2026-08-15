import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-sm px-6 py-3 font-mono text-xs font-medium uppercase tracking-[0.15em] transition-colors";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-background hover:bg-accent-hover",
  outline: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
