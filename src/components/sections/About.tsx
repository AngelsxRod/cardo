import Container from "@/components/ui/Container";
import ThistleMark from "@/components/ui/ThistleMark";

export default function About() {
  return (
    <section id="nosotros" className="py-24">
      <Container className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-2 text-accent">
            <ThistleMark className="h-4 w-4" />
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em]">
              Sobre nosotros
            </span>
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Cocina de mercado, sin vueltas
          </h2>
        </div>

        <p className="text-lg leading-relaxed text-muted-foreground lg:pt-2">
          Trabajamos con productores locales y compramos lo que está en su mejor
          momento. Por eso nuestro menú rota con las temporadas: menos ingredientes
          de bodega, más sabor real en cada plato.
        </p>
      </Container>
    </section>
  );
}
