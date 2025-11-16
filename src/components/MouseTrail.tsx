import { useEffect, useRef } from "react";

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: { x: number; y: number; alpha: number }[] = [];

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      particles.push({ x: e.clientX, y: e.clientY, alpha: 1 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 200, 255, ${p.alpha})`;
        ctx.fill();
        p.alpha -= 0.02;
        if (p.alpha <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
    />
  );
}
