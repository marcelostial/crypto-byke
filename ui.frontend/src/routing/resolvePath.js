const HAS_EXTENSION = /(\.[a-z]+)$/;
const DEFAULT_EXTENSION = ".html";

/**
 * função auxiliar para resolver o caminho de uma rota
 * @param {string} path - caminho da rota
 * @returns {string}
 */
export default function resolvePath(path) {
  if (!path) throw new Error("No path provided");

  path = addDefaultPageExtension(path);

  return path;
}

function addDefaultPageExtension(path) {
  if (!HAS_EXTENSION.test(path)) path += DEFAULT_EXTENSION;
  return path;
}
