import { useEffect } from "react";

export default function MouseTrail() {
  useEffect(() => {
    const dot = document.createElement("div");
    dot.id = "mouse-trail-dot";
    document.body.appendChild(dot);

    const moveDot = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    document.addEventListener("mousemove", moveDot);
    return () => {
      document.removeEventListener("mousemove", moveDot);
      dot.remove();
    };
  }, []);

  return null;
}
