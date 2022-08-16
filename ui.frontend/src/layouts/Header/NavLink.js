import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import resolvePath from "../../routing/resolvePath";

export function NavLink({ link, label }) {
  const [active, setActive] = useState("");
  const [path, anchor] = link.split("#");

  const isActive = useCallback(() => {
    const windowPath =
      resolvePath(window.location.pathname) + window.location.hash;
    const targetPath = resolvePath(path) + getHash(anchor);

    return windowPath === targetPath;
  }, [path, anchor]);

  useEffect(() => {
    setActive(isActive() ? "active" : "");

    window.addEventListener("route-change", () => {
      setActive(isActive() ? "active" : "");
    });
  }, [isActive]);

  return (
    <Link
      to={{
        pathname: resolvePath(path),
        hash: getHash(anchor),
      }}
      className={`nav-link p3 ${active}`}
    >
      {label}
    </Link>
  );
}

const getHash = (anchor) => {
  return anchor ? `#${anchor}` : "";
};
