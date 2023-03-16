import { useRef, useState } from "react";

export default function useScrollableContainer() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  function handleMouseDown(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    setIsDragging(true);
    setStartX(event.pageX);
  }

  function handleMouseMove(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    const container = containerRef.current;
    if (!isDragging || !container) return;

    container.scrollLeft += startX - event.pageX;
    setStartX(event.pageX);
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  return {
    scrollableContainerProps: {
      ref: containerRef,
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseUp,
    },
  };
}
