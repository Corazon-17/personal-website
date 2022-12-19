import { HeadingTOC } from "@/types";

export function getId(content: string) {
  try {
    content = content.replaceAll(" ", "-").toLowerCase();
  } catch {}

  return content;
}

/**
 * Get all heading from mdxSource.compiledSource
 * @param source
 * @returns
 */
export function getHeading(source: string) {
  const extractAll = /components.h[0-9][^"]+"(.*)"/g;
  const extractLevel = /h([0-9])/;
  const extarctString = /"(.*)"/;

  const allHeading = source.match(extractAll);
  const heading = allHeading?.map((value) => ({
    level: Number(value.match(extractLevel)?.[1]),
    text: value.match(extarctString)?.[1] as string,
  })) as HeadingTOC;

  return heading;
}

export function download(fileName: string, text: string) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", fileName);
  element.style.display = "none";

  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
