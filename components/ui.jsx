import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import { site, values } from "@/lib/content";
import { SplitWords, Reveal } from "@/components/motion";

export function Eyebrow({ no, children, light = false, className }) {
  return (
    <div className={clsx("flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.22em]", light ? "text-white/60" : "text-muted", className)}>
      {no && <span className="text-orange">{no}</span>}
      <span className={clsx("h-px w-8", light ? "bg-white/30" : "bg-ink/25")} />
      <span>{children}</span>
    </div>
  );
}

export function ArrowLink({ href, children, variant = "dark", className }) {
  const styles = {
    dark: "bg-ink text-white hover:bg-orange",
    light: "bg-white text-ink hover:bg-orange hover:text-white",
    orange: "bg-orange text-white hover:bg-ink",
    outline: "border border-current/25 hover:bg-current/5",
  };
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center gap-3 rounded-full py-2 pr-2 pl-6 text-[15px] font-semibold transition-colors duration-300",
        styles[variant],
        className
      )}
    >
      {children}
      <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-current/10">
        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

// Waves echoing the green/white/orange swoosh in the SDP logo.
export function Swoosh({ className }) {
  return (
    <svg viewBox="0 0 1200 160" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path d="M0 110 C 300 30, 700 30, 1200 90 L1200 160 L0 160 Z" fill="var(--color-green)" />
      <path d="M0 125 C 320 60, 720 60, 1200 112 L1200 160 L0 160 Z" fill="#fff" />
      <path d="M0 140 C 340 90, 740 90, 1200 132 L1200 160 L0 160 Z" fill="var(--color-orange)" />
    </svg>
  );
}

export function Portrait({ className, priority = false }) {
  if (site.portrait) {
    return (
      <div className={clsx("relative overflow-hidden bg-ink-2", className)}>
        <Image src={site.portrait} alt={site.name} fill priority={priority} sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-[center_20%]" />
      </div>
    );
  }
  return (
    <div className={clsx("relative overflow-hidden bg-gradient-to-br from-ink-2 via-ink to-black", className)}>
      <div className="absolute inset-0 opacity-15 [background:radial-gradient(circle_at_30%_20%,#fff_0,transparent_50%)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <span className="text-[clamp(7rem,18vw,15rem)] leading-none">PA</span>
        <span className="mt-2 text-[11px] uppercase tracking-[0.4em] text-white/80">Prince Adewole Adebayo</span>
      </div>
      <Swoosh className="absolute inset-x-0 bottom-0 h-24 w-full" />
    </div>
  );
}

// Fills its (relatively positioned) parent with a photo from content.js.
export function Photo({ image, className, sizes = "(min-width: 1024px) 50vw, 100vw", priority = false, zoom = false }) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      priority={priority}
      sizes={sizes}
      className={clsx("object-cover", zoom && "transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105", className)}
    />
  );
}

export function PageHero({ eyebrow, title, accent, intro, image, children }) {
  return (
    <section className="grain relative overflow-hidden bg-ink pt-40 pb-20 text-white md:pt-48 md:pb-28">
      {image && (
        <>
          <Photo image={image} priority sizes="100vw" className="opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink to-transparent" />
        </>
      )}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[38rem] w-[38rem] rounded-full bg-orange/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-sky/10 blur-[120px]" />
      <div className="container-x relative">
        <Reveal>
          <Eyebrow light>{eyebrow}</Eyebrow>
        </Reveal>
        <h1 className="display mt-8 max-w-6xl text-[clamp(2.6rem,7vw,6.5rem)]">
          <SplitWords text={title} immediate />{" "}
          {accent && (
            <span className="text-orange">
              <SplitWords text={accent} immediate delay={0.3} />
            </span>
          )}
        </h1>
        {intro && (
          <Reveal delay={0.4}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">{intro}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function Marquee({ items = values, className, tone = "orange" }) {
  const list = [...items, ...items];
  return (
    <div className={clsx("overflow-hidden py-6", tone === "orange" ? "bg-orange text-white" : "bg-ink text-white", className)}>
      <div className="flex w-max animate-marquee items-center">
        {list.map((item, i) => (
          <span key={i} className="flex items-center text-[clamp(1.5rem,3.2vw,2.75rem)] font-semibold tracking-tight">
            <span className="px-8">{item}</span>
            <span className="text-[1.2em] opacity-70">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// Endless ribbon of captioned photos.
export function PhotoStrip({ images, className }) {
  const list = [...images, ...images];
  return (
    <div className={clsx("overflow-hidden", className)}>
      <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        {list.map((img, i) => (
          <figure key={i} className="group relative h-64 w-[19rem] shrink-0 overflow-hidden rounded-[1.5rem] bg-ink-2 md:h-80 md:w-[24rem]">
            <Photo image={img} sizes="384px" zoom />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 to-transparent" />
            {img.caption && <figcaption className="absolute bottom-4 left-5 text-sm font-medium text-white">{img.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="bg-paper py-24 md:py-36">
      <div className="container-x">
        <div className="grain relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-white md:px-16 md:py-24">
          <div className="pointer-events-none absolute -right-20 -bottom-32 h-[28rem] w-[28rem] rounded-full bg-orange/40 blur-[100px]" />
          <div className="relative grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)]">
              <SplitWords text="Read the plan." />{" "}
              <span className="text-orange">
                <SplitWords text="Judge the man." delay={0.2} />
              </span>
            </h2>
            <Reveal delay={0.2} className="space-y-8">
              <p className="text-lg leading-relaxed text-white/70">
                Eight pillars. Clear commitments. A timeline you can hold us to. Discover how Prince Adebayo will make Nigeria work.
              </p>
              <div className="flex flex-wrap gap-3">
                <ArrowLink href="/manifesto" variant="orange">Explore the Manifesto</ArrowLink>
                <ArrowLink href="/about" variant="light">Meet the Man</ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
