"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ComponentProps, useEffect, useState } from "react";

type DottedContainerProps = ComponentProps<"div"> & {
  showDotAnimation?: boolean;
};

export function DottedContainer({
  children,
  className,
  showDotAnimation = true,
}: DottedContainerProps) {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePos({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  if (!showDotAnimation) {
    return (
      <div
        className={cn(
          "w-full bg-neutral-900 bg-[radial-gradient(#404040_1px,transparent_1px)] [background-size:16px_16px]",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 w-full h-full bg-neutral-900 bg-[radial-gradient(#404040_1px,transparent_1px)] [background-size:16px_16px]",
          className
        )}
      />
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none"
        animate={{
          WebkitMaskImage: `radial-gradient(100px at ${mousePos.x}px ${mousePos.y}px, white 60%, transparent)`,
          maskImage: `radial-gradient(100px at ${mousePos.x}px ${mousePos.y}px, white 40%, transparent)`,
        }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        style={{
          backgroundSize: "16px 16px",
          backgroundImage: "radial-gradient(#a0a0a0 1px, transparent 1px)", // Cor dos pontos alterados
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
