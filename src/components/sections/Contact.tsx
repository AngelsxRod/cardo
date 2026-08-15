import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactInfo } from "@/lib/data";

const channels = [
  { label: "WhatsApp", value: contactInfo.phone, href: contactInfo.whatsappUrl },
  { label: "Llamar", value: contactInfo.phone, href: contactInfo.phoneHref },
  { label: "Escribir", value: contactInfo.email, href: contactInfo.emailHref },
];

export default function Contact() {
  return (
    <section id="contacto" className="bg-muted py-24">
      <Container>
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos"
          description="Para reservas, dudas o simplemente para saludar."
        />

        <div className="mt-12 grid divide-y divide-border border-t border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-t-0">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group block py-6 transition-colors sm:px-8 sm:first:pl-0"
            >
              <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {channel.label}
              </span>
              <p className="mt-2 font-display text-xl text-foreground transition-colors group-hover:text-accent">
                {channel.value}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
