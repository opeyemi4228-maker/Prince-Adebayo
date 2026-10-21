import { nav, site } from "@/lib/content";

export default function sitemap() {
  const pages = [...nav.map((item) => item.href), "/credits"];
  return pages.map((href) => ({
    url: `${site.url}${href === "/" ? "" : href}`,
    lastModified: new Date(),
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : 0.7,
  }));
}
