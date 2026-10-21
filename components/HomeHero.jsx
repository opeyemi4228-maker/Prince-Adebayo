"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { heroSlides, site } from "@/lib/content";
import { SplitWords } from "@/components/motion";

const ease = [0.16, 1, 0.3, 1];
const DURATION = 6500;

// Branded stand-in used when a slide has no photo yet.
function SlideArt({ index }) {
  return (
    <div className="absolute inset-0 bg-ink">
      <div
        className={clsx(
          "absolute h-[60vmax] w-[60vmax] rounded-full blur-[140px]",
          ["right-[-15%] top-[-30%] bg-orange/45", "right-[5%] bottom-[-40%] bg-orange/35", "right-[-20%] top-[10%] bg-green/30", "right-[0%] top-[-40%] bg-sky/30"][index % 4]
        )}
      />
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:calc(100%/6)_100%]" />
      <span
        aria-hidden="true"
        className="absolute right-[4%] bottom-[-8%] text-[42vw] leading-none font-black tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.14)] md:text-[30vw]"
      >
        0{index + 1}
      </span>
    </div>
  );
}

export default function HomeHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const panelScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((v) => (v + 1) % heroSlides.length), DURATION);
    return () => clearTimeout(id);
  }, [active, paused]);

  const slide = heroSlides[active];
  const image = slide.image ?? site.heroImage;

  return (
    <section ref={ref} className="bg-white pt-28 pb-5 text-ink md:pt-32">
      <div className="container-x">
        {/* Meta rail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-between border-b border-ink/10 pb-4 text-[11px] font-semibold uppercase tracking-[0.25em]"
        >
          <span className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
            </span>
            {site.role}
          </span>
          <span className="hidden text-ink/50 md:block">Lawyer · Builder · Reformer</span>
          <span className="hidden text-ink/50 lg:block">Federal Republic of Nigeria</span>
        </motion.div>

        {/* Name */}
        <motion.div style={{ y: nameY }} className="grid items-end gap-6 pt-6 pb-8 md:pt-8 lg:grid-cols-[1fr_auto] lg:gap-12">
          <h1 className="text-[clamp(2.9rem,10.4vw,10.5rem)] leading-[0.86] font-black tracking-[-0.055em] uppercase">
            <SplitWords text="Prince Adewole" immediate delay={0.1} />
            <br />
            <SplitWords text="Adebayo" immediate delay={0.25} />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease }}
              className="ml-[0.04em] inline-block h-[0.17em] w-[0.17em] rounded-full bg-orange"
            />
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="max-w-xs pb-2 lg:pb-4"
          >
            <p className="text-[15px] leading-relaxed text-ink/70">
              A practical leader with a costed plan for security, production and justice.
            </p>
            <Link href="/about" className="group mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em]">
              <span className="border-b-2 border-orange pb-0.5">Meet the man</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Cinematic panel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.35, ease }}
          style={{ scale: panelScale }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative h-[72svh] min-h-[540px] origin-top overflow-hidden rounded-[1.75rem] bg-ink text-white md:max-h-[780px] md:rounded-[2.25rem]"
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={active}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease }}
            >
              {image ? (
                <Image src={image} alt={site.name} fill priority sizes="100vw" className="object-cover object-[center_25%]" />
              ) : (
                <SlideArt index={active} />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Slide copy */}
          <div className="relative flex h-full flex-col justify-between p-6 md:p-12 lg:p-14">
            <div className="flex items-start justify-between gap-4">
              <span className="whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur">
                {site.party}
              </span>
              <span className="shrink-0 text-sm font-semibold tabular-nums text-white/60">
                <span className="text-white">0{active + 1}</span> / 0{heroSlides.length}
              </span>
            </div>

            <div className="pb-24 md:pb-28">
              <AnimatePresence mode="wait">
                <motion.div key={active} exit={{ opacity: 0, y: -20, transition: { duration: 0.35 } }}>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease }}
                    className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-orange"
                  >
                    <span className="h-px w-8 bg-orange" />
                    {slide.kicker}
                  </motion.p>
                  <h2 className="mt-5 max-w-4xl text-[clamp(2.4rem,6.2vw,6rem)] leading-[0.95] font-extrabold tracking-[-0.045em]">
                    <SplitWords text={slide.title} immediate delay={0.1} stagger={0.05} />
                  </h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.35, ease }}
                    className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:gap-10"
                  >
                    <p className="max-w-md text-[15px] leading-relaxed text-white/75 md:text-base">{slide.body}</p>
                    <Link
                      href={slide.cta.href}
                      className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white py-2 pr-2 pl-6 text-[15px] font-bold text-ink transition-colors hover:bg-orange hover:text-white"
                    >
                      {slide.cta.label}
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute inset-x-0 bottom-0 grid grid-cols-4 border-t border-white/10 bg-black/30 backdrop-blur-md">
            {heroSlides.map((s, i) => (
              <button
                key={s.kicker}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}: ${s.kicker}`}
                aria-current={i === active}
                className="group relative px-4 py-5 text-left md:px-8 md:py-6 [&:not(:first-child)]:border-l [&:not(:first-child)]:border-white/10"
              >
                <span className="absolute inset-x-0 top-0 h-[2px] bg-white/10">
                  {i === active && (
                    <motion.span
                      key={`${active}-${paused}`}
                      className="block h-full bg-orange"
                      initial={{ width: paused ? "100%" : "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: paused ? 0 : DURATION / 1000, ease: "linear" }}
                    />
                  )}
                </span>
                <span className={clsx("block text-xs font-bold tabular-nums transition-colors", i === active ? "text-orange" : "text-white/40")}>0{i + 1}</span>
                <span className={clsx("mt-1 hidden text-sm font-semibold transition-colors md:block", i === active ? "text-white" : "text-white/50 group-hover:text-white")}>
                  {s.kicker}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
