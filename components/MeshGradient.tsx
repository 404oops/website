"use client";

import React, { useRef, useEffect } from "react";

type Point = {
  x: number;
  y: number;
  color: string;
  radius: number;
  dx: number;
  dy: number;
};

export default function MeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const generatePoints = (count: number): Point[] => {
      const points: Point[] = [];
      for (let i = 0; i < count; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          color: `rgba(${Math.floor(Math.random() * 256)}, 0, 0, 0.2)`, // Dark red shades
          radius: Math.random() * 400 + 300, // Increased radius: 400 to 900
          dx: Math.random() * 2 - 1, // Random x-direction speed
          dy: Math.random() * 2 - 1, // Random y-direction speed
        });
      }
      return points;
    };

    const animatePoints = (points: Point[]) => {
      points.forEach((point) => {
        point.x += point.dx;
        point.y += point.dy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.dx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.dy *= -1;
      });
    };

    const renderGradient = (points: Point[]) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.forEach((point) => {
        const gradient = ctx.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          point.radius
        );
        gradient.addColorStop(0, point.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animateGradient = () => {
      const points = generatePoints(9);

      const render = () => {
        animatePoints(points);
        renderGradient(points);
        requestAnimationFrame(render);
      };

      render();
    };

    resizeCanvas();
    animateGradient();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-20 fade-in"
    />
  );
}
