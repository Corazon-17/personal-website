import { SnippetHeading } from "@/components/content";
import CustomHead from "@/components/utils/CustomHead";
import { TableOfContent } from "@/components/utils/TableOfContent";
import { Slug, SnippetProps } from "@/types";
import { getHeading } from "@/utils/helper";
import { getSlug, readDirectory, readFile } from "@/utils/server";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useState } from "react";
import rehypeHighlight from "rehype-highlight";

export default function SnippetContent({
  frontMatter,
  mdxSource,
}: SnippetProps) {
  const [showTOC, setShowTOC] = useState(false);
  const heading = getHeading(mdxSource?.compiledSource);
  const headProps = {
    title: frontMatter.title,
    description: frontMatter.description,
    keywords: [
      `corazon snippet ${frontMatter.title.toLowerCase()}`,
      `corazon17 snippet ${frontMatter.title.toLowerCase()}`,
    ],
    type: "article",
  };

  return (
    <>
      <CustomHead {...headProps} />
      <SnippetHeading frontMatter={frontMatter} />
      <div
        className={`grid relative sm:grid-cols-${
          showTOC ? "[75%_25%]" : "[90%_10%]"
        }`}
      >
        {/* Content */}
        <div
          className={`prose prose-invert ${
            showTOC ? "sm:max-w-[68%]" : "sm:max-w-[88%]"
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
  const files = readDirectory("snippet");
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
  const file = readFile("snippet", slug);
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
