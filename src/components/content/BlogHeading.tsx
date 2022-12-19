import { IconText, Labels } from "@/components/utils";
import { BlogFrontmatter } from "@/types";
import { CiCalendarDate, CiTimer } from "react-icons/ci";

export function BlogHeading({ frontMatter }: BlogFrontmatter) {
  return (
    <div className="mb-8 pb-4 border-b">
      <h1 className="text-4xl font-bold mb-4">{frontMatter.title}</h1>
      <div className="flex gap-6 mb-2">
        <IconText icon={<CiCalendarDate size={24} />} text={frontMatter.date} />
        <IconText
          icon={<CiTimer size={24} />}
          text={`${frontMatter.readTime} min read`}
        />
      </div>

      <Labels label="Tags:" data={frontMatter.tags} />
    </div>
  );
}
