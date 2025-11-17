import { useEffect } from "react";

const DOT_COUNT = 24; // number of dots in the trail
const DECAY_MS = 450; // how long each dot stays visible
const HZ_LIMIT = 60;  // limit updates to ~60fps

export default function MouseTrail() {
  useEffect(() => {
    // Create overlay attached to body
    const overlay = document.createElement("div");
    overlay.id = "mouse-trail-overlay";
    Object.assign(overlay.style, {
      position: "fixed",
      inset: "0",
      pointerEvents: "none",
      zIndex: "99999",
    });
    document.body.appendChild(overlay);

    // Create a pool of reusable dots
    const dots: HTMLDivElement[] = [];
    for (let i = 0; i < DOT_COUNT; i++) {
      const dot = document.createElement("div");
      dot.className = "mouse-dot"; // define in CSS
      dot.style.opacity = "0";
      overlay.appendChild(dot);
      dots.push(dot);
    }

    let i = 0;
    let lastTime = 0;
    let pendingX = 0;
    let pendingY = 0;
    let rafId = 0;
    let hasPending = false;

    const update = (ts: number) => {
      rafId = 0;
      // simple frame limiting
      if (lastTime && ts - lastTime < 1000 / HZ_LIMIT) return;
      lastTime = ts;

      if (!hasPending) return;
      hasPending = false;

      // Next dot from pool
      const dot = dots[i];
      i = (i + 1) % DOT_COUNT;

      // Position using viewport coordinates (clientX/clientY)
      dot.style.transform = `translate3d(${pendingX}px, ${pendingY}px, 0) scale(1)`;
      dot.style.opacity = "1";

      // Decay this dot after DECAY_MS
      const timeout = setTimeout(() => {
        dot.style.opacity = "0";
        dot.style.transform = `translate3d(${pendingX}px, ${pendingY}px, 0) scale(0.5)`;
        clearTimeout(timeout);
      }, DECAY_MS);
    };

    const onMove = (e: MouseEvent) => {
      // Use clientX/clientY for fixed overlay to avoid scroll offset bugs
      pendingX = e.clientX;
      pendingY = e.clientY;
      hasPending = true;
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    document.addEventListener("mousemove", onMove);

    return () => {
      document.removeEventListener("mousemove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
      overlay.remove();
    };
  }, []);

  return null; // portal pattern; nothing in React tree
}
