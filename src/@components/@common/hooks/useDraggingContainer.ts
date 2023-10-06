import { useRef, useState } from "react";

type DragDirectionType = "X" | "Y";

type EventMapperType = {
  [key in DragDirectionType]: "pageX" | "pageY";
};

const eventMapper: EventMapperType = {
  X: "pageX",
  Y: "pageY",
};

const FIRST_TOUCH_EVENT_IDX = 0;

export default function useDraggingContainer(dragDirection: DragDirectionType) {
  const containerRef = useRef<HTMLElement | null>(null);

  const currentRef = useRef(0);
  const standardRef = useRef(0);

  const [isStartDragging, setIsStartDragging] = useState(false);
  const [isArrivedEnd, setIsArrivedEnd] = useState(false);
  const [draggedDistance, setDraggedDistance] = useState(0);

  function handleTriggerDown(event: React.SyntheticEvent<HTMLElement>) {
    setIsStartDragging(true);

    const page = getPageByEventType(event);
    currentRef.current = page;
    initializeForDraggedDistance(page);
  }

  function getPageByEventType(event: React.SyntheticEvent<HTMLElement>): number {
    const eventType = eventMapper[dragDirection];
    if (event.nativeEvent instanceof TouchEvent) {
      return event.nativeEvent.touches[FIRST_TOUCH_EVENT_IDX][eventType];
    }
    if (event.nativeEvent instanceof MouseEvent) {
      return event.nativeEvent[eventType];
    }
    return 0;
  }

  function initializeForDraggedDistance(standard: number) {
    setDraggedDistance(0);
    standardRef.current = standard;
  }

  function handleTriggerMove(event: React.SyntheticEvent<HTMLElement>) {
    const container = containerRef.current;

    if (!container) return;
    if (!isStartDragging) return;

    const page = getPageByEventType(event);
    moveContainerByCurrent(container, page);
    handleArrivedEnd(container);

    setDraggedDistance(Math.abs(page - standardRef.current));
  }

  function moveContainerByCurrent(container: HTMLElement, movedTrigger: number) {
    const delta = currentRef.current - movedTrigger;
    if (dragDirection === "X") {
      container.scrollLeft += delta;
    }
    if (dragDirection === "Y") {
      container.scrollTop += delta;
    }
    currentRef.current = movedTrigger;
  }

  function handleArrivedEnd(container: HTMLElement) {
    if (dragDirection === "X") {
      setIsArrivedEnd(container.scrollWidth - container.scrollLeft === container.clientWidth);
    }
    if (dragDirection === "Y") {
      setIsArrivedEnd(container.scrollHeight - container.scrollTop === container.clientHeight);
    }
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
    isDragging: draggedDistance > 10,
    isArrivedEnd,
  };
}
