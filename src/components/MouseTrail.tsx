import { useEffect } from "react";

export default function MouseTrail() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.id = "mouse-trail-canvas";
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "99999";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d")!;
    let trail: { x: number; y: number }[] = [];
    const maxTrail = 40;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      for (let i = 0; i < trail.length - 1; i++) {
        const p1 = trail[i];
        const p2 = trail[i + 1];
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
      }
      ctx.strokeStyle = "rgba(59, 130, 246, 0.6)"; // Tailwind blue-500
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const onMove = (e: MouseEvent) => {
      trail.push({ x: e.clientX, y: e.clientY });
      if (trail.length > maxTrail) trail.shift();
      draw();
    };

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      canvas.remove();
    };
  }, []);

  return null;
}
