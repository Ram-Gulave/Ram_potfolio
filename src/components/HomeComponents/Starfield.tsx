// Starfield.tsx
"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number; // Changed 'r' to 'radius' for clarity
  alpha: number;
  dx: number;
  dy: number;
  baseAlpha: number; // Store initial alpha for twinkling
  twinkleSpeed: number; // Speed of alpha change
  twinkleDirection: number; // 1 for increasing, -1 for decreasing
  color: string; // Add color to stars
}

const Starfield: React.FC<{
  numStars?: number;
  maxRadius?: number;
  drift?: boolean;
  twinkle?: boolean;
  connectStars?: boolean;
  connectionDistance?: number;
  starColor?: string; // New prop for star color
  lineColor?: string; // New prop for connection line color
}> = ({
  numStars = 200,
  maxRadius = 2,
  drift = true, // Defaulting drift to true for more dynamism
  twinkle = true,
  connectStars = true,
  connectionDistance = 80, // Max distance to connect stars
  starColor = "255, 255, 255", // Default white
  lineColor = "100, 150, 255", // Default light blue
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);

  const initStars = (width: number, height: number) => {
    const stars: Star[] = [];
    for (let i = 0; i < numStars; i++) {
      const radius = Math.random() * maxRadius + 0.5;
      const baseAlpha = Math.random() * 0.5 + 0.3;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        alpha: baseAlpha,
        baseAlpha: baseAlpha,
        dx: drift ? (Math.random() - 0.5) * 0.2 * (2 - radius / maxRadius) : 0, // Slower drift for larger stars (parallax)
        dy: drift ? (Math.random() - 0.5) * 0.2 * (2 - radius / maxRadius) : 0,
        twinkleSpeed: Math.random() * 0.005 + 0.002, // Slower/faster twinkling
        twinkleDirection: Math.random() > 0.5 ? 1 : -1,
        color: starColor,
      });
    }
    starsRef.current = stars;
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width, height } = canvas;

    ctx.clearRect(0, 0, width, height);

    if (connectStars) {
      ctx.lineWidth = 0.5;
      for (let i = 0; i < starsRef.current.length; i++) {
        const star1 = starsRef.current[i];
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const star2 = starsRef.current[j];
          const dist = Math.sqrt(
            Math.pow(star1.x - star2.x, 2) + Math.pow(star1.y - star2.y, 2)
          );

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.3; // Fader lines for farther stars
            ctx.strokeStyle = `rgba(${lineColor}, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(star1.x, star1.y);
            ctx.lineTo(star2.x, star2.y);
            ctx.stroke();
          }
        }
      }
    }

    for (const star of starsRef.current) {
      ctx.beginPath();
      // Optional: use a radial gradient for a subtle glow effect
      const gradient = ctx.createRadialGradient(
        star.x,
        star.y,
        0,
        star.x,
        star.y,
        star.radius
      );
      gradient.addColorStop(0, `rgba(${star.color}, ${star.alpha})`);
      gradient.addColorStop(
        1,
        `rgba(${star.color}, ${star.alpha * 0.1})`
      ); // Faded outer edge

      ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
      ctx.fillStyle = gradient; // Use gradient as fill style
      ctx.fill();
    }
  };

  const update = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { width, height } = canvas;

    for (const star of starsRef.current) {
      // Drift effect
      if (drift) {
        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
      }

      // Twinkling effect
      if (twinkle) {
        star.alpha += star.twinkleDirection * star.twinkleSpeed;
        if (star.alpha > star.baseAlpha * 1.5 || star.alpha < star.baseAlpha * 0.5) {
          star.twinkleDirection *= -1; // Reverse direction
          star.alpha = Math.min(Math.max(star.alpha, star.baseAlpha * 0.5), star.baseAlpha * 1.5); // Clamp alpha
        }
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(canvas.width, canvas.height);
    };

    setSize(); // Initial size and star setup

    const renderLoop = () => {
      draw();
      update();
      animationFrameIdRef.current = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    window.addEventListener("resize", setSize);

    return () => {
      window.removeEventListener("resize", setSize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [numStars, maxRadius, drift, twinkle, connectStars, connectionDistance, starColor, lineColor]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 dark:opacity-20 z-0"
    />
  );
};

export default Starfield;