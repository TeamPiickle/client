import { useRef, useState } from "react";

const thresholds = {
  OFFSET: 150,
  ANIMATION_TRANSITION_TIME: 0.2,
};

const FIRST_TOUCH_EVENT_IDX = 0;

export default function useDrawer(closeModal: () => void) {
  const knobRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const currentRef = useRef(0);
  const standardRef = useRef(0);

  const [isStartDragging, setIsStartDragging] = useState(false);
  const [draggedDistance, setDraggedDistance] = useState(0);

  function handleMouseDown(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    const knob = knobRef.current;
    if (!knob) return;
    if (isNode(event.target) && !knob.contains(event.target)) return;
    setIsStartDragging(true);

    const page = getPageByEventType(event);
    currentRef.current = page;
    initializeForDraggedDistance(page);
  }

  function handleTouchStart(event: React.TouchEvent<HTMLElement>) {
    const knob = knobRef.current;
    if (!knob) return;
    if (isNode(event.target) && !knob.contains(event.target)) return;
    setIsStartDragging(true);

    const page = getPageByEventType(event);
    currentRef.current = page;
    initializeForDraggedDistance(page);
  }

  function isNode(target: EventTarget): target is Node {
    return (target as Node) !== undefined;
  }

  function getPageByEventType(event: React.SyntheticEvent<HTMLElement>): number {
    if (event.nativeEvent instanceof TouchEvent) {
      return event.nativeEvent.touches[FIRST_TOUCH_EVENT_IDX].pageY;
    }
    if (event.nativeEvent instanceof MouseEvent) {
      return event.nativeEvent.pageY;
    }
    return 0;
  }

  function initializeForDraggedDistance(standard: number) {
    setDraggedDistance(0);
    standardRef.current = standard;
  }

  function handleMouseMove(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    const container = containerRef.current;

    if (!container) return;
    if (!isStartDragging) return;

    const page = getPageByEventType(event);
    currentRef.current = page;
    moveDrawerByCurrent(container, page);

    setDraggedDistance(Math.abs(page - standardRef.current));
  }

  function handleTouchMove(event: React.TouchEvent<HTMLElement>) {
    const container = containerRef.current;

    if (!container) return;
    if (!isStartDragging) return;

    const page = getPageByEventType(event);
    currentRef.current = page;
    moveDrawerByCurrent(container, page);

    setDraggedDistance(Math.abs(page - standardRef.current));
  }

  function moveDrawerByCurrent(container: HTMLElement, movedTrigger: number) {
    const offset = Math.max(0, movedTrigger - standardRef.current);
    container.style.transform = `translateY(${offset}px)`;
    currentRef.current = movedTrigger;
  }

  function handleMouseUpOrLeave() {
    const container = containerRef.current;
    if (!container) return;

    if (draggedDistance > thresholds.OFFSET) {
      container.style.transition = `transform ${thresholds.ANIMATION_TRANSITION_TIME}s ease-in-out`;
      container.style.transform = "translateY(100%)";
      setTimeout(() => {
        closeModal();
      }, thresholds.ANIMATION_TRANSITION_TIME * 1000 + 50);
    } else {
      container.style.transition = `transform ${thresholds.ANIMATION_TRANSITION_TIME / 2}s ease-out`;
      container.style.transform = "translateY(0)";
    }

    reset();
  }

  function handleTouchEndOrCancel() {
    const container = containerRef.current;
    if (!container) return;

    if (draggedDistance > thresholds.OFFSET) {
      container.style.transition = `transform ${thresholds.ANIMATION_TRANSITION_TIME}s ease-in-out`;
      container.style.transform = "translateY(100%)";
      setTimeout(() => {
        closeModal();
      }, thresholds.ANIMATION_TRANSITION_TIME * 1000 + 50);
    } else {
      container.style.transition = `transform ${thresholds.ANIMATION_TRANSITION_TIME / 2}s ease-out`;
      container.style.transform = "translateY(0)";
    }

    reset();
  }

  function reset() {
    setIsStartDragging(false);
    currentRef.current = 0;
    standardRef.current = 0;
  }

  return {
    drawerProps: {
      ref: containerRef,
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUpOrLeave,
      onMouseLeave: handleMouseUpOrLeave,

      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEndOrCancel,
      onTouchCancel: handleTouchEndOrCancel,
    },
    knobRef,
  };
}
