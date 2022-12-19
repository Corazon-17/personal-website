import { readdirSync, readFileSync } from "fs";

const path = "src/data/";

export function getSlug(fileName: string) {
  return fileName.split(".")[0];
}

export function readDirectory(dir: string) {
  return readdirSync(path + dir);
}

export function readFile(dir: string, slug: string) {
  return readFileSync(`${path}${dir}/${slug}.mdx`, "utf-8");
}

export function getReadTime(content: string) {
  // Avg reading wpm according to https://www.sciencedirect.com/science/article/abs/pii/S0749596X19300786
  const wpm = 238;
  const words = content.trim().split(/\s+/).length;

  return Math.ceil(words / wpm);
}
