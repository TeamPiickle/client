import { useRef, useState } from "react";

export default function useDrawer(closeModal: () => void) {
  const knobRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ y: 0 });

  function handleMouseDown(e: React.MouseEvent<HTMLElement>) {
    if (knobRef.current && knobRef.current.contains(e.target as Node)) {
      setIsDragging(true);
      setDragStart({
        y: e.clientY,
      });
    }
  }
  function handleTouchStart(e: React.TouchEvent<HTMLElement>) {
    if (knobRef.current && knobRef.current.contains(e.target as Node)) {
      setIsDragging(true);
      setDragStart({
        y: e.touches[0].clientY,
      });
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isDragging) return;

    const yOffset = Math.max(0, e.clientY - dragStart.y);

    // 모달을 드래그한 만큼 이동
    const container = containerRef.current;
    if (!container) return;
    container.style.transform = `translateY(${yOffset}px)`;
    if (yOffset > 200) {
      container.style.transition = "transform 0.2s ease-in-out";
      container.style.transform = "translateY(100%)";
      setTimeout(() => {
        closeModal();
      }, 300);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    if (!isDragging) return;

    const yOffset = Math.max(0, e.touches[0].clientY - dragStart.y);

    // 모달을 드래그한 만큼 이동
    const container = containerRef.current;
    if (!container) return;
    container.style.transform = `translateY(${yOffset}px)`;

    if (yOffset > 200) {
      container.style.transition = "transform 0.2s ease-in-out";
      container.style.transform = "translateY(100%)";
      setTimeout(() => {
        closeModal();
      }, 300);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return {
    drawerProps: {
      ref: containerRef,
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleMouseUp,
    },
    knobRef,
  };
}
