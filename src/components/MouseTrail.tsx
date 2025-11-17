import { useEffect } from "react";

export default function MouseTrail() {
  useEffect(() => {
    const dot = document.createElement("div");
    dot.id = "mouse-trail-dot";
    Object.assign(dot.style, {
      position: "fixed",
      left: "0px",
      top: "0px",
      width: "12px",
      height: "12px",
      background: "#3b82f6",
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: "99999",
      transform: "translate(-50%, -50%)",
      transition: "transform 0.08s ease-out",
    });
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
