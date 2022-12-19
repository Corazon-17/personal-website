import { IndexHeading, PortfolioCard, SearchBar } from "@/components/content";
import { useState } from "react";
import { readDirectory, readFile, getSlug } from "@/utils/server";
import matter from "gray-matter";
import { Portfolio } from "@/types";
import CustomHead from "@/components/utils/CustomHead";

interface PortfolioProps {
  portfolio: Array<Portfolio>;
}

export default function PortfolioIndex({ portfolio }: PortfolioProps) {
  const [searchText, setSearchText] = useState("");
  const headProps = {
    title: "Portfolio",
    description: "Here are some projects i've made",
    keywords: ["corazon portfolio", "corazon17 portfolio"],
    type: "website"
  }

  return (
    <>
      <CustomHead {...headProps} />
      <IndexHeading
        title="Portfolio"
        description="Here are some projects i've made."
      />

      <SearchBar
        value={searchText}
        setValue={setSearchText}
        placeholder="Search..."
      />

      <div className="grid gap-4 md:gap-8">
        {portfolio.map(
          ({ slug, frontMatter }, i) =>
            frontMatter.title
              .toLocaleLowerCase()
              .includes(searchText.toLowerCase()) && (
              <PortfolioCard
                key={slug}
                id={i}
                slug={slug}
                frontMatter={frontMatter}
              />
            )
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = readDirectory("portfolio");
  const portfolio = files.map((fileName) => {
    const slug = getSlug(fileName);
    const file = readFile("portfolio", slug);
    const { data: frontmatter } = matter(file);

    return {
      slug,
      frontMatter: frontmatter,
    };
  });

  return {
    props: {
      portfolio,
    },
  };
}
