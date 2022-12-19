import { Portfolio } from "@/types";
import Link from "next/link";
import { PortfolioCard } from "@/components/content";
import { MotionText, MotionInView, MotionButton } from "../animation";

export function PortfolioSection({
  portfolio,
}: {
  portfolio: Array<Portfolio>;
}) {
  return (
    <section className="mb-20">
      <MotionText
        text="Some Things I've Built"
        textStyle="text-2xl md:text-3xl xl:text-4xl font-bold"
        className="mb-6"
      />

      <div className="grid gap-4 md:gap-8">
        {portfolio.map(({ slug, frontMatter }, i) => (
          <PortfolioCard
            key={slug}
            id={i}
            slug={slug}
            frontMatter={frontMatter}
          />
        ))}
      </div>

      <div className="grid mt-8 w-full place-items-center">
        <MotionInView from="bottom" offset={50}>
          <Link href="/portfolio">
            <MotionButton className="w-max border-2 px-4 py-2 font-bold ">
              Show More
            </MotionButton>
          </Link>
        </MotionInView>
      </div>
    </section>
  );
}
