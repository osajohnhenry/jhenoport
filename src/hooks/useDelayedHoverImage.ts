import { useCallback, useEffect, useRef, useState } from 'react';

type Options = {
  /** ms the pointer must stay hovered before swapping. Default 2000. */
  delay?: number;
};

/**
 * Shows `defaultSrc` until the pointer has hovered continuously for `delay` ms,
 * then swaps to `hoverSrc` for as long as the pointer is still hovered.
 * On pointer leave the timer is cancelled and the image reverts immediately.
 */
export function useDelayedHoverImage(defaultSrc: string, hoverSrc: string, { delay = 2000 }: Options = {}) {
  const [src, setSrc] = useState(defaultSrc);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep src in sync if defaultSrc changes.
  useEffect(() => {
    setSrc((current) => (current === hoverSrc ? current : defaultSrc));
  }, [defaultSrc, hoverSrc]);

  // Preload the hover image so the swap isn't flickery.
  useEffect(() => {
    const img = new Image();
    img.src = hoverSrc;
  }, [hoverSrc]);

  const clearTimer = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  // Cancel on unmount.
  useEffect(() => clearTimer, [clearTimer]);

  const onMouseEnter = useCallback(() => {
    clearTimer();
    timer.current = setTimeout(() => {
      setSrc(hoverSrc);
      timer.current = null;
    }, delay);
  }, [clearTimer, delay, hoverSrc]);

  const onMouseLeave = useCallback(() => {
    clearTimer();
    setSrc(defaultSrc);
  }, [clearTimer, defaultSrc]);

  return { src, onMouseEnter, onMouseLeave };
}
