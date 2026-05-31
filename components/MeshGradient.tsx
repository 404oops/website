"use client";

import { useEffect, useRef, useState } from "react";
import SpaceGradient from "@/components/SpaceGradient";

type Point = {
  x: number;
  y: number;
  color: string;
  radius: number;
  dx: number;
  dy: number;
};

function MeshField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const OVERDRAW = 128;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth + OVERDRAW * 2;
      canvas.height = window.innerHeight + OVERDRAW * 2;
    };

    const scalePointsToCanvas = (
      points: Point[],
      previousWidth: number,
      previousHeight: number
    ) => {
      const widthScale = canvas.width / previousWidth;
      const heightScale = canvas.height / previousHeight;

      return points.map((point) => ({
        ...point,
        x: point.x * widthScale,
        y: point.y * heightScale,
        radius: point.radius,
      }));
    };

    const generatePoints = (count: number): Point[] => {
      const points: Point[] = [];
      for (let i = 0; i < count; i++) {
        const palette = [
          "rgba(28, 0, 0, 0.98)",
          "rgba(42, 0, 0, 0.97)",
          "rgba(58, 2, 2, 0.95)",
          "rgba(78, 4, 4, 0.93)",
          "rgba(104, 10, 10, 0.9)",
        ];

        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          color: palette[Math.floor(Math.random() * palette.length)],
          radius: Math.random() * 260 + 280,
          dx: Math.random() * 2 - 1,
          dy: Math.random() * 2 - 1,
        });
      }
      return points;
    };

    const animatePoints = (points: Point[]) => {
      points.forEach((point) => {
        point.x += point.dx;
        point.y += point.dy;

        if (point.x < 0 || point.x > canvas.width) point.dx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.dy *= -1;
      });
    };

    const renderGradient = (points: Point[]) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

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

      ctx.globalCompositeOperation = "source-over";
    };

    resizeCanvas();
    let points = generatePoints(22);
    let animationFrameId = 0;
    let resizeFrameId = 0;

    const render = () => {
      animatePoints(points);
      renderGradient(points);
      animationFrameId = window.requestAnimationFrame(render);
    };

    const handleResize = () => {
      window.cancelAnimationFrame(resizeFrameId);
      const previousWidth = canvas.width || 1;
      const previousHeight = canvas.height || 1;

      resizeFrameId = window.requestAnimationFrame(() => {
        resizeCanvas();
        points = scalePointsToCanvas(points, previousWidth, previousHeight);
        renderGradient(points);
      });
    };

    window.addEventListener("resize", handleResize);
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrameId);
      window.cancelAnimationFrame(resizeFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed -inset-32 -z-20 fade-in blur-xl" />;
}

export default function MeshGradient() {
  const [variant, setVariant] = useState<"mesh" | "space">("mesh");

  useEffect(() => {
    setVariant(Math.random() < 0.2 ? "space" : "mesh");
  }, []);

  return variant === "space" ? <SpaceGradient /> : <MeshField />;
}
