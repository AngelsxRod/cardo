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
  seed: string;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  { seed: "cardo-interior-1", alt: "Interior del restaurante Cardo" },
  { seed: "cardo-plato-1", alt: "Platillo de temporada de Cardo" },
  { seed: "cardo-cafe-1", alt: "Café de la casa preparado en barra" },
  { seed: "cardo-interior-2", alt: "Mesa junto a la ventana en Cardo" },
  { seed: "cardo-plato-2", alt: "Detalle de un platillo de Cardo" },
  { seed: "cardo-ambiente-1", alt: "Ambiente de la cafetería Cardo" },
];

export type ContactInfo = {
  address: string;
  hours: string;
  phone: string;
  email: string;
  socials: NavLink[];
};

export const contactInfo: ContactInfo = {
  address: "5ta Avenida 6-42, Zona 10, Ciudad de Guatemala",
  hours: "Lun–Sáb · 7:00am – 8:00pm",
  phone: "+502 1234-5678",
  email: "hola@cardo.gt",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ],
};
