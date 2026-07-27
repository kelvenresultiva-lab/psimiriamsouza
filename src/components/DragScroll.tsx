"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Carrossel horizontal.
 *
 * No celular (sem mouse), o componente é um contêiner de rolagem nativa puro,
 * sem nenhum handler de JS — assim o swipe do dedo usa a rolagem do próprio
 * navegador, com inércia, e nada pode interferir. O arrasto com o mouse (JS)
 * só é anexado em dispositivos que têm um ponteiro fino (mouse/trackpad).
 */
export default function DragScroll({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [enableMouseDrag, setEnableMouseDrag] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });

  useEffect(() => {
    // só habilita o arrasto por mouse onde existe um ponteiro fino (desktop)
    setEnableMouseDrag(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    drag.current = {
      active: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
      moved: false,
    };
    setIsDragging(true);
    try {
      el.setPointerCapture(e.pointerId);
    } catch {
      // pointer capture pode falhar legitimamente (ex.: já capturado)
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || !drag.current.active || e.pointerType !== "mouse") return;
    const delta = e.clientX - drag.current.startX;
    if (Math.abs(delta) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.scrollLeft - delta;
  };

  const endDrag = () => {
    drag.current.active = false;
    setIsDragging(false);
  };

  const mouseHandlers = enableMouseDrag
    ? {
        onPointerDown,
        onPointerMove,
        onPointerUp: endDrag,
        onPointerCancel: endDrag,
        onPointerLeave: endDrag,
        onClickCapture: (e: React.MouseEvent) => {
          // impede que soltar o arrasto sobre um link dispare a navegação
          if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
          }
        },
      }
    : {};

  return (
    <div
      ref={ref}
      {...mouseHandlers}
      className={`scrollbar-none flex overflow-x-auto ${
        enableMouseDrag ? (isDragging ? "cursor-grabbing select-none" : "cursor-grab") : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
