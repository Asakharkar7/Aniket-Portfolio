import { useEffect } from "react";

export default function MouseTrail() {
  useEffect(() => {
    let dot: HTMLDivElement | null = null;
    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      rafId = 0;
      currentX = lerp(currentX, targetX, 0.35);
      currentY = lerp(currentY, targetY, 0.35);
      if (dot) {
        dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      const dx = Math.abs(currentX - targetX);
      const dy = Math.abs(currentY - targetY);
      if (dx > 0.5 || dy > 0.5) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    const enableTrail = () => {
      if (window.innerWidth >= 768 && !dot) {
        dot = document.createElement("div");
        dot.id = "mouse-trail-dot";
        document.body.appendChild(dot);
        document.addEventListener("mousemove", onMove);
      }
    };

    const disableTrail = () => {
      if (dot) {
        document.removeEventListener("mousemove", onMove);
        if (rafId) cancelAnimationFrame(rafId);
        dot.remove();
        dot = null;
      }
    };

    const checkViewport = () => {
      if (window.innerWidth >= 768) {
        enableTrail();
      } else {
        disableTrail();
      }
    };

    // Run once and on resize
    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => {
      disableTrail();
      window.removeEventListener("resize", checkViewport);
    };
  }, []);

  return null;
}
