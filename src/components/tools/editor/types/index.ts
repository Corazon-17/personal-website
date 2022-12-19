import { Heading, ValueSetter } from "@/types"

export interface PortfolioFrontMatter extends Heading {
  image: string;
  stack: string;
  link_repo: string;
  link_live: string;
  featured: boolean;
}

export interface BlogFrontMatter extends Heading {
    date: string;
    tags: string;
    keywords: string;
    featured: boolean;
}

export interface SnippetFrontMatter extends Heading {
    topic: string;
}

export type FrontMatterValue = PortfolioFrontMatter | BlogFrontMatter | SnippetFrontMatter;

export interface FMComponent {
  label: string;
  value: any;
  valueKey: string;
  stateValue: FrontMatterValue;
  setValue: ValueSetter;
}

export type Contents = "Portfolio" | "Blog" | "Snippet";