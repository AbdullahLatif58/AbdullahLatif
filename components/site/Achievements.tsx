import { experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Achievements() {
  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <p className="label-mono">Achievements</p>
        <h2 className="display-xl mt-4 max-w-4xl text-[clamp(2.2rem,6vw,4.5rem)]">
          Recognition &amp; Milestones
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
          A focused set of highlights that represent impact, delivery and growth.
        </p>
      </Reveal>

      <div className="mt-14">
        {experience.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div className="border-border group grid gap-4 border-t py-8 md:grid-cols-12 md:gap-8">
              <div className="label-mono md:col-span-2">{item.year}</div>
              <div className="label-mono md:col-span-2">{item.kind}</div>
              <div className="md:col-span-8">
                <h3 className="font-display text-xl font-black tracking-tight uppercase md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-foreground/70">{item.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
