import { Blog } from "@/types";
import { MotionText } from "../animation/MotionText";
import { BlogCard } from "@/components/content";
import Link from "next/link";
import { MotionButton, MotionInView } from "../animation";

export function BlogSection({ blogs }: { blogs: Array<Blog> }) {
  return (
    <section>
      <MotionText
        text="Some Things I've Learned"
        textStyle="text-2xl md:text-3xl xl:text-4xl font-bold"
        className="mb-6"
      />

      <div className="grid gap-4 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4">
        {blogs.map(({ slug, frontMatter }, i) => (
          <BlogCard key={slug} slug={slug} frontMatter={frontMatter} />
        ))}
      </div>

      <div className="grid mt-8 w-full place-items-center">
        <MotionInView from="bottom" offset={50}>
          <Link href="/portfolio">
            <MotionButton className="w-max border-2 px-4 py-2 font-bold">
              Show More
            </MotionButton>
          </Link>
        </MotionInView>
      </div>
    </section>
  );
}
