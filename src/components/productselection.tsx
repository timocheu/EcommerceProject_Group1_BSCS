// ProductSelection.tsx
import { useEffect, useRef, useState } from "react";

type Props = {
  images?: string[];           // made optional
  className?: string;
  containerWidth?: number;
  sideWidth?: number;
  centerWidth?: number;
};

export default function ProductSelection({
  images = [],                 // default to empty array
  className = "",
  containerWidth = 640,
  sideWidth = 200,
  centerWidth = 280,
}: Props) {
  // defensive: if images is not an array or empty, render nothing (or a simple placeholder)
  if (!Array.isArray(images) || images.length === 0) {
    // console.warn("ProductSelection: no images provided", images);
    return null; // or return a loader / placeholder element
  }

  const n = images.length;
  const [center, setCenter] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const canPrev = center > 0;
  const canNext = center < n - 1;

  const prev = () => {
    if (!canPrev) return;
    setCenter((c) => Math.max(0, c - 1));
  };
  const next = () => {
    if (!canNext) return;
    setCenter((c) => Math.min(n - 1, c + 1));
  };


  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [center, n]);

  // touch swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onStart = (e: TouchEvent) => {
      touchStartX.current = e.touches?.[0]?.clientX ?? null;
    };
    const onEnd = (e: TouchEvent) => {
      if (touchStartX.current == null) return;
      const endX = e.changedTouches?.[0]?.clientX ?? 0;
      const dx = endX - (touchStartX.current ?? 0);
      const threshold = 40;
      if (dx > threshold) prev();
      else if (dx < -threshold) next();
      touchStartX.current = null;
    };
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchend", onEnd);
    return () => {
      el.removeEventListener("touchstart", onStart as any);
      el.removeEventListener("touchend", onEnd as any);
    };
  }, [center, n]);

  const offsetStep = 120;
  const transition =
    "transform 420ms cubic-bezier(.22,1,.36,1), opacity 320ms ease, filter 420ms ease";

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center">
        <button
          onClick={prev}
          disabled={!canPrev}
          aria-label="Previous"
          className={`cursor-pointer p-2 rounded-full shadow-md mr-4 transition-colors ${canPrev ? "bg-white hover:bg-gray-100" : "opacity-40 cursor-not-allowed bg-white/60"}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
            <path d="M15 6 L9 12 L15 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-md"
          style={{ width: containerWidth, maxWidth: "100%" }}
        >
          <div className="relative h-[320px]">
            {images.map((src, i) => {
              const off = i - center;
              const tx = off * offsetStep;
              const isVisible = Math.abs(off) <= 2;
              const scale = off === 0 ? 1 : off === -1 || off === 1 ? 0.9 : 0.82;
              const zIndex = off === 0 ? 30 : off === -1 || off === 1 ? 20 : 10;
              const translateY = off === 0 ? -8 : 0;
              const opacity = Math.abs(off) > 2 ? 0 : Math.abs(off) > 1 ? 0.85 : 1;
              const widthPx = off === 0 ? centerWidth : sideWidth;

              return (
                <div
                  key={i}
                  aria-hidden={!isVisible}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: `${widthPx}px`,
                    height: `${centerWidth}px`,
                    transform: `translateX(${tx}%) translateY(${translateY}px) scale(${scale})`,
                    transition,
                    zIndex,
                    opacity,
                    cursor: Math.abs(off) === 1 ? "pointer" : "default",
                    display: isVisible ? undefined : "none",
                    background: "transparent",
                  }}
                  onClick={() => {
                    if (Math.abs(off) === 1) setCenter(i);
                  }}
                >
                  <img
                    src={src}
                    alt={`product-${i + 1}`}
                    className="w-full h-full object-contain rounded-lg shadow-lg block"
                    draggable={false}
                    style={{
                      filter: off === 0 ? "none" : "grayscale(10%)",
                      background: "transparent",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={next}
          disabled={!canNext}
          aria-label="Next"
          className={`cursor-pointer p-2 rounded-full shadow-md ml-4 transition-colors ${canNext ? "bg-white hover:bg-gray-100" : "opacity-40 cursor-not-allowed bg-white/60"}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
            <path d="M9 6 L15 12 L9 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="mt-4 flex items-center gap-3 overflow-x-auto px-2">
        {images.map((src, i) => {
          const active = i === center;
          return (
            <button
              key={i}
              onClick={() => setCenter(i)}
              className={`cursor-pointer flex-shrink-0 rounded-md overflow-hidden transition-all ${active ? "ring-2 ring-offset-2 ring-primary" : "border border-gray-200"} `}
              style={{ width: 76, height: 76 }}
              aria-label={`Thumbnail ${i + 1}`}
            >
              <img src={src} alt={`thumb-${i + 1}`} className="w-full h-full object-cover block" draggable={false} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
