type ThistleMarkProps = {
  className?: string;
};

/**
 * Ilustración de línea de un cardo (la planta, no solo el nombre) — la firma
 * visual de la marca. Hereda color vía `currentColor` para poder tintarse
 * como tinta, blanco o a baja opacidad según el contexto.
 */
export default function ThistleMark({ className = "h-6 w-6" }: ThistleMarkProps) {
  return (
    <svg
      viewBox="0 0 64 96"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M32 30 C 30 48, 30 68, 32 90" />
      <path d="M32 50 C 24 46, 16 48, 10 56" />
      <path d="M32 50 C 40 46, 48 48, 54 56" />
      <path d="M32 68 C 25 65, 18 67, 13 74" />
      <path d="M32 68 C 39 65, 46 67, 51 74" />
      <circle cx="32" cy="20" r="9" />
      <path d="M32 11 L 32 2" />
      <path d="M26 13 L 19 6" />
      <path d="M38 13 L 45 6" />
      <path d="M23 18 L 13 15" />
      <path d="M41 18 L 51 15" />
      <path d="M23 24 L 13 27" />
      <path d="M41 24 L 51 27" />
      <path d="M27 27 L 22 34" />
      <path d="M37 27 L 42 34" />
    </svg>
  );
}
