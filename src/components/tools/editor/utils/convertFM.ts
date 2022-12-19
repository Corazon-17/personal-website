import {
  PortfolioFrontMatter,
  FrontMatterValue,
  SnippetFrontMatter,
  BlogFrontMatter,
  Contents,
} from "../types";

export function convertFM(
  contentType: Contents,
  FMValue: FrontMatterValue | null
) {
  if (FMValue) {
    if (contentType === "Portfolio") {
      return convertPortfolioFM(FMValue as PortfolioFrontMatter);
    } else if (contentType === "Blog") {
      return convertBlogFM(FMValue as BlogFrontMatter);
    } else if (contentType === "Snippet") {
      return convertSnippetFM(FMValue as SnippetFrontMatter);
    }
  }
  
  return null;
}

const convertPortfolioFM = (FM: PortfolioFrontMatter) => {
  const frontMatter = [
    `title: "${FM.title}"`,
    `description: "${FM.description}"`,
    `image: "${FM.image}"`,
    `stack: [${extractArray(FM.stack)}]`,
    `link: {
        repo: "${FM.link_repo}",
        live: "${FM.link_live}"
    }`,
    `featured: ${FM.featured}`,
  ];

  return frontMatter.toString().replace(/(,)([a-z])/g, `\n$2`);
};

const convertBlogFM = (FM: BlogFrontMatter) => {
  const frontMatter = [
    `title: "${FM.title}"`,
    `description: "${FM.description}"`,
    `date: "${FM.date}"`,
    `tags: [${extractArray(FM.tags)}]`,
    `keywords: [${extractArray(FM.keywords)}]`,
    `featured: ${FM.featured}`,
  ];

  return frontMatter.toString().replace(/(,)([a-z])/g, `\n$2`);
};

const convertSnippetFM = (FM: SnippetFrontMatter) => {
  const frontMatter = [
    `title: "${FM.title}"`,
    `description: "${FM.description}"`,
    `topic: "${FM.topic}"`,
  ];

  return frontMatter.toString().replace(/(,)([a-z])/g, `\n$2`);
};

const extractArray = (value: string) => {
  return value ? value.split(",").map((item) => `"${item.trim()}"`) : "";
};
