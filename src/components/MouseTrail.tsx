import { useEffect, useRef } from "react";

export default function MouseTrail() {
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trail = trailRef.current;
    if (!trail) return;

    const createDot = (x: number, y: number) => {
      const dot = document.createElement("div");
      dot.className = "mouse-dot";
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      trail.appendChild(dot);

      setTimeout(() => {
        dot.remove();
      }, 600);
    };

    const handleMove = (e: MouseEvent) => {
      createDot(e.pageX, e.pageY);
    };

    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={trailRef}
      className="fixed inset-0 pointer-events-none z-[9999]" // 👈 covers full screen
    />
  );
}
