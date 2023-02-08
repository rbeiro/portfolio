// eslint-disable-next-line
export function extractLinesFromTextNode(textNode: ChildNode) {
  textNode.textContent = textNode.textContent!.trim().replace(/\s+/g, " ");

  const { textContent } = textNode;

  const range = document.createRange();
  let lines: any[] = [];
  let lineCharacters = [];

  for (let i = 0; i < textContent.length; i++) {
    range.setStart(textNode, 0);
    range.setEnd(textNode, i + 1);

    const lineIndex = range.getClientRects().length - 1;

    if (!lines[lineIndex]) {
      lines.push((lineCharacters = []));
    }

    lineCharacters.push(textContent.charAt(i));
  }

  // At this point, we have an array (lines) of arrays (characters). Let's
  // collapse the character buffers down into a single text value.
  lines = lines.map((characters) =>
    characters.join("").trim().replace(/\s+/g, " ")
  );

  // DEBUGGING: Draw boxes around our client rectangles.

  return lines;
}
