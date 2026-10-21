import { ArrowLink, PageHero } from "@/components/ui";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="This page has" accent="moved on." intro="The page you are looking for does not exist. Let us take you back to the plan.">
      <div className="mt-12 flex flex-wrap gap-3">
        <ArrowLink href="/" variant="orange">Back to Home</ArrowLink>
        <ArrowLink href="/manifesto" variant="light">Read the Manifesto</ArrowLink>
      </div>
    </PageHero>
  );
}
