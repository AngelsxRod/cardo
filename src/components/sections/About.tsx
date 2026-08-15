import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="nosotros" className="py-24">
      <Container className="flex justify-center text-center">
        <div className="flex max-w-2xl flex-col items-center">
          <SectionHeading eyebrow="Sobre nosotros" title="Cocina de mercado, sin vueltas" />
          <p className="mt-4 text-lg text-muted-foreground">
            Trabajamos con productores locales y compramos lo que está en su mejor
            momento. Por eso nuestro menú rota con las temporadas: menos ingredientes
            de bodega, más sabor real en cada plato.
          </p>
        </div>
      </Container>
    </section>
  );
}
