import { Blog } from "@/types";
import Link from "next/link";
import { CiCalendarDate, CiTimer } from "react-icons/ci";
import { IconText, Labels } from "@/components/utils";
import { MotionInView } from "../animation";

export function BlogCard({ slug, frontMatter }: Blog) {
  return (
    <MotionInView from="bottom" offset={100}>
      <Link
        href={`/blog/${slug}`}
        className="grid border-4 border-decor-primary px-4 py-2 gap-2 h-full hover:scale-105 hover:shadow-lg hover:shadow-decor-primary transition duration-250"
      >
        <p className="text-2xl font-bold">{frontMatter.title}</p>
        <p>{frontMatter.description}</p>
        <Labels data={frontMatter.tags} />
        <div className="mt-2 flex justify-between self-end">
          <IconText
            icon={<CiCalendarDate size={20} />}
            text={frontMatter.date}
          />
          <IconText
            icon={<CiTimer size={20} />}
            text={`${frontMatter.readTime} min read`}
          />
        </div>
      </Link>
    </MotionInView>
  );
}
