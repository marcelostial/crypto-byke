import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import resolvePath from "../../routing/resolvePath";

export function NavLink({ link, label }) {
  const [active, setActive] = useState("");

  useEffect(() => isActive(link, setActive), [link]);

  return (
    <Link to={link} className={`nav-link p3 ${active}`}>
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
