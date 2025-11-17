import { useEffect } from "react";

export default function MouseTrail() {
  useEffect(() => {
    // Only enable on laptop/desktop screens
    if (window.innerWidth < 768) return;

    const dot = document.createElement("div");
    dot.id = "mouse-trail-dot";
    document.body.appendChild(dot);

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    const tick = () => {
      rafId = 0;
      currentX = lerp(currentX, targetX, 0.35);
      currentY = lerp(currentY, targetY, 0.35);
      dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      const dx = Math.abs(currentX - targetX);
      const dy = Math.abs(currentY - targetY);
      if (dx > 0.5 || dy > 0.5) {
        rafId = requestAnimationFrame(tick);
      }
    };

    document.addEventListener("mousemove", onMove);

    return () => {
      document.removeEventListener("mousemove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
      dot.remove();
    };
  }, []);

  return null;
}
