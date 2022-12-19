import { ExternalLink, IconText, Labels, StackIcon } from "@/components/utils";
import { PortfolioFrontmatter } from "@/types";
import { CiGlobe } from "react-icons/ci";

export function PortfolioHeading({ frontMatter }: PortfolioFrontmatter) {
  return (
    <div className="mb-8 pb-4 border-b">
      <h1 className="text-4xl font-bold mb-2">{frontMatter.title}</h1>
      <p className="text-lg mb-4">{frontMatter.description}</p>

      <div className="grid sm:flex justify-between">
        <div className="flex gap-6 mb-2 sm:mb-0">
          <ExternalLink
            url={frontMatter.link.repo}
            className="border-b border-dashed border-white pb-1"
          >
            <IconText icon={<StackIcon name="github" size={24} />} text="Repository" />
          </ExternalLink>
          <ExternalLink
            url={frontMatter.link.live}
            className="border-b border-dashed border-white pb-1"
          >
            <IconText icon={<CiGlobe size={24} />} text="Live Demo" />
          </ExternalLink>
        </div>

        <Labels data={frontMatter.stack} type="icon" />
      </div>
    </div>
  );
}
