import React, { useEffect, useRef } from "react";

const LiquidCursor = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationFrame = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas.parentElement;
    const ctx = canvas.getContext("2d");

    const colors = [
      "#00FFF3",
      "#00CFFF",
      "#009BFF",
      "#00FFB3",
      "#14F2D2",
      "#4EF8F3",
      "#12D7E6"
    ];

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createParticle = (x, y) => {
      const rect = container.getBoundingClientRect();
      const posX = x - rect.left;
      const posY = y - rect.top;

      for (let i = 0; i < 3; i++) {
        particles.current.push({
          x: posX,
          y: posY,
          size: Math.random() * 20 + 10,
          alpha: 0.15,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        p.x += p.dx;
        p.y += p.dy;
        p.alpha -= 0.003;

        if (p.alpha <= 0) {
          particles.current.splice(i, 1);
          i--;
          continue;
        }

        const r = parseInt(p.color.slice(1, 3), 16);
        const g = parseInt(p.color.slice(3, 5), 16);
        const b = parseInt(p.color.slice(5, 7), 16);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.alpha})`;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.4)`;
        ctx.shadowBlur = 20;
        ctx.fill();
      }
    };

    const animate = () => {
      drawParticles();
      animationFrame.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    container.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-30"
      style={{
        filter: "blur(12px)",
        opacity: 0.7,
      }}
    />
  );
};

export default LiquidCursor;
