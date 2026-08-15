import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden">
      <Image
        src="https://picsum.photos/seed/cardo-hero/1920/1080"
        alt="Mesa servida en el restaurante Cardo"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      <Container className="relative pb-20 pt-32 text-white sm:pb-24">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Ingredientes honestos, sabor sin excusas.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/85">
          Cocina de mercado en un espacio pensado para quedarse.
        </p>
        <div className="mt-8">
          <Button href="#menu" variant="primary">
            Ver el menú
          </Button>
        </div>
      </Container>
    </section>
  );
}
