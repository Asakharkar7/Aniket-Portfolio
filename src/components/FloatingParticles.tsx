import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  opacity: number;
  pulsePhase: number;
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    const particleCount = Math.min(80, Math.max(40, Math.floor((width * height) / 10000)));

    // Create particles with varied sizes and opacity
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 4 + 0.5,
        dx: (Math.random() - 0.5) * 0.7,
        dy: (Math.random() - 0.5) * 0.7,
        opacity: Math.random() * 0.6 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Handle mouse movement for interactive effect
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    function draw() {
      // Create gradient background effect
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(248, 250, 252, 0)");
      gradient.addColorStop(0.5, "rgba(226, 232, 240, 0.02)");
      gradient.addColorStop(1, "rgba(209, 213, 219, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((p, index) => {
        // Update position
        p.x += p.dx;
        p.y += p.dy;

        // Pulsing effect
        p.pulsePhase += 0.02;
        const pulse = Math.sin(p.pulsePhase) * 0.3 + 0.7;

        // Mouse interaction - particles move away from cursor
        const dx = p.x - mousePosRef.current.x;
        const dy = p.y - mousePosRef.current.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        const interactionRange = 150;

        if (distToMouse < interactionRange) {
          const angle = Math.atan2(dy, dx);
          const force = (interactionRange - distToMouse) / interactionRange;
          p.dx += Math.cos(angle) * force * 0.3;
          p.dy += Math.sin(angle) * force * 0.3;
        }

        // Damping
        p.dx *= 0.995;
        p.dy *= 0.995;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle with glow effect
        ctx.save();

        // Glow
        ctx.shadowColor = `rgba(59, 130, 246, ${p.opacity * pulse * 0.4})`;
        ctx.shadowBlur = p.r * 4;
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity * pulse * 0.8})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * pulse, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = "rgba(59, 130, 246, 0.15)";
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const connectionDistance = 150;

          if (dist < connectionDistance) {
            // Fade lines based on distance
            const opacity = (1 - dist / connectionDistance) * 0.25;
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        background: "linear-gradient(135deg, rgba(248, 250, 252, 1) 0%, rgba(240, 249, 255, 0.5) 100%)",
      }}
    />
  );
}
