import { useState, useLayoutEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window?.innerWidth : undefined,
    height: typeof window !== "undefined" ? window?.innerHeight : undefined,
  });

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    };
    window?.addEventListener("resize", handleResize);

    handleResize();

    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
