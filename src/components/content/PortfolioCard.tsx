import { Portfolio } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { ExternalLink, IconText, Labels, StackIcon } from "@/components/utils";
import { MotionInView } from "../animation";

interface PortfolioCardProps extends Portfolio {
  id: number;
}

export function PortfolioCard({ id, slug, frontMatter }: PortfolioCardProps) {
  return (
    <MotionInView from={id % 2 === 0 ? "left" : "right"} offset={100}>
      <div className={`flex ${id % 2 === 0 && "flex-row-reverse"} relative`}>
        <div
          className={`flex w-full md:w-[60%] h-80 ${
            id % 2 === 0 && "justify-end"
          } brightness-50 md:brightness-100 transition duration-300`}
        >
          <Image src={frontMatter.image} alt="image" width={640} height={480} />
        </div>

        <div
          className={`flex absolute flex-col gap-2 text-white ${
            id % 2 === 1 && "md:items-end"
          } justify-center h-full w-full px-4 md:px-2 border-4 border-decor-primary`}
        >
          <Link href={`/portfolio/${slug}`} className="w-max">
            <p className="text-2xl mb-2 font-bold w-max">{frontMatter.title}</p>
          </Link>
          <div className="w-full md:w-[60%] lg:w-[50%] px-0 md:px-6 py-2 md:py-4 bg-inherit md:bg-zinc-800">
            {frontMatter.description}
          </div>

          <div className="flex gap-2">
            <Labels data={frontMatter.stack} type="icon" />
          </div>

          <div className="flex flex-row gap-4 w-max">
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
        </div>
      </div>
    </MotionInView>
  );
}
