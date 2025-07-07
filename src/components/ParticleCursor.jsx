import React, { useEffect, useRef } from "react";

const LiquidCursor = () => {
  const canvasRef = useRef(null);
  const parentRef = useRef(null);
  const particles = useRef([]);
  const animationFrame = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas.parentElement; // 👈 use parent container
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resizeCanvas();

    const colors = [
  "#00FFF3",
  "#00CFFF",
  "#009BFF",
  "#00FFB3",
  "#14F2D2",
  "#4EF8F3",
  "#12D7E6"
];


    const createParticle = (x, y) => {
      const rect = container.getBoundingClientRect();
      particles.current.push({
        x: x - rect.left,
        y: y - rect.top,
        size: Math.random() * 60 + 30,
        alpha: 0.1,
        dx: Math.random() * 0.1 - 0.05,
        dy: Math.random() * 0.1 - 0.05,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        p.alpha -= 0.002;

        if (p.alpha <= 0) {
          particles.current.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          const r = parseInt(p.color.slice(1, 3), 16);
          const g = parseInt(p.color.slice(3, 5), 16);
          const b = parseInt(p.color.slice(5, 7), 16);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.alpha})`;
          ctx.fill();
        }
      });
    };

    const animate = () => {
      drawParticles();
      animationFrame.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);
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
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
      style={{
        filter: "blur(10px)",
        opacity: 0.6,
      }}
    />
  );
};

export default LiquidCursor;
