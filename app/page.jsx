import Link from "next/link";
import { ArrowUpRight, Scale, Building2, Landmark } from "lucide-react";
import { biography, media, photos, scenes, stats, statements, strengths, timeline, zones } from "@/lib/content";
import { ArrowLink, CtaBand, Eyebrow, Marquee, Photo, PhotoStrip } from "@/components/ui";
import { Counter, Parallax, Reveal, ScrollWords, SplitWords } from "@/components/motion";
import PillarsScroller from "@/components/PillarsScroller";
import HomeHero from "@/components/HomeHero";

const strengthIcons = [Scale, Building2, Landmark];

const acrossNigeria = [scenes.lagos, scenes.rice, scenes.market, scenes.asoRock, scenes.youth, scenes.bridgeNight, scenes.farmer, scenes.unilag, scenes.lekki];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <Marquee />

      {/* Intro */}
      <section id="intro" className="py-24 md:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[0.6fr_1.4fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow no="01">The Man</Eyebrow>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 max-w-sm">
              <Parallax distance={20} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink-2">
                <Photo image={photos.speaking} sizes="(min-width: 1024px) 24rem, 100vw" className="scale-110 object-[center_30%]" />
              </Parallax>
              <p className="mt-4 text-sm text-muted">Prince Adewole Adebayo, SDP Presidential Candidate</p>
            </Reveal>
          </div>
          <div className="lg:pt-20">
            <ScrollWords text={biography.lead} className="text-[clamp(1.75rem,3.6vw,3.25rem)] leading-[1.15] font-medium tracking-[-0.025em]" />
            <Reveal className="mt-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <p className="max-w-md text-muted">{biography.paragraphs[0]}</p>
              <ArrowLink href="/about">His Story</ArrowLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-line">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-paper py-12 pr-4 pl-4 md:pr-8 md:pl-8 lg:first:pl-0">
              <Counter to={s.value} suffix={s.suffix} className="display block text-[clamp(3rem,6vw,5.5rem)] text-ink" />
              <p className="mt-4 max-w-[16rem] text-sm text-muted">{s.label}</p>
            </Reveal>
          ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-24 md:py-40">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow no="02">Experience</Eyebrow>
              <h2 className="display mt-6 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)]">
                <SplitWords text="Proven where it" />{" "}
                <span className="text-orange"><SplitWords text="matters most." delay={0.2} /></span>
              </h2>
            </div>
            <p className="max-w-sm text-muted">Three decades across the courtroom, the boardroom and the national stage, each one a lesson in getting things done.</p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {strengths.map((s, i) => {
              const Icon = strengthIcons[i];
              return (
                <Reveal key={s.title} delay={i * 0.1}>
                  <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-line bg-white transition-all duration-500 ease-out-expo hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
                    <div className="relative aspect-[16/11] overflow-hidden bg-ink">
                      <Photo image={s.image} sizes="(min-width: 768px) 33vw, 100vw" zoom className="object-[center_30%]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                      <span className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-orange transition-colors duration-500 group-hover:bg-orange group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="absolute top-5 right-5 text-sm text-white/80">0{i + 1}</span>
                    </div>
                    <div className="p-8 md:p-10">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-orange">{s.kicker}</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-4 leading-relaxed text-muted">{s.body}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <PillarsScroller />

      {/* Statement */}
      <section className="relative overflow-hidden border-y border-line bg-white py-28 text-ink md:py-44">
        <div className="container-x relative grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
          <div>
            <Reveal>
              <span className="text-[8rem] leading-none text-orange">“</span>
            </Reveal>
            <h2 className="font-semibold tracking-[-0.03em] -mt-16 max-w-5xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05]">
              <SplitWords text={statements[0]} stagger={0.03} />
            </h2>
            <Reveal delay={0.3} className="mt-12 flex items-center gap-4">
              <span className="h-px w-12 bg-orange" />
              <span className="text-sm uppercase tracking-[0.22em] text-muted">Prince Adewole Adebayo</span>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border-[10px] border-paper-2">
            <Photo image={photos.resolve} sizes="(min-width: 1024px) 28rem, 100vw" />
          </Reveal>
        </div>
      </section>

      {/* Journey */}
      <section className="py-24 md:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow no="04">The Journey</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2.25rem,4.4vw,4rem)]">
              <SplitWords text="A life of" />{" "}
              <span className="text-orange"><SplitWords text="service." delay={0.15} /></span>
            </h2>
            <p className="mt-6 max-w-sm text-muted">From Ondo State to the national stage: the milestones that shaped a practical, results focused leader.</p>
            <ArrowLink href="/about" className="mt-10">Full Biography</ArrowLink>
          </div>

          <ol className="border-t border-line">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 0.04} className="group grid grid-cols-[6.5rem_1fr] gap-6 border-b border-line py-8 transition-colors md:grid-cols-[9rem_1fr_auto] md:items-center">
                <span className="text-2xl text-orange md:text-3xl">{t.year}</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight transition-transform duration-500 ease-out-expo group-hover:translate-x-2 md:text-2xl">{t.title}</h3>
                  <p className="mt-2 text-muted">{t.body}</p>
                </div>
                <ArrowUpRight className="hidden h-6 w-6 text-muted opacity-0 transition-all duration-500 group-hover:text-orange group-hover:opacity-100 md:block" />
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Across Nigeria */}
      <section className="overflow-hidden bg-ink py-24 text-white md:py-32">
        <div className="container-x flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow light>For Every Nigerian</Eyebrow>
            <h2 className="display mt-6 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)]">
              <SplitWords text="One country." />{" "}
              <span className="text-orange"><SplitWords text="Every corner." delay={0.2} /></span>
            </h2>
          </div>
          <p className="max-w-sm text-white/60">From the rice fields of Kano to the skyline of Lagos: the people and places this plan is built to serve.</p>
        </div>
        <PhotoStrip images={acrossNigeria} className="mt-16" />
      </section>

      {/* Campaign */}
      <section className="bg-paper-2 py-24 md:py-40">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow no="05">The Campaign</Eyebrow>
              <h2 className="display mt-6 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)]">
                <SplitWords text="Six zones." />{" "}
                <span className="text-orange"><SplitWords text="One mission." delay={0.2} /></span>
              </h2>
            </div>
            <ArrowLink href="/campaign">The Campaign Trail</ArrowLink>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] bg-line sm:grid-cols-2 lg:grid-cols-3">
            {zones.map((z, i) => (
              <Reveal key={z.name} delay={i * 0.06} className="group bg-paper-2 p-8 transition-colors duration-500 hover:bg-ink hover:text-white md:p-10">
                <p className="text-sm text-muted group-hover:text-white/50">0{i + 1}</p>
                <h3 className="mt-10 text-2xl font-semibold tracking-tight md:text-3xl">{z.name}</h3>
                <p className="mt-3 text-muted group-hover:text-white/70">{z.focus}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="py-24 md:py-40">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow no="06">Newsroom</Eyebrow>
              <h2 className="display mt-6 text-[clamp(2.25rem,5vw,4.5rem)]">
                <SplitWords text="In his" />{" "}
                <span className="text-orange"><SplitWords text="words." delay={0.15} /></span>
              </h2>
            </div>
            <ArrowLink href="/media">All Media</ArrowLink>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {media.slice(0, 3).map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08}>
                <Link href="/media" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-ink">
                    <Photo image={m.image} sizes="(min-width: 768px) 33vw, 100vw" zoom className="object-[center_25%]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                    <span className="absolute top-5 left-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">{m.type}</span>
                    <span className="absolute right-6 bottom-4 text-8xl leading-none text-white/30">{i + 1}</span>
                  </div>
                  <p className="mt-5 text-sm text-muted">{m.date}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-orange">{m.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
