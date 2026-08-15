import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading eyebrow="Galería" title="El ambiente de Cardo" />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.seed}
              className="relative aspect-square overflow-hidden rounded-2xl bg-muted"
            >
              <Image
                src={`https://picsum.photos/seed/${image.seed}/600/600`}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
