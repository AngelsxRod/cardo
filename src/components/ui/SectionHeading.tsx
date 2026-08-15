import ThistleMark from "@/components/ui/ThistleMark";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-2 text-accent">
        <ThistleMark className="h-4 w-4" />
        <span className="font-mono text-xs font-medium uppercase tracking-[0.2em]">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
