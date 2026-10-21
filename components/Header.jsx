"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import clsx from "clsx";
import { nav, pillars, site } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1];
const links = nav.slice(1);

function ManifestoMenu({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{ duration: 0.35, ease }}
      className="absolute inset-x-0 top-full mt-3 origin-top overflow-hidden rounded-[1.5rem] border border-line bg-white p-3 text-ink shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]"
    >
      <div className="grid grid-cols-[1fr_17rem] gap-3">
        <div className="grid grid-cols-2 gap-1">
          {pillars.map((p) => (
            <Link
              key={p.id}
              href={`/manifesto#${p.id}`}
              onClick={onClose}
              className="group flex gap-4 rounded-2xl p-4 transition-colors hover:bg-paper-2"
            >
              <span className="text-xs font-bold tabular-nums text-orange">{p.no}</span>
              <span>
                <span className="block text-[15px] font-bold tracking-tight">{p.title}</span>
                <span className="mt-1 block text-[13px] leading-snug text-muted">{p.short}</span>
              </span>
            </Link>
          ))}
        </div>
        <Link
          href="/manifesto"
          onClick={onClose}
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-ink p-6 text-white"
        >
          <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-orange/50 blur-[60px]" />
          <span className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">The Manifesto</span>
          <span className="relative">
            <span className="block text-2xl leading-tight font-extrabold tracking-tight">A plan you can hold us to.</span>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
              Read the full plan
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [mega, setMega] = useState(false);
  const megaTimer = useRef(null);

  // Hide while scrolling down, reveal on scroll up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 160 && y > prev && !mega);
  });

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const openMega = () => {
    clearTimeout(megaTimer.current);
    setMega(true);
  };
  const closeMega = () => {
    megaTimer.current = setTimeout(() => setMega(false), 120);
  };

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? "-130%" : "0%" }}
        transition={{ duration: 0.5, ease }}
        className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-4"
      >
        <div className="container-x">
          <div
            className={clsx(
              "relative flex items-center justify-between gap-4 rounded-[1.25rem] border bg-white/95 py-2 pr-2 pl-2.5 text-ink backdrop-blur-xl transition-[box-shadow,border-color] duration-500",
              scrolled ? "border-line shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)]" : "border-ink/[0.07] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.08)]"
            )}
            onMouseLeave={closeMega}
          >
            <Link href="/" className="flex items-center gap-3 pl-2" aria-label={`${site.name}, home`}>
              <span className="leading-none">
                <span className="block text-[15px] font-extrabold tracking-tight sm:text-[17px]">
                  Prince Adewole <span className="text-orange">Adebayo</span>
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                  <span className="sm:hidden">SDP · Presidential</span>
                  <span className="hidden sm:inline">{site.role}</span>
                </span>
              </span>
            </Link>

            <nav className="hidden items-center lg:flex" aria-label="Primary" onMouseLeave={() => setHovered(null)}>
              {links.map((item) => {
                const isActive = pathname === item.href;
                const isMega = item.href === "/manifesto";
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => {
                      setHovered(item.href);
                      isMega ? openMega() : closeMega();
                    }}
                    className={clsx(
                      "relative flex items-center gap-1 rounded-full px-4 py-2.5 text-[14px] font-semibold transition-colors duration-300",
                      hovered === item.href ? "text-white" : isActive ? "text-ink" : "text-ink/60"
                    )}
                  >
                    {hovered === item.href && (
                      <motion.span layoutId="nav-hover" transition={{ duration: 0.4, ease }} className="absolute inset-0 rounded-full bg-ink" />
                    )}
                    <span className="relative">{item.label}</span>
                    {isMega && <ChevronDown className={clsx("relative h-3.5 w-3.5 transition-transform duration-300", mega && "rotate-180")} />}
                    {isActive && hovered !== item.href && (
                      <motion.span layoutId="nav-active" className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-orange" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/manifesto"
                className="group hidden items-center gap-2.5 rounded-xl bg-ink py-3 pr-3 pl-5 text-[14px] font-semibold text-white transition-colors hover:bg-orange sm:inline-flex"
              >
                Read the Manifesto
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/15">
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-paper-2 lg:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                <span className={clsx("absolute h-[2px] w-5 rounded bg-ink transition-transform duration-300", open ? "rotate-45" : "-translate-y-[4px]")} />
                <span className={clsx("absolute h-[2px] w-5 rounded bg-ink transition-transform duration-300", open ? "-rotate-45" : "translate-y-[4px]")} />
              </button>
            </div>

            <AnimatePresence>
              {mega && (
                <div className="hidden lg:block" onMouseEnter={openMega} onMouseLeave={closeMega}>
                  <ManifestoMenu onClose={() => setMega(false)} />
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-white pt-28 text-ink lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease }}
          >
            <nav className="container-x flex flex-1 flex-col justify-center" aria-label="Menu">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease }}
                  className="border-b border-line"
                >
                  <Link href={item.href} className="group flex items-center justify-between py-4">
                    <span className={clsx("text-[2.4rem] leading-none font-extrabold tracking-[-0.04em]", pathname === item.href && "text-orange")}>
                      {item.label}
                    </span>
                    <span className="text-xs font-bold text-muted">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="container-x py-8"
            >
              <Link href="/manifesto" className="flex items-center justify-between rounded-2xl bg-ink px-6 py-5 font-semibold text-white">
                Read the Manifesto
                <ArrowUpRight className="h-5 w-5" />
              </Link>
              <p className="mt-6 text-center text-sm text-muted">
                {site.party} · <span className="font-semibold text-sky">{site.slogan}</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
