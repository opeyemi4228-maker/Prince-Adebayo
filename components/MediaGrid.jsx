"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import { media } from "@/lib/content";
import { Photo } from "@/components/ui";

export default function MediaGrid() {
  const types = ["All", ...new Set(media.map((m) => m.type))];
  const [active, setActive] = useState("All");
  const items = active === "All" ? media : media.filter((m) => m.type === active);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="tablist">
        {types.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={active === t}
            onClick={() => setActive(t)}
            className={clsx(
              "rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
              active === t ? "bg-ink text-white" : "border border-line bg-white text-ink hover:border-ink"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((m) => {
            return (
              <motion.article
                key={m.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-ink">
                  <Photo image={m.image} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" zoom className="object-[center_25%]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  <span className="absolute top-5 left-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">{m.type}</span>
                  <span className="absolute right-5 bottom-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-5 text-sm text-muted">{m.date}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-orange">{m.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{m.excerpt}</p>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
