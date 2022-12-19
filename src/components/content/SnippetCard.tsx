import { IconText, StackIcon } from "@/components/utils";
import { Snippet } from "@/types";
import Link from "next/link";
import { MotionInView } from "../animation";

export function SnippetCard({ slug, frontMatter }: Snippet) {
  return (
    <MotionInView from="bottom" offset={100}>
      <Link href={`/snippet/${slug}`}>
        <div className="grid border-4 border-decor-primary p-4 gap-2 h-full hover:scale-105 hover:shadow-lg hover:shadow-decor-primary transition duration-250">
          <div className="text-xl font-bold mb-2">
            <IconText
              icon={<StackIcon name={frontMatter.topic} size={40} />}
              text={frontMatter.title}
            />
          </div>
          <p className="text-lg">{frontMatter.description}</p>
        </div>
      </Link>
    </MotionInView>
  );
}
