import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { Dispatch, RefObject } from "react";

// General
interface MDXSource {
  mdxSource: MDXRemoteSerializeResult;
}

export type Ref = RefObject<any>

export type ValueSetter = Dispatch<React.SetStateAction<any>>

export interface Component {
  children?: React.ReactNode;
  className?: string;
}

export interface Heading {
  title: string;
  description: string;
}

export type HeadingTOC = Array<{
  level: number;
  text: string;
}>;

export type Slug = {
  slug: string;
};

// Portfolio
export type PortfolioFrontmatter = {
  frontMatter: Heading & {
    image: string;
    stack: Array<string>;
    link: {
      repo: string;
      live: string;
    };
    featured: boolean;
  };
};
export type Portfolio = PortfolioFrontmatter & Slug;
export type PortfolioProps = PortfolioFrontmatter & MDXSource;

// Blog
export type BlogFrontmatter = {
  frontMatter: Heading & {
    date: string;
    tags: Array<string>;
    keywords: Array<string>;
    featured: boolean;
    readTime?: number;
  };
};
export type Blog = BlogFrontmatter & Slug;
export type BlogProps = BlogFrontmatter & MDXSource;

// Snippet
export type SnippetFrontMatter = {
  frontMatter: Heading & {
    topic: string;
  };
};
export type Snippet = SnippetFrontMatter & Slug;
export type SnippetProps = SnippetFrontMatter & MDXSource;
