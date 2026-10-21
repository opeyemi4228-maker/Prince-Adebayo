import { Check } from "lucide-react";
import { pillars, roadmap, scenes } from "@/lib/content";
import { ArrowLink, Eyebrow, Marquee, PageHero, Photo } from "@/components/ui";
import { Reveal, SplitWords } from "@/components/motion";

export const metadata = {
  title: "Manifesto",
  description: "Eight pillars, clear commitments: Prince Adewole Adebayo's plan to make Nigeria work.",
};

export default function ManifestoPage() {
  return (
    <>
      <PageHero
        eyebrow="The Manifesto"
        title="A plan you can"
        accent="hold us to."
        intro="Not slogans. Solutions. Eight pillars with concrete commitments to secure the nation, grow the economy and restore trust in government."
        image={scenes.lekki}
      >
        <Reveal delay={0.5} className="mt-14 flex flex-wrap gap-2">
          {pillars.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-colors hover:border-orange hover:bg-orange hover:text-white">
              <span className="mr-2 text-orange">{p.no}</span>{p.title}
            </a>
          ))}
        </Reveal>
      </PageHero>

      <section className="py-12 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
          <aside className="hidden lg:block">
            <nav className="sticky top-28 space-y-1 border-l border-line" aria-label="Manifesto pillars">
              {pillars.map((p) => (
                <a key={p.id} href={`#${p.id}`} className="-ml-px block border-l-2 border-transparent py-2 pl-5 text-sm text-muted transition-colors hover:border-orange hover:text-ink">
                  <span className="mr-2 text-orange">{p.no}</span>{p.title}
                </a>
              ))}
            </nav>
          </aside>

          <div>
            {pillars.map((p) => (
              <article key={p.id} id={p.id} className="scroll-mt-28 border-b border-line py-16 last:border-0 md:py-24">
                <Reveal className="flex items-baseline gap-6">
                  <span className="text-[clamp(4rem,8vw,7rem)] leading-none text-orange">{p.no}</span>
                  <h2 className="display text-[clamp(2.25rem,4.5vw,4rem)]">{p.title}</h2>
                </Reveal>
                <Reveal delay={0.05} className="group relative mt-10 aspect-[16/8] overflow-hidden rounded-[1.75rem] bg-ink">
                  <Photo image={p.image} sizes="(min-width: 1024px) 60vw, 100vw" zoom className="object-[center_35%]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <span className="absolute bottom-5 left-6 text-sm font-medium text-white/90">{p.image.caption}</span>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-10 max-w-3xl text-xl leading-relaxed md:text-2xl">{p.detail}</p>
                </Reveal>
                <ul className="mt-10 grid gap-3 md:grid-cols-2">
                  {p.commitments.map((c, i) => (
                    <Reveal as="li" key={c} delay={0.15 + i * 0.05} className="flex gap-4 rounded-2xl border border-line bg-white p-6">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green/15 text-green">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="leading-relaxed">{c}</span>
                    </Reveal>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={pillars.map((p) => p.title)} tone="ink" />

      <section className="py-24 md:py-36">
        <div className="container-x">
          <Eyebrow no="09">Delivery Roadmap</Eyebrow>
          <h2 className="display mt-6 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)]">
            <SplitWords text="From promise" />{" "}
            <span className="text-orange"><SplitWords text="to progress." delay={0.15} /></span>
          </h2>
          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {roadmap.map((r, i) => (
              <Reveal key={r.phase} delay={i * 0.08}>
                <div className={`h-full rounded-[1.75rem] p-8 ${i === roadmap.length - 1 ? "bg-ink text-white" : "border border-line bg-white"}`}>
                  <p className={`text-sm ${i === roadmap.length - 1 ? "text-white/70" : "text-muted"}`}>Phase 0{i + 1}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">{r.phase}</h3>
                  <ul className="mt-8 space-y-4">
                    {r.items.map((item) => (
                      <li key={item} className={`border-t pt-4 ${i === roadmap.length - 1 ? "border-white/25" : "border-line"}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 flex flex-wrap gap-3">
            <ArrowLink href="/campaign">Follow the Campaign</ArrowLink>
            <ArrowLink href="/contact" variant="outline">Ask a Policy Question</ArrowLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
