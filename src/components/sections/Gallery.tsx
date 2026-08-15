import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryImages } from "@/lib/data";

const spanClasses = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];

export default function Gallery() {
  return (
    <section className="bg-muted py-24">
      <Container>
        <SectionHeading eyebrow="Galería" title="El ambiente de Cardo" />

        <div className="mt-12 grid grid-cols-2 auto-rows-[140px] gap-3 sm:grid-cols-4 sm:auto-rows-[160px] sm:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden border border-border bg-background ${spanClasses[index] ?? ""}`}
            >
              <Image
                src={`https://images.unsplash.com/${image.id}?auto=format&fit=crop&w=800&h=800&q=80`}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
