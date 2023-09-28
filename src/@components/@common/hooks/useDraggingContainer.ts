import { useRef, useState } from "react";

type DragDirectionType = "X" | "Y";

type EventMapperType = {
  [key in DragDirectionType]: {
    touch: "clientX" | "clientY";
    mouse: "pageX" | "pageY";
  };
};

const eventMapper: EventMapperType = {
  X: {
    touch: "clientX",
    mouse: "pageX",
  },
  Y: {
    touch: "clientY",
    mouse: "pageY",
  },
};

const FIRST_TOUCH = 0;

export default function useDraggingContainer(dragDirection: DragDirectionType) {
  const containerRef = useRef<HTMLElement | null>(null);

  const currentRef = useRef(0);
  const standardRef = useRef(0);

  const [isStartDragging, setIsStartDragging] = useState(false);
  const [dragged, setDragged] = useState(0);

  function handleTriggerDown(event: React.SyntheticEvent) {
    setIsStartDragging(true);

    if (event.nativeEvent instanceof TouchEvent) {
      const mapper = eventMapper[dragDirection].touch;
      const page = event.nativeEvent.touches[FIRST_TOUCH][mapper];
      currentRef.current = page;

      initializeForDragged(page);
    }
    if (event.nativeEvent instanceof MouseEvent) {
      const mapper = eventMapper[dragDirection].mouse;
      const page = event.nativeEvent[mapper];
      currentRef.current = page;

      initializeForDragged(page);
    }
  }

  function initializeForDragged(standard: number) {
    setDragged(0);
    standardRef.current = standard;
  }

  function handleTriggerMove(event: React.SyntheticEvent) {
    const container = containerRef.current;

    if (!container) return;
    if (!isStartDragging) return;

    if (event.nativeEvent instanceof TouchEvent) {
      const mapper = eventMapper[dragDirection].touch;
      const page = event.nativeEvent.touches[FIRST_TOUCH][mapper];
      moveContainerByCurrent(container, page);

      setDragged(Math.abs(page - standardRef.current));
    }

    if (event.nativeEvent instanceof MouseEvent) {
      const mapper = eventMapper[dragDirection].mouse;
      const page = event.nativeEvent[mapper];
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

  function handleTriggerEnd() {
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
      onMouseDown: handleTriggerDown,
      onMouseMove: handleTriggerMove,
      onMouseUp: handleTriggerEnd,
      onMouseLeave: handleTriggerEnd,

      onTouchStart: handleTriggerDown,
      onTouchMove: handleTriggerMove,
      onTouchEnd: handleTriggerEnd,
      onTouchCancel: handleTriggerEnd,
    },
    isDragging: dragged > 10,
  };
}
