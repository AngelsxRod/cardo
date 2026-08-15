import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ThistleMark from "@/components/ui/ThistleMark";

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
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

      <ThistleMark className="absolute -right-6 top-8 h-56 w-56 text-white/10 sm:h-72 sm:w-72" />

      <Container className="relative pb-20 pt-32 text-white sm:pb-24">
        <p
          className="animate-rise-in font-mono text-xs uppercase tracking-[0.25em] text-white/70"
          style={{ animationDelay: "0.05s" }}
        >
          Cocina de mercado · Ciudad de Guatemala
        </p>
        <h1
          className="animate-rise-in mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
          style={{ animationDelay: "0.15s" }}
        >
          Ingredientes honestos, <em className="italic text-accent">sabor</em> sin
          excusas.
        </h1>
        <p
          className="animate-rise-in mt-5 max-w-xl text-lg text-white/85"
          style={{ animationDelay: "0.25s" }}
        >
          Cocina de mercado en un espacio pensado para quedarse.
        </p>
        <div className="animate-rise-in mt-8" style={{ animationDelay: "0.35s" }}>
          <Button href="#menu" variant="primary">
            Ver el menú
          </Button>
        </div>
      </Container>
    </section>
  );
}
