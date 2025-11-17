import { useEffect } from "react";

export default function MouseTrail() {
  useEffect(() => {
    // Create the dot
    const dot = document.createElement("div");
    dot.id = "mouse-trail-dot";
    document.body.appendChild(dot);

    // Smooth follow using requestAnimationFrame
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
      // ease toward the target
      currentX = lerp(currentX, targetX, 0.35);
      currentY = lerp(currentY, targetY, 0.35);
      dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      // keep animating until we're very close to target
      const dx = Math.abs(currentX - targetX);
      const dy = Math.abs(currentY - targetY);
      if (dx > 0.5 || dy > 0.5) {
        rafId = requestAnimationFrame(tick);
      }
    };

    document.addEventListener("mousemove", onMove);

    // Resize safety: nothing needed since we use viewport coords (clientX/Y)
    return () => {
      document.removeEventListener("mousemove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
      dot.remove();
    };
  }, []);

  return null;
}
