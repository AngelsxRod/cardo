import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-background hover:bg-accent-hover",
  outline: "border border-border text-foreground hover:border-foreground",
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
