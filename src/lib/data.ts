export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Menú", href: "#menu" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export type MenuItem = {
  name: string;
  price: string;
  description: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "Tostada de aguacate y huevo poché",
    price: "Q45",
    description: "Pan de masa madre, aguacate machacado, huevo poché y chile seco.",
  },
  {
    name: "Bowl de quinoa con pollo a la plancha",
    price: "Q65",
    description: "Quinoa, pollo a la plancha, vegetales de temporada y aderezo cítrico.",
  },
  {
    name: "Sándwich de pollo caprese",
    price: "Q55",
    description: "Pollo a la plancha, mozzarella fresca, tomate, albahaca y pesto casero.",
  },
  {
    name: "Pasta al pesto con champiñones",
    price: "Q60",
    description: "Pasta fresca, pesto de albahaca, champiñones salteados y parmesano.",
  },
  {
    name: "Cold brew de la casa",
    price: "Q28",
    description: "Café de origen guatemalteco, extracción en frío por 18 horas.",
  },
  {
    name: "Cheesecake de temporada",
    price: "Q35",
    description: "Receta clásica con topping de fruta de temporada.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "El mejor café que he tomado en la zona, y el ambiente invita a quedarse.",
    author: "Ana M.",
  },
  {
    quote:
      "Comida simple pero muy bien ejecutada, se nota la calidad de los ingredientes.",
    author: "Carlos R.",
  },
];

export type GalleryImage = {
  id: string;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  { id: "photo-1751956066306-c5684cbcf385", alt: "Interior cálido de Cardo con luz natural" },
  { id: "photo-1761271046396-97d231b59dd7", alt: "Barista sirviendo un latte art en Cardo" },
  { id: "photo-1516749396351-ab12ad535d7c", alt: "Mesa servida con brunch en Cardo" },
  { id: "photo-1757627550652-30788bfce978", alt: "Vegetales frescos de mercado en Cardo" },
  { id: "photo-1543269865-cbf427effbad", alt: "Grupo de amigos conversando en Cardo" },
  { id: "photo-1753012247961-feb139675068", alt: "Detalle de pan de masa madre en Cardo" },
];

export type ContactInfo = {
  address: string;
  hours: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  whatsappUrl: string;
  socials: NavLink[];
};

const phone = process.env.NEXT_PUBLIC_CARDO_PHONE ?? "+502 1234-5678";
const phoneDigits = phone.replace(/\D/g, "");
const email = "hola@cardo.gt";

export const contactInfo: ContactInfo = {
  address: "5ta Avenida 6-42, Zona 10, Ciudad de Guatemala",
  hours: "Lun–Sáb · 7:00am – 8:00pm",
  phone,
  phoneHref: `tel:+${phoneDigits}`,
  email,
  emailHref: `mailto:${email}`,
  whatsappUrl: `https://wa.me/${phoneDigits}?text=Hola%2C%20quisiera%20reservar%20una%20mesa%20en%20Cardo`,
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ],
};
