"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, animate } from "motion/react";

const ease = [0.16, 1, 0.3, 1];

export function Reveal({ children, delay = 0, y = 40, className, as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </Tag>
  );
}

// Splits a line into words that rise out of a mask, one after another.
export function SplitWords({ text, className, delay = 0, stagger = 0.06, immediate = false }) {
  const words = text.split(" ");
  const motionProps = immediate
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-10% 0px" } };
  return (
    <motion.span className={className} {...motionProps} transition={{ staggerChildren: stagger, delayChildren: delay }}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: "110%" }, show: { y: "0%", transition: { duration: 1.1, ease } } }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

// Paragraph whose words light up as it scrolls through the viewport.
export function ScrollWords({ text, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        return <Word key={i} progress={scrollYProgress} range={[start, start + 1 / words.length]} word={word} />;
      })}
    </p>
  );
}

function Word({ progress, range, word }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {word}{" "}
    </motion.span>
  );
}

export function Counter({ to, suffix = "", className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 2, ease, onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}

export function Parallax({ children, className, distance = 80 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
