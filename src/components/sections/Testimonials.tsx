import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-muted py-24">
      <Container>
        <SectionHeading eyebrow="Testimonios" title="Lo que dicen quienes ya nos visitaron" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author}>
              <p className="text-lg text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-muted-foreground">
                — {testimonial.author}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
