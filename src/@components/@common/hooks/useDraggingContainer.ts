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

  function handleTriggerDown(event: React.SyntheticEvent<HTMLElement>) {
    setIsStartDragging(true);

    const page = getPageByEventType(event);
    currentRef.current = page;
    initializeForDragged(page);
  }

  function getPageByEventType(event: React.SyntheticEvent<HTMLElement>): number {
    if (event.nativeEvent instanceof TouchEvent) {
      const eventType = eventMapper[dragDirection].touch;
      return event.nativeEvent.touches[FIRST_TOUCH][eventType];
    }
    if (event.nativeEvent instanceof MouseEvent) {
      const eventType = eventMapper[dragDirection].mouse;
      return event.nativeEvent[eventType];
    }
    return 0;
  }

  function initializeForDragged(standard: number) {
    setDragged(0);
    standardRef.current = standard;
  }

  function handleTriggerMove(event: React.SyntheticEvent<HTMLElement>) {
    const container = containerRef.current;

    if (!container) return;
    if (!isStartDragging) return;

    const page = getPageByEventType(event);
    moveContainerByCurrent(container, page);

    setDragged(Math.abs(page - standardRef.current));
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
