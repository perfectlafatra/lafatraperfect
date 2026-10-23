import { useEffect, useState } from "react";

/**
 * Retourne `true` lorsque la page est défilée de plus de `threshold` px.
 * Utilisé par le header premium pour fondu translucide + blur.
 */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
