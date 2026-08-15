import type { ReactElement } from "react";
import Container from "@/components/ui/Container";
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
    <footer id="contacto" className="border-t border-border bg-foreground text-background">
      <Container className="flex flex-col gap-8 py-16 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xl font-semibold tracking-tight">Cardo</p>
          <p className="mt-2 max-w-xs text-sm text-background/70">
            Ingredientes honestos, sabor sin excusas.
          </p>
        </div>

        <div className="space-y-2 text-sm text-background/80">
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

      <Container className="border-t border-background/15 py-6 text-xs text-background/60">
        © {new Date().getFullYear()} Cardo. Todos los derechos reservados.
      </Container>
    </footer>
  );
}
