import { useEffect, useRef, useState } from "react";

type Trail = { x: number; y: number; id: number; kind: "dot" | "star" };

export function CursorEffect() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [down, setDown] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [trails, setTrails] = useState<Trail[]>([]);
  const idRef = useRef(0);
  const lastTrailRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.body.classList.add("cursor-none-global");

    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });

      const now = performance.now();
      if (now - lastTrailRef.current > 35) {
        lastTrailRef.current = now;
        const id = idRef.current++;
        const kind: Trail["kind"] = id % 6 === 0 ? "star" : "dot";
        setTrails((t) => [...t.slice(-18), { x: e.clientX, y: e.clientY, id, kind }]);
        setTimeout(() => setTrails((t) => t.filter((p) => p.id !== id)), 800);
      }

      const el = e.target as HTMLElement | null;
      const interactive = !!el?.closest("a, button, input, textarea, select, [role='button']");
      setHovering(interactive);
    };

    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    // Smoothly follow with the ring
    const tick = () => {
      setRingPos((r) => ({
        x: r.x + (targetRef.current.x - r.x) * 0.18,
        y: r.y + (targetRef.current.y - r.y) * 0.18,
      }));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.classList.remove("cursor-none-global");
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden>
      {/* Trail particles */}
      {trails.map((t) => (
        <div
          key={t.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 cursor-trail"
          style={{ left: t.x, top: t.y }}
        >
          {t.kind === "dot" ? (
            <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_oklch(0.78_0.16_230/0.9)]" />
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" className="text-highlight">
              <path d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z" fill="currentColor" />
            </svg>
          )}
        </div>
      ))}

      {/* Soft following ring */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,border-color] duration-200 ease-out"
        style={{
          left: ringPos.x,
          top: ringPos.y,
          width: hovering ? 64 : 38,
          height: hovering ? 64 : 38,
          border: "1.5px solid oklch(0.78 0.16 230 / 0.55)",
          boxShadow: "0 0 28px oklch(0.78 0.16 230 / 0.35)",
        }}
      />

      {/* Custom cursor: paper-plane + grad-cap fusion (IELTS / global travel) */}
      <div
        className="absolute -translate-x-[6px] -translate-y-[6px] transition-transform duration-150"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-6px,-6px) scale(${down ? 0.85 : 1}) rotate(${down ? -8 : 0}deg)`,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <defs>
            <linearGradient id="cursorGrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.78 0.16 230)" />
              <stop offset="100%" stopColor="oklch(0.65 0.22 295)" />
            </linearGradient>
          </defs>
          {/* Paper plane body */}
          <path d="M2 2 L26 12 L13 15 L9 25 L7 16 Z" fill="url(#cursorGrad)" stroke="white" strokeWidth="0.8" strokeLinejoin="round" />
          {/* Inner fold */}
          <path d="M2 2 L13 15 L9 25" stroke="white" strokeOpacity="0.7" strokeWidth="0.7" fill="none" />
          {/* Tiny grad-cap accent on tail */}
          <path d="M5 6 L9 7.5 L5 9 L1 7.5 Z" fill="oklch(0.97 0.01 240)" opacity="0.95" />
        </svg>
      </div>
    </div>
  );
}
