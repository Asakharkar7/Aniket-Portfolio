import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function MouseTrail() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Create a dedicated overlay container attached to document.body
  useEffect(() => {
    const container = document.createElement("div");
    container.setAttribute("id", "mouse-trail-overlay");
    container.style.position = "fixed";
    container.style.inset = "0";
    container.style.pointerEvents = "none";
    container.style.zIndex = "99999"; // above everything
    document.body.appendChild(container);
    containerRef.current = container;

    const createDot = (x: number, y: number) => {
      const dot = document.createElement("div");
      dot.className = "mouse-dot"; // style in CSS
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      container.appendChild(dot);

      // Remove after animation ends
      setTimeout(() => {
        dot.remove();
      }, 600);
    };

    const onMove = (e: MouseEvent) => {
      // Use pageX/pageY so it works regardless of scroll
      createDot(e.pageX, e.pageY);
    };

    document.addEventListener("mousemove", onMove);
    return () => {
      document.removeEventListener("mousemove", onMove);
      container.remove();
      containerRef.current = null;
    };
  }, []);

  // Render nothing into the React tree; we’re using a portal into body
  return createPortal(null, document.body);
}
