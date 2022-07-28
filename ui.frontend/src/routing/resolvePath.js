// import {
//   URL_ALIASES,
//   CONTENT_FOLDER,
//   DEFAULT_EXTENSION,
//   PORTUGUESE_ID,
// } from "../utils/constants";

// import { isInAuthoring } from "../utils/isInAuthoring";
// const HAS_EXTENSION = /(\.[a-z]+)$/;

/**
 * função auxiliar para resolver o caminho de uma rota
 * @param {string} path - caminho da rota
 * @returns {string}
 */
export default function resolvePath(path) {
  if (!path) throw new Error("No path provided");

  // if (isInAuthoring()) {
  //   path = addDefaultPageExtension(path);
  //   path = preserveParams(path);

  //   return path;
  // }

  path = applyAliases(path);
  path = removeContentStructure(path);
  path = removeExtension(path);
  path = addFowardSlash(path);

  return path;
}

function addDefaultPageExtension(path) {
  // if (!HAS_EXTENSION.test(path)) path += DEFAULT_EXTENSION;
  return path;
}

function preserveParams(path) {
  // const wcmMode = getWCMparam();

  // if (wcmMode) {
  //   path += `?wcmmode=${wcmMode}`;
  // }

  return path;
}

function getWCMparam() {
  const params = new URLSearchParams(window.location.search);
  const wcmMode = params.get("wcmmode");

  return wcmMode;
}

function applyAliases(path) {
  // if (path.includes(PORTUGUESE_ID)) {
  //   URL_ALIASES.forEach(({ en, pt }) => {
  //     path = path.replace(en, pt);
  //   });
  // }
  return path;
}

function removeContentStructure(path) {
  // if (path.startsWith(CONTENT_FOLDER)) {
  //   path = path.substring(CONTENT_FOLDER.length);
  // }
  return path;
}

function removeExtension(path) {
  // if (HAS_EXTENSION.test(path)) {
  //   path = path.substring(0, path.lastIndexOf("."));
  // }
  return path;
}

function addFowardSlash(path) {
  // if (!path.endsWith("/")) path += "/";
  return path;
}
