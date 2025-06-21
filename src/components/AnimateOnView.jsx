// src/components/AnimateOnView.jsx

import { useEffect, useRef, useState } from "react";

export default function AnimateOnView({ children, animation = "fadeIn", delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const animationClasses = {
    fadeIn: "animate-fadeIn",
    slideInLeft: "animate-slideInLeft",
    slideInRight: "animate-slideInRight",
    zoomIn: "animate-zoomIn",
    none: "", // For typing
  };

  return (
    <div
      ref={ref}
      className={`
        ${isVisible ? `${animationClasses[animation]} opacity-100` : "opacity-0"}
        transition-opacity duration-1000
      `}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
