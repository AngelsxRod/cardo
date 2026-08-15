import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactInfo } from "@/lib/data";

export default function Location() {
  return (
    <section id="ubicacion" className="py-24">
      <Container>
        <SectionHeading eyebrow="Ubicación" title="Visítanos" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div
            className="relative flex aspect-video items-center justify-center rounded-sm border border-border bg-muted bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-[size:32px_32px]"
            role="img"
            aria-label="Mapa ilustrativo de la ubicación de Cardo"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-10 w-10 text-accent drop-shadow"
            >
              <path d="M12 2c-4.14 0-7.5 3.36-7.5 7.5 0 5.63 6.44 11.54 6.72 11.79a1.1 1.1 0 0 0 1.56 0c.28-.25 6.72-6.16 6.72-11.79C19.5 5.36 16.14 2 12 2zm0 10.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5z" />
            </svg>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Dirección
              </h3>
              <p className="mt-2 font-display text-xl text-foreground">{contactInfo.address}</p>
            </div>
            <div>
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Horario
              </h3>
              <p className="mt-2 font-display text-xl text-foreground">{contactInfo.hours}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
