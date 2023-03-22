import { useRef, useState } from "react";

export default function useScrollableContainer() {
  const containerRef = useRef<HTMLElement | null>(null);

  const [isStartDragging, setIsStartDragging] = useState(false);
  const currentX = useRef(0);

  const standardX = useRef(0);
  const [draggedX, setDraggedX] = useState(0);

  function handleMouseDown(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    setIsStartDragging(true);

    currentX.current = event.pageX;

    initializeForDraggedX(event.pageX);
  }

  function initializeForDraggedX(standartX: number) {
    setDraggedX(0);
    standardX.current = standartX;
  }

  function handleMouseMove(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    const container = containerRef.current;
    if (!container) return;
    if (!isStartDragging) return;

    moveContainerByCurrentX(container, event.pageX);

    setDraggedX(Math.abs(event.pageX - standardX.current));
  }

  function moveContainerByCurrentX(container: HTMLElement, movedMouseX: number) {
    container.scrollLeft += currentX.current - movedMouseX;
    currentX.current = movedMouseX;
  }

  function handleMouseUpOrLeave() {
    reset();
  }

  function reset() {
    setIsStartDragging(false);
    currentX.current = 0;
    standardX.current = 0;
  }

  return {
    scrollableContainerProps: {
      ref: containerRef,
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUpOrLeave,
      onMouseLeave: handleMouseUpOrLeave,
    },
    isDragging: draggedX > 10,
  };
}
