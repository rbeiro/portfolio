export function createElementWithTextNode(element: string, text: string) {
  const textNode = document.createTextNode(text);
  const newElement = document.createElement(element);
  newElement.appendChild(textNode);

  return newElement;
}
