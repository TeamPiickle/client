import { useCallback, useRef, useState } from "react";

export default function useDrawer(closeModal: () => void) {
  const knobRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ y: 0 });
  const [yOffset, setYOffset] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (knobRef.current && knobRef.current.contains(e.target as Node)) {
      setIsDragging(true);
      setDragStart({
        y: e.clientY,
      });
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!isDragging) return;

      const offset = Math.max(0, e.clientY - dragStart.y);

      // 모달을 드래그한 만큼 이동
      const container = containerRef.current;
      if (!container) return;
      container.style.transform = `translateY(${offset}px)`;
      setYOffset(offset);
    },
    [dragStart.y, isDragging],
  );

  const handleMouseUp = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const container = containerRef.current;
      if (!container) return;

      if (yOffset > 150) {
        container.style.transition = "transform 0.2s ease-in-out";
        container.style.transform = "translateY(100%)";
        setTimeout(() => {
          closeModal();
        }, 250);
      } else {
        console.log(yOffset);
        container.style.transform = "translateY(0)";
      }
      setIsDragging(false);
    },
    [yOffset, closeModal],
  );

  /**
   * For Mobile
   * */

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLElement>) => {
    if (knobRef.current && knobRef.current.contains(e.target as Node)) {
      setIsDragging(true);
      setDragStart({
        y: e.touches[0].clientY,
      });
    }
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLElement>) => {
      if (!isDragging) return;

      const yOffset = Math.max(0, e.touches[0].clientY - dragStart.y);

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
    },
    [closeModal, dragStart.y, isDragging],
  );

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
