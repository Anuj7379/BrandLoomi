import React, { useEffect, useRef } from "react";

const LiquidCursor = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationFrame = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#00FFF0", ]; // Cyan-green liquid tones

    const createParticle = (x, y) => {
      const size = Math.random() * 60 + 30; // ⬅ Large particles (30-60px)
      const speed = Math.random() * 0.1 - 0.05; // ⬅ Super slow
      const angle = Math.random() * Math.PI * 2;

      particles.current.push({
        x,
        y,
        size,
        alpha: 0.1, // ⬅️ Low opacity for soft look
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        p.alpha -= 0.002; // ⬅️ Slow fade

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
      createParticle(e.clientX, e.clientY); // Only 1 particle per move
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        width: "100vw",
        height: "100vh",
        filter: "blur(10px)", 
        opacity: 0.6,          
      }}
    />
  );
};

export default LiquidCursor;
