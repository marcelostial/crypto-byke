import resolvePath from "./resolvePath";

/**
 *  Função para alterar o idioma do site
 *
 * @param {string} languageId - Idioma provido pelo AEM
 * @param {string} targetPath - Caminho da página
 * @returns {void}
 */
function changeLanguage(languageId, targetPath) {
  localStorage.setItem("language", languageId);
  let path = resolvePath(targetPath);

  path = removeParams(path);

  window.location.pathname = path;

  return;
}
function removeParams(path) {
  if (path.includes("?")) {
    path = path.split("?")[0];
  }

  return path;
}

/**
 * Find alternate language for the current page
 *
 * @param {string} language
 * @returns {void}
 */
export function queryLanguage(language, languagePages) {
  const targetLanguage = language.toLowerCase();

  const languagePage = languagePages.find(
    (page) => page.locale.toLowerCase() === targetLanguage
  );

  if (languagePage) changeLanguage(language, languagePage.path);
  else changeLanguage(language, "/" + language + "/");

  return true;
}
