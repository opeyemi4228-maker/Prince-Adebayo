"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { pillars } from "@/lib/content";
import { Eyebrow, Photo } from "@/components/ui";
import { SplitWords } from "@/components/motion";

function PillarCard({ pillar }) {
  return (
    <Link
      href={`/manifesto#${pillar.id}`}
      className="group relative flex h-full w-[82vw] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-2 p-8 text-white transition-colors duration-500 hover:border-orange/60 sm:w-[60vw] md:w-[30rem] md:p-10"
    >
      <Photo image={pillar.image} sizes="(min-width: 768px) 30rem, 82vw" zoom className="opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 translate-y-full bg-orange/90 transition-transform duration-700 ease-out-expo group-hover:translate-y-0" />
      <div className="relative flex items-start justify-between">
        <span className="text-7xl leading-none text-orange transition-colors duration-500 group-hover:text-white">{pillar.no}</span>
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-ink">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
      <div className="relative mt-24">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">{pillar.title}</h3>
        <p className="mt-4 text-white/65 transition-colors duration-500 group-hover:text-white/90">{pillar.short}</p>
      </div>
    </Link>
  );
}

export default function PillarsScroller() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (track) setDistance(Math.max(0, track.scrollWidth - window.innerWidth + 64));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const heading = (
    <div className="container-x flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <Eyebrow no="03" light>The Manifesto</Eyebrow>
        <h2 className="display mt-6 text-[clamp(2.25rem,5vw,4.5rem)]">
          <SplitWords text="Eight pillars." />{" "}
          <span className="text-orange"><SplitWords text="One Nigeria." delay={0.2} /></span>
        </h2>
      </div>
      <p className="max-w-sm text-white/60">Every pillar is a commitment with a plan behind it. Scroll through the agenda to make Nigeria work.</p>
    </div>
  );

  return (
    <section className="bg-ink text-white">
      {/* Desktop: vertical scroll drives a horizontal track */}
      <div ref={ref} className="relative hidden h-[320vh] md:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center gap-14 overflow-hidden">
          {heading}
          <motion.div ref={trackRef} style={{ x }} className="flex h-[26rem] w-max gap-6 pl-10 xl:pl-16">
            {pillars.map((p) => <PillarCard key={p.id} pillar={p} />)}
          </motion.div>
          <div className="container-x">
            <div className="h-px w-full bg-white/10">
              <motion.div style={{ width: progress }} className="h-px bg-orange" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: native swipe carousel */}
      <div className="py-24 md:hidden">
        {heading}
        <div className="mt-12 flex h-[24rem] snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none]">
          {pillars.map((p) => <PillarCard key={p.id} pillar={p} />)}
        </div>
      </div>
    </section>
  );
}
