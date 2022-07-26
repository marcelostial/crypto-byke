import sanitizeHtml from "sanitize-html";
import sanitizeWhiteList from "../../utils/sanitize-html.whitelist";

import React from "react";
import extractModelId from "../../utils/extract-model-id";

/**
 * Text React component
 */

const Text = ({ text, cqPath, style, className }) => {
  return (
    <div
      className={`text--container ${className ? className : ""}`}
      id={extractModelId(cqPath)}
      style={style}
      data-rte-editelement
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(text, sanitizeWhiteList),
      }}
    />
  );
};

export default Text;
