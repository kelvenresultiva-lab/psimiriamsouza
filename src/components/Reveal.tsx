"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "left" | "right" | "up";

const animationClass: Record<Direction, string> = {
  left: "animate-fade-in-left",
  right: "animate-fade-in-right",
  up: "animate-fade-in-up",
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
      className={`${className} ${visible ? animationClass[direction] : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
