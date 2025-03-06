"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const TiltCard = {
  Root: TiltCardRoot,
  Title: TiltCardTitle,
  Subtitle: TiltCardSubtitle,
  Image: TiltCardImage,
  Body: TiltCardBody,
  Actions: TiltCardActions,
};

export function TiltCardRoot({ children }: { children: React.ReactNode }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 2 - 1;
    const y = ((e.clientY - top) / height) * 2 - 1;

    setRotate({ x: y * 15, y: -x * 15 });
  };

  const resetTilt = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      className="relative p-4 w-full h-[60dvh] bg-gradient-to-br from-neutral-800 to-neutral-950 border-2 border-white/20 rounded-xl shadow-lg flex flex-col items-start justify-center"
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "keyframes", damping: 10 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      {children}
    </motion.div>
  );
}

export function TiltCardTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl font-semibold text-center">{children}</h1>;
}

export function TiltCardSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-semibold opacity-60 text-lg text-center">
      {children}
    </span>
  );
}

export function TiltCardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex w-full items-center justify-center p-4 rounded-lg">
      <img src={src} alt={alt} className="w-auto h-24" />
    </div>
  );
}

export function TiltCardBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 w-full flex-col items-center">{children}</div>
  );
}

export function TiltCardActions({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-1 w-full">{children}</div>;
}
