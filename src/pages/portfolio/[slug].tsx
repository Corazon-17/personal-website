import { getSlug, readDirectory, readFile } from "@/utils/server";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import { PortfolioProps, Slug } from "@/types";
import { MDXRemote } from "next-mdx-remote";
import { useState } from "react";
import { getHeading } from "@/utils/helper";
import { PortfolioHeading } from "@/components/content";
import { TableOfContent } from "@/components/utils";
import CustomHead from "@/components/utils/CustomHead";

export default function PortfolioContent({
  frontMatter,
  mdxSource,
}: PortfolioProps) {
  const [showTOC, setShowTOC] = useState(false);
  const heading = getHeading(mdxSource.compiledSource);
  const headProps = {
    title: frontMatter.title,
    description: frontMatter.description,
    keywords: frontMatter.stack,
    image: frontMatter.image,
    type: "article",
  };

  return (
    <>
      <CustomHead {...headProps} />
      <PortfolioHeading frontMatter={frontMatter} />

      <div
        className={`grid relative sm:grid-cols-${
          showTOC ? "[75%_25%]" : "[90%_10%]"
        }`}
      >
        {/* Content */}
        <div
          className={`prose prose-invert ${
            showTOC ? "sm:max-w-[70%]" : "sm:max-w-[88%]"
          }`}
        >
          <MDXRemote {...mdxSource} />
        </div>

        {/* Table of Content */}
        <TableOfContent show={showTOC} setShow={setShowTOC} heading={heading} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = readDirectory("portfolio");
  const paths = files.map((fileName) => ({
    params: {
      slug: getSlug(fileName),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: { params: Slug }) {
  const file = readFile("portfolio", slug);
  const { data: frontmatter, content } = matter(file);
  const mdxSource = await serialize(content, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });

  return {
    props: {
      frontMatter: frontmatter,
      mdxSource,
    },
  };
}
