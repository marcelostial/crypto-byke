import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import resolvePath from "../../routing/resolvePath";

export function NavLink({ link, label }) {
  const [active, setActive] = useState("");

  useEffect(() => isActive(link, setActive), [link]);

  const [path, anchor] = link.split("#");

  const getHash = () => {
    return anchor ? `#${anchor}` : "";
  };

  return (
    <Link
      to={{
        pathname: resolvePath(path),
        hash: getHash(),
      }}
      className={`nav-link p3 ${active}`}
    >
      {label}
    </Link>
  );
}

function isActive(link, setActive) {
  const currentPath = resolvePath(window.location.pathname);
  const targetPath = resolvePath(link);

  if (currentPath === targetPath) return setActive("active");
  return setActive("");
}
