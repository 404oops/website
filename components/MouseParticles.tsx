"use client";

import React, { useRef, useEffect } from "react";
import { useSpring } from "@react-spring/web";
import { useMouse } from "react-use";

const PARTICLE_SIZE = 400;
const BLUR_AMOUNT = 350;
const FLUCTUATION_RANGE = 50;
const SPRING_TENSION = 100;
const SPRING_FRICTION = 12;
const FOLLOW_STRENGTH = 0.8;

interface Particle {
  x: number;
  y: number;
  color: string;
}

export default function MouseParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { elX, elY } = useMouse(canvasRef as React.RefObject<HTMLElement>);

  const [particles, setParticles] = React.useState<Particle[]>([]);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const createNewParticles = () => {
          const newParticles = [
            {
              x: 0 + Math.random() * FLUCTUATION_RANGE,
              y: 0 + Math.random() * FLUCTUATION_RANGE,
              color: "#990000",
            },
            {
              x: canvas.width - Math.random() * FLUCTUATION_RANGE,
              y: 0 + Math.random() * FLUCTUATION_RANGE,
              color: "#2d0059",
            },
            {
              x: 0 + Math.random() * FLUCTUATION_RANGE,
              y: canvas.height - Math.random() * FLUCTUATION_RANGE,
              color: "#002D00",
            },
            {
              x: canvas.width - Math.random() * FLUCTUATION_RANGE,
              y: canvas.height - Math.random() * FLUCTUATION_RANGE,
              color: "#006666",
            },
          ];
          setParticles(newParticles);
        };

        const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          createNewParticles();
        };

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        createNewParticles();

        window.addEventListener("resize", resizeCanvas);

        return () => {
          window.removeEventListener("resize", resizeCanvas);
        };
      }
    }
  }, []);

  const animatedParticles = useSpring({
    to: particles
      .map((p, index) => ({
        [`x${index}`]: elX + (p.x - elX) * FOLLOW_STRENGTH,
        [`y${index}`]: elY + (p.y - elY) * FOLLOW_STRENGTH,
      }))
      .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
    from: particles
      .map((p, index) => ({
        [`x${index}`]: p.x,
        [`y${index}`]: p.y,
      }))
      .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
    config: { tension: SPRING_TENSION, friction: SPRING_FRICTION },
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx && canvas) {
      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.filter = `blur(${BLUR_AMOUNT}px)`;
        particles.forEach((p, i) => {
          ctx.beginPath();
          ctx.arc(
            animatedParticles[`x${i}`].get(),
            animatedParticles[`y${i}`].get(),
            PARTICLE_SIZE,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = p.color;
          ctx.fill();
        });
        ctx.filter = "none";
      };
      render();
    }
  }, [animatedParticles, particles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-20 animate-fade-in"
    />
  );
}
