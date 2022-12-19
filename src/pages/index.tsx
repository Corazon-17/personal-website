import { Hero, PortfolioSection, BlogSection } from "@/components/home/";
import CustomHead from "@/components/utils/CustomHead";
import { Blog, Portfolio } from "@/types";
import { getReadTime, getSlug, readDirectory, readFile } from "@/utils/server";
import matter from "gray-matter";

interface Home {
  portfolio: Array<Portfolio>;
  blogs: Array<Blog>;
}

export default function index({ portfolio, blogs }: Home) {
  const props = {
    description: "Welcome to my personal website. I like to build useful things, especially web applications. Here, you can see what i‘ve built and what i‘ve learned.",
    keywords: ["corazon17", "Corazon17"],
    type: "website"
  }
  
  return (
    <>
      <CustomHead {...props} />
      <Hero />
      <PortfolioSection portfolio={portfolio} />
      <BlogSection blogs={blogs} />
    </>
  );
}

export async function getStaticProps() {
  const portfolioFiles = readDirectory("portfolio");
  let portfolio = portfolioFiles.map((fileName) => {
    const slug = getSlug(fileName);
    const file = readFile("portfolio", slug);
    const { data: frontmatter } = matter(file);

    if (frontmatter.featured === true) {
      return {
        slug,
        frontMatter: frontmatter,
      };
    }
  });

  const blogFiles = readDirectory("blog");
  let blog = blogFiles.map((fileName) => {
    const slug = getSlug(fileName);
    const file = readFile("blog", slug);
    const { data: frontmatter, content } = matter(file);

    if (frontmatter.featured === true) {
      return {
        slug,
        frontMatter: {
          ...frontmatter,
          readTime: getReadTime(content),
        },
      };
    }
  });

  const featuredPortfolio = portfolio.filter(Boolean);
  const featuredBlog = blog.filter(Boolean);

  return {
    props: {
      portfolio: featuredPortfolio,
      blogs: featuredBlog,
    },
  };
}
