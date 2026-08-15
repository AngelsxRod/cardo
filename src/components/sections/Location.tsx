import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ThistleMark from "@/components/ui/ThistleMark";
import { contactInfo } from "@/lib/data";

const mapDots = [
  { top: "22%", left: "78%" },
  { top: "72%", left: "20%" },
  { top: "68%", left: "82%" },
];

export default function Location() {
  return (
    <section id="ubicacion" className="py-24">
      <Container>
        <SectionHeading eyebrow="Ubicación" title="Visítanos" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div
            className="relative flex aspect-video items-center justify-center overflow-hidden rounded-sm border border-border bg-muted"
            role="img"
            aria-label="Mapa ilustrativo de la ubicación de Cardo"
          >
            <div
              className="absolute inset-0 bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
              aria-hidden="true"
            />
            <div
              className="absolute h-56 w-56 rounded-full bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-15"
              aria-hidden="true"
            />

            {mapDots.map((dot) => (
              <span
                key={`${dot.top}-${dot.left}`}
                className="absolute h-1.5 w-1.5 rounded-full bg-muted-foreground/40"
                style={{ top: dot.top, left: dot.left }}
                aria-hidden="true"
              />
            ))}

            <ThistleMark className="relative h-12 w-12 text-accent drop-shadow-sm" />
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
