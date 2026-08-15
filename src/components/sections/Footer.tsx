import type { ReactElement } from "react";
import Container from "@/components/ui/Container";
import ThistleMark from "@/components/ui/ThistleMark";
import { contactInfo } from "@/lib/data";

const socialIcons: Record<string, ReactElement> = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
      <path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v7h3v-7h2.2l.8-3H14v-1.5c0-.55.45-1 1-1H16V8z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-foreground text-background">
      <ThistleMark className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 text-background/[0.06]" />

      <Container className="relative flex flex-col gap-10 py-16 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <ThistleMark className="h-8 w-8" />
            <p className="font-display text-2xl font-semibold tracking-tight">Cardo</p>
          </div>
          <p className="mt-3 max-w-xs text-sm text-background/70">
            Ingredientes honestos, sabor sin excusas.
          </p>
        </div>

        <div className="space-y-2 font-mono text-sm text-background/80">
          <p>{contactInfo.address}</p>
          <p>{contactInfo.phone}</p>
          <p>{contactInfo.email}</p>
        </div>

        <div className="flex gap-4">
          {contactInfo.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-background/25 text-background/80 transition-colors hover:border-background hover:text-background"
            >
              {socialIcons[social.label]}
            </a>
          ))}
        </div>
      </Container>

      <Container className="border-t border-background/15 py-6 font-mono text-xs text-background/60">
        © {new Date().getFullYear()} Cardo. Todos los derechos reservados.
      </Container>
    </footer>
  );
}
