export const preprocess = (text: string) => {
  text = filterLanguage(text);
  text = escapeBracket(text);
  text = verifyTag(text);

  return text;
};

/**Function to handle code block language error.
 *
 * @param text
 * @returns
 */
const filterLanguage = (text: string) => {
  const languageList = [
    "python",
    "javascript",
    "js",
    "typescript",
    "ts",
    "java",
    "bash",
  ];

  // Get all code block
  const matches = text.match(/```([^\s]+)/g);
  matches?.map((match) => {
    // Replace code language in code block if language not in list
    if (!languageList.includes(match.slice(3))) {
      text = text.replace(match, "```");
    }
  });

  return text;
};

/**Function to escape arrow symbol and curly bracket.
 *
 * @param text
 * @returns
 */
const escapeBracket = (text: string) => {
  const brackets = ["<", "{", "}"];

  // Add escape character to all brackets
  brackets.map((bracket) => {
    text = text.replaceAll(bracket, `\\${bracket}`);
  });

  return text;
};

/**Function to remove escape character from valid tag.
 *
 * @param text
 * @returns
 */
const escapeTag = (text: string) => {
  const findTagRegex = /(\\<)([^<]*)(\\>)/g;
  const replacer = (
    match: string,
    open: string,
    name: string,
    close: string
  ) => {
    return open.slice(-1) + name.trim() + close.slice(-1);
  };

  return text.replace(findTagRegex, replacer);
};

/**Function to remove escape character from valid tags
 * with the same opening and closing tag name.
 *
 * @param text
 * @returns
 */
const verifyTag = (text: string) => {
  /**Function to extract tag name.
   * Split tag name by whitespace to extract the actual tag
   * if the tag contains attributes/properties.
   * Example: <div align="center">
   */
  const tagName = (text: string) => text.match(/<\/?(.*)>/)?.[1].split(/\s+/)[0];

  const validTagRegex = /(\\<[^<>]*\\>)(.*)((\\<\/[^<>]*\\>))/g;
  const replacer = (
    match: string,
    openTag: string,
    content: string,
    closeTag: string
  ) => {
    if (tagName(escapeTag(openTag)) === tagName(escapeTag(closeTag))) {
      return quoteAttributes(escapeTag(openTag)) + content + escapeTag(closeTag);
    } else {
      return match;
    }
  };

  return text.replace(validTagRegex, replacer);
};

const quoteAttributes = (text: string) => {
  const attributeRegex = /(\s[a-z]+=)([a-z]*)/g
  const replacer = (match: string, before: string, target: string) => {
    return `${before}"${target}"`
  }

  return text.replace(attributeRegex, replacer)
}