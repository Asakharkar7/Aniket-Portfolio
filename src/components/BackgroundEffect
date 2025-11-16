import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const matrixRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const matrixCanvas = matrixRef.current!;
    const trailCanvas = trailRef.current!;
    const matrixCtx = matrixCanvas.getContext("2d")!;
    const trailCtx = trailCanvas.getContext("2d")!;

    // Resize canvases
    const resize = () => {
      matrixCanvas.width = window.innerWidth;
      matrixCanvas.height = window.innerHeight;
      trailCanvas.width = window.innerWidth;
      trailCanvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Matrix Rain
    const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 14;
    const columns = Math.floor(matrixCanvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    function drawMatrix() {
      matrixCtx.fillStyle = "rgba(0,0,0,0.05)";
      matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
      matrixCtx.fillStyle = "#0f0";
      matrixCtx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        matrixCtx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    const matrixInterval = setInterval(drawMatrix, 33);

    // Mouse Trail
    const particles: { x: number; y: number; alpha: number }[] = [];
    const handleMouseMove = (e: MouseEvent) => {
      particles.push({ x: e.clientX, y: e.clientY, alpha: 1 });
    };
    window.addEventListener("mousemove", handleMouseMove);

    function drawTrail() {
      trailCtx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        trailCtx.beginPath();
        trailCtx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        trailCtx.fillStyle = `rgba(0,200,255,${p.alpha})`;
        trailCtx.fill();
        p.alpha -= 0.02;
        if (p.alpha <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(drawTrail);
    }
    drawTrail();

    return () => {
      clearInterval(matrixInterval);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas ref={matrixRef} className="fixed top-0 left-0 w-full h-full -z-20" />
      <canvas ref={trailRef} className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10" />
    </>
  );
}
