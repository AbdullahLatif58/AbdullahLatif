import { techMarquee } from "@/data/portfolio";

export function Marquee({ reverse = false }: { reverse?: boolean }) {
  const items = [...techMarquee, ...techMarquee];
  return (
    <div className="border-border overflow-hidden border-y py-4">
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="label-mono px-6 text-foreground/70">
            {item} <span className="text-muted-foreground">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function BigMarquee({ words }: { words: string[] }) {
  const items = [...words, ...words];
  return (
    <div className="overflow-hidden py-6">
      <div className="marquee-track">
        {items.map((w, i) => (
          <span key={`${w}-${i}`} className="display-xl px-6 text-[clamp(2.5rem,7vw,6rem)]">
            {w} <span className="text-muted-foreground">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
