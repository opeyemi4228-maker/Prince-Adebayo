import Link from "next/link";
import Image from "next/image";
import { nav, pillars, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-24 text-white">
      <div className="container-x">
        <div className="grid gap-14 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-4">
              <span className="relative block h-16 w-[72px] overflow-hidden rounded-lg bg-white">
                <Image src="/brand/sdp-logo.png" alt="SDP logo" fill sizes="72px" className="object-cover" />
              </span>
              <div>
                <p className="text-lg font-semibold tracking-tight">{site.name}</p>
                <p className="text-sm text-white/50">{site.role}</p>
              </div>
            </div>
            <p className="mt-8 leading-relaxed text-white/60">
              A lawyer, builder and reformer with a plan to make Nigeria work for every citizen, in every state.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/40">Explore</p>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/80 transition-colors hover:text-orange">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/40">The Agenda</p>
            <ul className="mt-6 space-y-3">
              {pillars.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <Link href={`/manifesto#${p.id}`} className="text-white/80 transition-colors hover:text-orange">{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/40">Connect</p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li><a href={`mailto:${site.email}`} className="hover:text-orange">{site.email}</a></li>
              <li><a href={`mailto:${site.pressEmail}`} className="hover:text-orange">{site.pressEmail}</a></li>
              <li className="text-white/50">{site.address}</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.socials.filter((s) => s.href).map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/80 transition-colors hover:border-orange hover:bg-orange hover:text-white">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Authorised by the {site.party} Presidential Campaign.</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/credits" className="underline decoration-white/20 underline-offset-4 hover:text-orange">Photo credits</Link>
            <span>
              Built by{" "}
              <a href="https://www.bitlayerx.com" target="_blank" rel="noopener" className="font-medium text-white/70 transition-colors hover:text-orange">
                BitLayerX Technologies
              </a>
            </span>
          </p>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <p className="display translate-y-[18%] text-center text-[22vw] leading-[0.8] text-white/[0.04]">
          Progress<span className="text-orange/30">!</span>
        </p>
      </div>
    </footer>
  );
}
