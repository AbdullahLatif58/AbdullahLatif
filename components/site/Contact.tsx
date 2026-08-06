import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s/g, "")}` },
];

export function Contact() {
  return (
    <footer id="contact" className="bg-foreground text-background px-5 pt-24 pb-10 md:px-10">
      <Reveal>
        <p className="label-mono text-background/60">Contact</p>
        <h2 className="display-xl mt-6 text-[clamp(2.6rem,11vw,10rem)]">
          Let&apos;s
          <br />
          Work
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <a
          href={`mailto:${profile.email}`}
          className="link-underline mt-10 inline-block text-lg break-all md:text-2xl"
        >
          {profile.email}
        </a>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="label-mono text-background/60">Based in</p>
          <p className="mt-2">{profile.location}</p>
        </Reveal>
        <Reveal delay={0.05} className="md:col-span-4">
          <p className="label-mono text-background/60">Availability</p>
          <p className="mt-2 inline-flex items-center gap-2">
            <span className="bg-live h-1.5 w-1.5 rounded-full" /> Freelance / Full-time · Remote
          </p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4">
          <p className="label-mono text-background/60">Elsewhere</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="link-underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="label-mono text-background/50 mt-20 flex flex-wrap justify-between gap-4 border-t border-white/15 pt-6">
        <span>
          © {new Date().getFullYear()} {profile.first} {profile.last}
        </span>
        <span>Design &amp; code by {profile.first}</span>
      </div>
    </footer>
  );
}
