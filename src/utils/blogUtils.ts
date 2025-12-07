/**
 * Calculate reading time in minutes based on word count
 */
export function calculateReadTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, "").trim();
  const words = text.split(/\s+/).filter((word) => word.length > 0);
  const wordsPerMinute = 200; // Average reading speed
  return Math.max(1, Math.ceil(words.length / wordsPerMinute));
}

/**
 * Extract H2 headings from HTML content
 */
export function extractHeadings(html: string): { id: string; text: string; level: number }[] {
  const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h[2-3]>/gi;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1], 10);
    const text = match[2].replace(/<[^>]*>/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    headings.push({ id, text, level });
  }

  return headings;
}

/**
 * Inject IDs into H2 and H3 headings in HTML
 */
export function injectHeadingIds(html: string): string {
  return html.replace(
    /<h([2-3])([^>]*)>(.*?)<\/h[2-3]>/gi,
    (match, level, attrs, text) => {
      const cleanText = text.replace(/<[^>]*>/g, "").trim();
      const id = cleanText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      // Check if id already exists
      if (attrs.includes('id=')) {
        return match;
      }

      return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
    }
  );
}

/**
 * Insert Bridge CTA after the second H2 in HTML content
 */
export function insertBridgeCTAAfterSecondH2(
  html: string,
  bridgeCTAHtml: string
): string {
  const h2Regex = /<h2[^>]*>.*?<\/h2>/gi;
  const matches = [...html.matchAll(h2Regex)];
  
  if (matches.length >= 2) {
    const secondH2Index = matches[1].index! + matches[1][0].length;
    // Find the end of the paragraph or section after the second H2
    const afterH2 = html.substring(secondH2Index);
    const nextParagraphEnd = afterH2.search(/<\/p>/);
    
    if (nextParagraphEnd !== -1) {
      const insertIndex = secondH2Index + nextParagraphEnd + 4; // +4 for </p>
      return (
        html.substring(0, insertIndex) +
        bridgeCTAHtml +
        html.substring(insertIndex)
      );
    }
  }
  
  // Fallback: insert before the last section if we can't find the right spot
  return html + bridgeCTAHtml;
}
