import { useEffect } from "react";

export default function MouseTrail() {
  useEffect(() => {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.inset = "0";
    container.style.pointerEvents = "none";
    container.style.zIndex = "99999";
    document.body.appendChild(container);

    const createDot = (x: number, y: number) => {
      const dot = document.createElement("div");
      dot.className = "mouse-dot";
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      container.appendChild(dot);
      setTimeout(() => dot.remove(), 600);
    };

    const handleMove = (e: MouseEvent) => {
      createDot(e.pageX, e.pageY);
    };

    document.addEventListener("mousemove", handleMove);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      container.remove();
    };
  }, []);

  return null; // nothing rendered in React tree
}
