import { useRef, useState } from "react";

type DragDirectionType = "X" | "Y";

export default function useDraggingContainer(dragDirection: DragDirectionType) {
  const containerRef = useRef<HTMLElement | null>(null);

  const [isStartDragging, setIsStartDragging] = useState(false);
  const currentRef = useRef(0);

  const standardRef = useRef(0);
  const [dragged, setDragged] = useState(0);

  function handleMouseDown(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    setIsStartDragging(true);

    const page = dragDirection === "X" ? event.pageX : event.pageY;
    currentRef.current = page;

    initializeForDragged(page);
  }

  function initializeForDragged(standard: number) {
    setDragged(0);
    standardRef.current = standard;
  }

  function handleMouseMove(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    const container = containerRef.current;
    if (!container) return;
    if (!isStartDragging) return;

    const page = dragDirection === "X" ? event.pageX : event.pageY;

    moveContainerByCurrent(container, page);

    setDragged(Math.abs(page - standardRef.current));
  }

  function moveContainerByCurrent(container: HTMLElement, movedMouseX: number) {
    dragDirection === "X"
      ? (container.scrollLeft += currentRef.current - movedMouseX)
      : (container.scrollTop += currentRef.current - movedMouseX);
    currentRef.current = movedMouseX;
  }

  function handleMouseUpOrLeave() {
    reset();
  }

  function reset() {
    setIsStartDragging(false);
    currentRef.current = 0;
    standardRef.current = 0;
  }

  return {
    scrollableContainerProps: {
      ref: containerRef,
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUpOrLeave,
      onMouseLeave: handleMouseUpOrLeave,
    },
    isDragging: dragged > 10,
  };
}
