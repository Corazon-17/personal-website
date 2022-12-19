import matter from "gray-matter";
import { useState } from "react";
import { Blog } from "@/types";
import { getSlug, readDirectory, readFile, getReadTime } from "@/utils/server";
import { IndexHeading, BlogCard, SearchBar } from "@/components/content";
import CustomHead from "@/components/utils/CustomHead";

interface BlogProps {
  posts: Array<Blog>;
}

export default function BlogIndex({ posts }: BlogProps) {
  const [searchValue, setSearchValue] = useState("");
  const headProps = {
    title: "Blog",
    description:
      "Welcome to my personal blog. I like to write something that interests me. Enjoy your reading.",
    keywords: ["corazon blog", "corazon17 blog"],
    type: "website",
  };

  return (
    <>
      <CustomHead {...headProps} />
      <IndexHeading
        title="Personal Blog"
        description="Welcome to my personal blog. I like to write something that interests me. Enjoy your reading."
      />
      <SearchBar
        value={searchValue}
        setValue={setSearchValue}
        placeholder="Search..."
      />

      <div className="grid gap-4 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4">
        {posts.map(
          ({ slug, frontMatter }) =>
            frontMatter.title
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase()) && (
              <BlogCard key={slug} slug={slug} frontMatter={frontMatter} />
            )
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = readDirectory("blog");
  const posts = files.map((fileName) => {
    const slug = getSlug(fileName);
    const file = readFile("blog", slug);
    const { data: frontmatter, content } = matter(file);
    const readTime = getReadTime(content);

    return {
      slug,
      frontMatter: { readTime, ...frontmatter },
    };
  });

  return {
    props: {
      posts,
    },
  };
}
