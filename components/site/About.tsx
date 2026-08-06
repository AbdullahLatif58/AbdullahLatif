import { about, expertise, skillGroups } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <p className="label-mono">About</p>
      </Reveal>

      <div className="mt-8 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="display-xl text-[clamp(2.6rem,7vw,5.5rem)]">
              Web Dev
              <br />
              &amp; App Dev
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-2">
              {expertise.map((e) => (
                <li key={e} className="label-mono border-border border-b pb-2 text-foreground/80">
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          {about.map((p, i) => (
            <Reveal key={p} delay={i * 0.08}>
              <p className="mb-6 text-lg leading-relaxed text-foreground/80 md:text-xl">{p}</p>
            </Reveal>
          ))}

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.06}>
                <p className="label-mono border-border border-b pb-2">{group.title}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="label-mono border-border rounded-full border px-3 py-1 text-foreground/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
