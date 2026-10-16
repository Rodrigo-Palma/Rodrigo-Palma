import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

// The animated cursor hides the native one, so only mount it for a mouse
// (fine pointer) and when the visitor has not asked for reduced motion.
export const CURSOR_QUERY =
  "(pointer: fine) and (prefers-reduced-motion: no-preference)";

const matchesQuery = () =>
  typeof window.matchMedia === "function" &&
  window.matchMedia(CURSOR_QUERY).matches;

const Cursor = () => {
  const [isEnabled, setIsEnabled] = useState(matchesQuery);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return undefined;
    const media = window.matchMedia(CURSOR_QUERY);
    const onChange = (event) => setIsEnabled(event.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  if (!isEnabled) return null;

  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={44}
      color="255, 147, 1"
      outerAlpha={0.3}
      innerScale={0.7}
      outerScale={1.4}
    />
  );
};

export default Cursor;
