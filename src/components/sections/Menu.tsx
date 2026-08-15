import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { menuItems } from "@/lib/data";

export default function Menu() {
  return (
    <section id="menu" className="bg-muted py-24">
      <Container>
        <SectionHeading
          eyebrow="Menú destacado"
          title="Lo que no te puedes perder"
          description="Una selección de nuestros platillos y bebidas más pedidos."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <Card key={item.name} className="flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                <span className="whitespace-nowrap font-mono text-lg font-semibold text-accent">
                  {item.price}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
