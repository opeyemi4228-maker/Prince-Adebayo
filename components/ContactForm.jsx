"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";

const topics = ["General enquiry", "Press & media", "Invitation / scheduling", "Policy question"];

// No backend yet: composes an email in the visitor's mail client.
export default function ContactForm() {
  const [topic, setTopic] = useState(topics[0]);

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const to = topic === "Press & media" ? site.pressEmail : site.email;
    const body = `${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(`[${topic}] ${data.get("name")}`)}&body=${encodeURIComponent(body)}`;
  }

  const field = "w-full border-b border-line bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-muted/60 focus:border-orange";

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <fieldset>
        <legend className="text-xs uppercase tracking-[0.22em] text-muted">I'm writing about</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {topics.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setTopic(t)}
              aria-pressed={topic === t}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${topic === t ? "bg-orange text-white" : "border border-line bg-white hover:border-ink"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="sr-only">Full name</span>
          <input name="name" required placeholder="Full name" className={field} />
        </label>
        <label className="block">
          <span className="sr-only">Email address</span>
          <input name="email" type="email" required placeholder="Email address" className={field} />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Message</span>
        <textarea name="message" required rows={5} placeholder="Your message" className={`${field} resize-none`} />
      </label>

      <button type="submit" className="group inline-flex items-center gap-3 rounded-full bg-ink py-2 pr-2 pl-7 text-[15px] font-semibold text-white transition-colors hover:bg-orange">
        Send Message
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </button>
    </form>
  );
}
