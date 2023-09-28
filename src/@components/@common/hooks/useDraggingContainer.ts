import { useRef, useState } from "react";

type DragDirectionType = "X" | "Y";

export default function useDraggingContainer(dragDirection: DragDirectionType) {
  const containerRef = useRef<HTMLElement | null>(null);

  const currentRef = useRef(0);
  const standardRef = useRef(0);

  const [isStartDragging, setIsStartDragging] = useState(false);
  const [dragged, setDragged] = useState(0);

  function handleMouseDown(event: React.SyntheticEvent) {
    setIsStartDragging(true);

    if (event.nativeEvent instanceof TouchEvent) {
      const page = dragDirection === "X" ? event.nativeEvent.touches[0].clientX : event.nativeEvent.touches[0].clientY;
      currentRef.current = page;

      initializeForDragged(page);
    }
    if (event.nativeEvent instanceof MouseEvent) {
      const page = dragDirection === "X" ? event.nativeEvent.pageX : event.nativeEvent.pageY;
      currentRef.current = page;

      initializeForDragged(page);
    }
  }

  function initializeForDragged(standard: number) {
    setDragged(0);
    standardRef.current = standard;
  }

  function handleMouseMove(event: React.SyntheticEvent) {
    const container = containerRef.current;

    if (!container) return;
    if (!isStartDragging) return;

    if (event.nativeEvent instanceof TouchEvent) {
      const page = dragDirection === "X" ? event.nativeEvent.touches[0].clientX : event.nativeEvent.touches[0].clientY;
      moveContainerByCurrent(container, page);

      setDragged(Math.abs(page - standardRef.current));
    }

    if (event.nativeEvent instanceof MouseEvent) {
      const page = dragDirection === "X" ? event.nativeEvent.pageX : event.nativeEvent.pageY;
      moveContainerByCurrent(container, page);

      setDragged(Math.abs(page - standardRef.current));
    }
  }

  function moveContainerByCurrent(container: HTMLElement, movedMouse: number) {
    dragDirection === "X"
      ? (container.scrollLeft += currentRef.current - movedMouse)
      : (container.scrollTop += currentRef.current - movedMouse);
    currentRef.current = movedMouse;
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
      onTouchStart: handleMouseDown,
      onTouchMove: handleMouseMove,
      onTouchEnd: handleMouseUpOrLeave,
      onTouchCancel: handleMouseUpOrLeave,
    },
    isDragging: dragged > 10,
  };
}
