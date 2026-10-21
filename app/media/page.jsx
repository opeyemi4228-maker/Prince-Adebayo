import Image from "next/image";
import { Download } from "lucide-react";
import { photos, scenes, site } from "@/lib/content";
import { Eyebrow, PageHero } from "@/components/ui";
import { Reveal, SplitWords } from "@/components/motion";
import MediaGrid from "@/components/MediaGrid";

export const metadata = {
  title: "Media",
  description: "Speeches, interviews, press releases and opinion pieces from Prince Adewole Adebayo and the SDP presidential campaign.",
};

const pressKit = [
  { label: "SDP Logo (PNG)", href: "/brand/sdp-logo.png" },
  { label: "Campaign Banner (WEBP)", href: "/brand/sdp-banner.webp" },
];

const pressPhotos = [photos.portrait, photos.speaking, photos.resolve];

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="Speeches, stories"
        accent="& statements."
        intro="The latest from the campaign: addresses, interviews, press releases and opinion, all in one place."
        image={scenes.assembly}
      />

      <section className="py-20 md:py-32">
        <div className="container-x">
          <MediaGrid />
        </div>
      </section>

      <section className="bg-ink py-24 text-white md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow light>Press Kit</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2.25rem,4.4vw,4rem)]">
              <SplitWords text="For the" />{" "}
              <span className="text-orange"><SplitWords text="press." delay={0.15} /></span>
            </h2>
            <p className="mt-6 max-w-md text-white/65">
              Official brand assets for journalists and partners. For interviews, accreditation and statements, contact{" "}
              <a href={`mailto:${site.pressEmail}`} className="text-white underline decoration-orange underline-offset-4">{site.pressEmail}</a>.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {pressKit.map((f) => (
                <a key={f.href} href={f.href} download className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm font-medium transition-colors hover:border-orange hover:bg-orange">
                  <Download className="h-4 w-4" /> {f.label}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <Reveal className="relative aspect-[16/7] overflow-hidden rounded-[1.75rem] bg-white">
              <Image src="/brand/sdp-banner.webp" alt="Social Democratic Party banner" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-6" />
            </Reveal>
            <div className="grid grid-cols-3 gap-4">
              {pressPhotos.map((p, i) => (
                <Reveal key={p.src} delay={0.1 + i * 0.08}>
                  <a href={p.src} download className="group relative block aspect-square overflow-hidden rounded-[1.25rem] bg-ink-2">
                    <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 16vw, 33vw" className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105" />
                    <span className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink opacity-0 transition-opacity group-hover:opacity-100">
                      <Download className="h-4 w-4" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
