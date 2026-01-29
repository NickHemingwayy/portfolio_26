"use client";

import { useState, MouseEvent, useEffect, useRef } from "react";
import Coin from "@/components/ui/coin";

const Flashlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: -300, y: -300 });
  const [coinCollected, setCoinCollected] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: globalThis.MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isInside =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;

        if (isInside) {
          setMousePosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
          });
        } else {
          setMousePosition({ x: -300, y: -300 });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const maskSize = 150;
  const glowSize = 400;

  return (
    <div
      ref={containerRef}
      className="border min-h-48 relative w-full flex items-center justify-center bg-black flex-1"
    >
      {/* Glow effect */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: glowSize,
          height: glowSize,
          background: `radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 80%)`,
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Masked content */}
      <div
        className="w-full h-full flex items-center justify-center p-8"
        onClick={() => setCoinCollected(true)}
        style={
          !coinCollected
            ? {
                maskImage: `radial-gradient(circle ${maskSize}px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
              }
            : {}
        }
      >
        <Coin id="4" />
      </div>
    </div>
  );
};
export default Flashlight;
