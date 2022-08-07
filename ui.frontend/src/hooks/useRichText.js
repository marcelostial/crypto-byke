import sanitizeHtml from "sanitize-html";
import sanitizeWhiteList from "../utils/sanitize-html.whitelist";

export function useRichText(text) {
  return {
    __html: sanitizeHtml(text, sanitizeWhiteList),
  };
}
