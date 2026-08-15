import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { menuItems } from "@/lib/data";

export default function Menu() {
  return (
    <section id="menu" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Menú destacado"
          title="Lo que no te puedes perder"
          description="Una selección de nuestros platillos y bebidas más pedidos."
        />

        <ul className="mt-12 grid gap-x-12 sm:grid-cols-2">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="border-t border-border py-6 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-lg font-semibold text-foreground">
                  {item.name}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 translate-y-[-3px] border-b border-dotted border-border"
                />
                <span className="whitespace-nowrap font-mono text-base text-accent">
                  {item.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
