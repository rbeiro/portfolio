import { getIndicesOf } from "./getIndicesOfString";

export function formatCollapsedText(
  lines: string[],
  numOfLinesToDisplay: number,
  numOfWordsToRemoveFromEnding = 0
) {
  if (lines.length < 2) return;

  const lastLine = lines[numOfLinesToDisplay - 1];
  const indicesOfLastLineSpaces = getIndicesOf(" ", lastLine);

  const lastLineWithoutLastThreeWords = lastLine.substring(
    0,
    indicesOfLastLineSpaces[
      indicesOfLastLineSpaces.length - numOfWordsToRemoveFromEnding
    ]
  );

  const finalStringArray = [];

  for (let i = 0; i < numOfLinesToDisplay; i++) {
    if (i === numOfLinesToDisplay - 1) {
      finalStringArray.push(lastLineWithoutLastThreeWords);
      break;
    }
    finalStringArray.push(lines[i]);
  }

  return finalStringArray.join(" ");
}
