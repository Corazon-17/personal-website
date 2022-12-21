import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import { getReadTime, getSlug, readDirectory, readFile } from "@/utils/server";
import { getHeading } from "@/utils/helper";
import { BlogProps, Slug } from "@/types";
import { TableOfContent } from "@/components/utils/TableOfContent";
import { BlogHeading } from "@/components/content";
import { useState } from "react";
import CustomHead from "@/components/utils/CustomHead";

export default function BlogPost({ frontMatter, mdxSource }: BlogProps) {
  const [showTOC, setShowTOC] = useState(false);
  const heading = getHeading(mdxSource.compiledSource);
  const headProps = {
    title: frontMatter.title,
    description: frontMatter.description,
    keywords: frontMatter.keywords,
    type: "article",
  };

  return (
    <>
      <CustomHead {...headProps} />
      <BlogHeading frontMatter={frontMatter} />
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
  const files = readDirectory("blog");
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
  const file = readFile("blog", slug);
  const { data: frontmatter, content } = matter(file);
  const mdxSource = await serialize(content, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });
  const readTime = getReadTime(content);

  return {
    props: {
      frontMatter: { readTime, ...frontmatter },
      mdxSource,
    },
  };
}
