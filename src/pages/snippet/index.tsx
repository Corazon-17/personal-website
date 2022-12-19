import { IndexHeading, SnippetCard, SearchBar } from "@/components/content";
import CustomHead from "@/components/utils/CustomHead";
import { Snippet } from "@/types";
import { getSlug, readDirectory, readFile } from "@/utils/server";
import matter from "gray-matter";
import { useState } from "react";

export default function SnippetIndex({ snippet }: { snippet: Array<Snippet> }) {
  const [searchValue, setSearchValue] = useState("");
  const headProps = {
    title: "Snippet",
    description: "Some code snippets to make your life easier",
    keywords: ["corazon snippet", "corazon17 snippet"],
    type: "website",
  };

  return (
    <>
      <CustomHead {...headProps} />
      <IndexHeading
        title="Code Snippet"
        description="Some code snippets to make your life easier."
      />

      <SearchBar
        value={searchValue}
        setValue={setSearchValue}
        placeholder="Search..."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
        {snippet.map(
          ({ slug, frontMatter }) =>
            frontMatter.title
              .toLowerCase()
              .includes(searchValue.toLowerCase()) && (
              <SnippetCard key={slug} slug={slug} frontMatter={frontMatter} />
            )
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = readDirectory("snippet");
  const snippet = files.map((fileName) => {
    const slug = getSlug(fileName);
    const file = readFile("snippet", slug);
    const { data: frontmatter } = matter(file);

    return {
      slug,
      frontMatter: frontmatter,
    };
  });

  return {
    props: {
      snippet,
    },
  };
}
