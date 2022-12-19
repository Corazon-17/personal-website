import { IconText, StackIcon } from "@/components/utils";
import { SnippetFrontMatter } from "@/types";

export function SnippetHeading({ frontMatter }: SnippetFrontMatter) {
  return (
    <div className="mb-8 pb-4 border-b">
      <div className="text-3xl font-bold mb-2">
        <IconText
          icon={<StackIcon name={frontMatter.topic} size={48} />}
          text={frontMatter.title}
        />
      </div>
      <p className="text-lg">{frontMatter.description}</p>
    </div>
  );
}
