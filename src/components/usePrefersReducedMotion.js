import { useEffect, useState } from "react";

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export const prefersReducedMotion = () =>
  typeof window.matchMedia === "function" &&
  window.matchMedia(REDUCED_MOTION_QUERY).matches;

// Tracks the visitor's reduced-motion preference, including live changes.
const usePrefersReducedMotion = () => {
  const [isReduced, setIsReduced] = useState(prefersReducedMotion);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return undefined;
    const media = window.matchMedia(REDUCED_MOTION_QUERY);
    const onChange = (event) => setIsReduced(event.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return isReduced;
};

export default usePrefersReducedMotion;
