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
          color: `rgba(${Math.floor(Math.random() * 256)}, 0, 0, 0.5)`, // Dark red shades
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
      const points = generatePoints(13);

      const render = () => {
        animatePoints(points);
        renderGradient(points);
        requestAnimationFrame(render);
      };

      render();
    };

    const drawBlurredGradient = (canvas: HTMLCanvasElement) => {
      const visibleWidth = window.innerWidth;
      const visibleHeight = window.innerHeight;
      const padding = 40; // Extra space for blur

      // Create offscreen canvas
      const offCanvas = document.createElement("canvas");
      offCanvas.width = visibleWidth + padding * 2;
      offCanvas.height = visibleHeight + padding * 2;
      const offCtx = offCanvas.getContext("2d");

      if (!offCtx) return;
      // Draw gradient on offscreen canvas
      const gradient = offCtx.createLinearGradient(
        padding,
        padding,
        offCanvas.width - padding,
        offCanvas.height - padding
      );
      gradient.addColorStop(0, "rgba(255, 0, 150, 0.6)");
      gradient.addColorStop(1, "rgba(0, 204, 255, 0.6)");
      offCtx.fillStyle = gradient;
      offCtx.fillRect(0, 0, offCanvas.width, offCanvas.height);

      // Apply blur
      offCtx.globalAlpha = 1;
      offCtx.filter = "blur(16px)";
      offCtx.drawImage(offCanvas, 0, 0);

      // Draw the center (cropped) part onto the visible canvas
      canvas.width = visibleWidth;
      canvas.height = visibleHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, visibleWidth, visibleHeight);
      ctx.drawImage(
        offCanvas,
        padding,
        padding,
        visibleWidth,
        visibleHeight, // source rect
        0,
        0,
        visibleWidth,
        visibleHeight // destination rect
      );
    };

    resizeCanvas();
    animateGradient();

    window.addEventListener("resize", () => {
      drawBlurredGradient(canvas);
    });

    return () => {
      window.removeEventListener("resize", () => {
        drawBlurredGradient(canvas);
      });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-20 fade-in blur-xl"
    />
  );
}
