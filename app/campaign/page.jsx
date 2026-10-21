import { MapPin } from "lucide-react";
import { campaignEvents, photos, roadmap, scenes, statements, zones } from "@/lib/content";
import { CtaBand, Eyebrow, PageHero, Photo, PhotoStrip } from "@/components/ui";
import { Reveal, ScrollWords, SplitWords } from "@/components/motion";

export const metadata = {
  title: "Campaign",
  description: "The Prince Adebayo presidential campaign: message, roadmap and nationwide engagements across all six geopolitical zones.",
};

const message =
  "This campaign is a conversation with every Nigerian: the trader in Onitsha, the farmer in Kebbi, the graduate in Ibadan, the nurse in Maiduguri. We are not asking for your trust on faith. We are showing you the plan, the people and the record, and asking you to judge us by results.";

export default function CampaignPage() {
  return (
    <>
      <PageHero
        eyebrow="The Campaign"
        title="Every state."
        accent="Every voice."
        intro="A nationwide campaign built on listening, explaining and earning the confidence of Nigerians, one town hall at a time."
        image={scenes.bridgeNight}
      />

      <section className="py-24 md:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[0.6fr_1.4fr]">
          <Eyebrow no="01">The Message</Eyebrow>
          <ScrollWords text={message} className="text-[clamp(1.6rem,3.2vw,3rem)] leading-[1.18] font-medium tracking-[-0.025em]" />
        </div>
        <PhotoStrip images={[scenes.market, scenes.farmer, scenes.nurse, scenes.pupils, scenes.youth, scenes.police, scenes.rice]} className="mt-20 md:mt-28" />
      </section>

      <section className="bg-ink py-24 text-white md:py-36">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow no="02" light>On the Road</Eyebrow>
              <h2 className="display mt-6 text-[clamp(2.25rem,5vw,4.5rem)]">
                <SplitWords text="Campaign" />{" "}
                <span className="text-orange"><SplitWords text="trail." delay={0.15} /></span>
              </h2>
            </div>
            <p className="max-w-sm text-white/60">Town halls, forums and dialogues across the federation. Dates and venues are confirmed by the campaign office.</p>
          </div>

          <ul className="mt-16 border-t border-white/10">
            {campaignEvents.map((e, i) => (
              <Reveal as="li" key={e.title} delay={i * 0.04} className="group relative grid grid-cols-[5rem_1fr] items-center gap-6 overflow-hidden border-b border-white/10 py-8 md:grid-cols-[8rem_1fr_14rem]">
                <span className="absolute inset-0 origin-left scale-x-0 bg-orange transition-transform duration-700 ease-out-expo group-hover:scale-x-100" />
                <span className="relative text-2xl md:text-4xl">{e.date}</span>
                <div className="relative">
                  <h3 className="text-xl font-semibold tracking-tight md:text-3xl">{e.title}</h3>
                  <p className="mt-1 text-white/60 group-hover:text-white/85">{e.venue}</p>
                </div>
                <span className="relative col-start-2 flex items-center gap-2 text-white/70 group-hover:text-white md:col-start-3 md:justify-end">
                  <MapPin className="h-4 w-4" /> {e.city}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="container-x">
          <Eyebrow no="03">Regional Focus</Eyebrow>
          <h2 className="display mt-6 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)]">
            <SplitWords text="Local answers," />{" "}
            <span className="text-orange"><SplitWords text="national vision." delay={0.2} /></span>
          </h2>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {zones.map((z, i) => (
              <Reveal key={z.name} delay={i * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-line bg-white p-8 md:p-10">
                  <span className="absolute -top-6 -right-2 text-[9rem] leading-none text-orange/10 transition-colors duration-500 group-hover:text-orange/25">{i + 1}</span>
                  <h3 className="relative mt-16 text-2xl font-semibold tracking-tight md:text-3xl">{z.name}</h3>
                  <p className="relative mt-3 text-muted">{z.focus}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-24 md:py-36">
        <div className="container-x">
          <Eyebrow no="04">Commitment Timeline</Eyebrow>
          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {roadmap.map((r, i) => (
              <Reveal key={r.phase} delay={i * 0.08} className="relative border-t-2 border-ink pt-6">
                <span className="absolute -top-[7px] left-0 h-3 w-3 rounded-full bg-orange" />
                <h3 className="text-2xl font-semibold tracking-tight">{r.phase}</h3>
                <ul className="mt-5 space-y-3 text-muted">
                  {r.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-ink py-28 text-white md:py-40">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <Photo image={photos.speaking} sizes="50vw" className="object-[center_20%] opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
        </div>
        <div className="container-x relative">
          <h2 className="font-semibold tracking-[-0.03em] max-w-5xl text-[clamp(2.25rem,5.5vw,5rem)] leading-[1.05]">
            <SplitWords text={`“${statements[2]}”`} stagger={0.03} />
          </h2>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
