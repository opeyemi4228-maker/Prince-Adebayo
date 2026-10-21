import { photoCredits } from "@/lib/content";
import { PageHero } from "@/components/ui";

export const metadata = {
  title: "Photo Credits",
  description: "Attribution for the photographs used on this site.",
};

export default function CreditsPage() {
  return (
    <>
      <PageHero
        eyebrow="Credits"
        title="Photo"
        accent="credits."
        intro="Photographs on this site come from Wikimedia Commons under the licences listed below. Images have been resized and cropped for the web."
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <ul className="border-t border-line">
            {photoCredits.map((c) => (
              <li key={c.source} className="grid gap-2 border-b border-line py-6 md:grid-cols-[1.2fr_1fr_1.2fr] md:items-center md:gap-6">
                <a href={c.source} target="_blank" rel="noreferrer" className="font-semibold tracking-tight hover:text-orange">{c.image}</a>
                <span className="text-muted">{c.author}</span>
                <span className="text-sm text-muted md:text-right">{c.license}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
