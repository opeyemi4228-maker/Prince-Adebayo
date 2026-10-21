import { Mail, MapPin, Newspaper } from "lucide-react";
import { scenes, site } from "@/lib/content";
import { PageHero } from "@/components/ui";
import { Reveal } from "@/components/motion";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the Prince Adewole Adebayo presidential campaign office.",
};

const channels = [
  { icon: Mail, label: "General", value: site.email, href: `mailto:${site.email}` },
  { icon: Newspaper, label: "Press & Media", value: site.pressEmail, href: `mailto:${site.pressEmail}` },
  { icon: MapPin, label: "Headquarters", value: site.address },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about"
        accent="Nigeria."
        intro="Questions about the manifesto, media requests or an invitation to speak? The campaign office would like to hear from you."
        image={scenes.lagos}
      />

      <section className="py-24 md:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="space-y-4">
            {channels.map(({ icon: Icon, label, value, href }, i) => {
              const inner = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-muted">{label}</span>
                    <span className="mt-1 block text-lg font-medium">{value}</span>
                  </span>
                </>
              );
              return (
                <Reveal key={label} delay={i * 0.08}>
                  {href ? (
                    <a href={href} className="group flex items-center gap-5 rounded-[1.5rem] border border-line bg-white p-6 transition-colors hover:border-ink">{inner}</a>
                  ) : (
                    <div className="group flex items-center gap-5 rounded-[1.5rem] border border-line bg-white p-6 transition-colors hover:border-ink">{inner}</div>
                  )}
                </Reveal>
              );
            })}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-2 pt-4">
                {site.socials.filter((s) => s.href).map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2 text-sm transition-colors hover:border-ink hover:bg-ink hover:text-white">
                    {s.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
