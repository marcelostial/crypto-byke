/**
 * Funcao para decodificar entidades html
 * @param {text} str
 * @returns {text}
 */
export const decodeEntities = (str) => {
  if (!str) return;

  const element = document.createElement("div");
  element.innerHTML = str;

  str = element.textContent;
  element.remove();

  return str;
};
