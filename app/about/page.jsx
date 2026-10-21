import { biography, photos, principles, scenes, statements, strengths, timeline } from "@/lib/content";
import { CtaBand, Eyebrow, PageHero, Photo, Portrait } from "@/components/ui";
import { Parallax, Reveal, SplitWords } from "@/components/motion";

export const metadata = {
  title: "The Man",
  description: "The life, values and record of Prince Adewole Adebayo: lawyer, entrepreneur and SDP Presidential Candidate.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Man"
        title="Lawyer. Builder."
        accent="Reformer."
        intro="A life spent solving hard problems in the courtroom, in business and in public life. Meet the man asking to lead Nigeria."
        image={scenes.asoRock}
      />

      <section className="py-24 md:py-36">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Parallax distance={24} className="aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Portrait className="h-full w-full" />
              </Parallax>
            </Reveal>
          </div>
          <div>
            <Eyebrow no="01">Biography</Eyebrow>
            <Reveal>
              <p className="mt-8 text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.25] font-medium tracking-[-0.02em]">{biography.lead}</p>
            </Reveal>
            <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted">
              {biography.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}><p>{p}</p></Reveal>
              ))}
            </div>
            <Reveal className="mt-14 border-l-2 border-orange pl-6">
              <p className="font-semibold tracking-[-0.03em] text-3xl leading-snug">“{statements[1]}”</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* In the field */}
      <section className="bg-paper-2 py-24 md:py-36">
        <div className="container-x">
          <Eyebrow no="02">In the Field</Eyebrow>
          <h2 className="display mt-6 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)]">
            <SplitWords text="Conviction," />{" "}
            <span className="text-orange"><SplitWords text="in person." delay={0.15} /></span>
          </h2>
          <div className="mt-16 grid auto-rows-[16rem] gap-4 md:grid-cols-4 md:auto-rows-[18rem]">
            {[
              { image: photos.speaking, span: "md:col-span-2 md:row-span-2" },
              { image: photos.resolve, span: "md:col-span-2" },
              { image: scenes.assembly, span: "" },
              { image: photos.portrait, span: "" },
            ].map(({ image, span }, i) => (
              <Reveal key={image.src} delay={i * 0.08} className={`group relative overflow-hidden rounded-[1.75rem] bg-ink ${span}`}>
                <Photo image={image} sizes="(min-width: 768px) 50vw, 100vw" zoom className="object-[center_25%]" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white md:py-36">
        <div className="container-x">
          <Eyebrow no="03" light>What He Brings</Eyebrow>
          <h2 className="display mt-6 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)]">
            <SplitWords text="Three careers." />{" "}
            <span className="text-orange"><SplitWords text="One purpose." delay={0.2} /></span>
          </h2>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] bg-white/10 md:grid-cols-3">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1} className="group bg-ink">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Photo image={s.image} sizes="(min-width: 768px) 33vw, 100vw" zoom className="object-[center_30%] opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                  <span className="absolute bottom-4 left-8 text-6xl text-orange md:left-12">0{i + 1}</span>
                </div>
                <div className="p-8 pt-6 md:p-12 md:pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">{s.kicker}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-4 leading-relaxed text-white/65">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="container-x">
          <Eyebrow no="04">Guiding Principles</Eyebrow>
          <h2 className="display mt-6 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)]">
            <SplitWords text="What he" />{" "}
            <span className="text-orange"><SplitWords text="stands for." delay={0.15} /></span>
          </h2>
          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="group flex h-full gap-6 rounded-[1.5rem] border border-line bg-white p-8 transition-colors duration-500 hover:border-orange md:p-10">
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-orange transition-transform duration-500 group-hover:scale-150" />
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-24 md:py-36">
        <div className="container-x">
          <Eyebrow no="05">Milestones</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2.25rem,5vw,4.5rem)]">
            <SplitWords text="The journey" />{" "}
            <span className="text-orange"><SplitWords text="so far." delay={0.15} /></span>
          </h2>
          <ol className="relative mt-16 grid gap-10 before:absolute before:top-0 before:bottom-0 before:left-[7px] before:w-px before:bg-line md:grid-cols-2 md:before:left-1/2">
            {timeline.map((t, i) => (
              <Reveal
                as="li"
                key={t.title}
                delay={0.05}
                className={`relative pl-10 md:pl-0 ${i % 2 ? "md:col-start-2 md:pl-14" : "md:col-start-1 md:pr-14 md:text-right"}`}
              >
                <span className={`absolute top-2 left-0 h-[15px] w-[15px] rounded-full border-[3px] border-paper-2 bg-orange ${i % 2 ? "md:-left-[7.5px]" : "md:right-[-7.5px] md:left-auto"}`} />
                <p className="text-3xl text-orange">{t.year}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-2 text-muted">{t.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
