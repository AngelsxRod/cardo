import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading eyebrow="Testimonios" title="Lo que dicen quienes ya nos visitaron" />

        <div className="mt-14 space-y-14">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="max-w-3xl border-l-2 border-accent pl-6 sm:pl-8"
            >
              <blockquote className="font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {testimonial.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
