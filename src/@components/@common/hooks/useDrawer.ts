import { SyntheticEvent, useRef, useState } from "react";

const thresholds = {
  OFFSET: 150,
  ANIMATION_TRANSITION_TIME: 0.2,
};

const FIRST_TOUCH = 0;

export default function useDrawer(closeModal: () => void) {
  const knobRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const currentRef = useRef(0);
  const standardRef = useRef(0);

  const [isStartDragging, setIsStartDragging] = useState<boolean>(false);
  const [dragged, setDragged] = useState<number>(0);

  function handleMouseDown(event: React.SyntheticEvent<HTMLElement>) {
    const knob = knobRef.current;
    if (!knob) return;
    if (isNode(event.target) && !knob.contains(event.target)) return;
    setIsStartDragging(true);

    const page = getPageByEventType(event);
    currentRef.current = page;
    initializeForDragged(page);
  }

  function isNode(target: EventTarget): target is Node {
    return (target as Node) !== undefined;
  }

  function getPageByEventType(event: React.SyntheticEvent<HTMLElement>): number {
    if (event.nativeEvent instanceof TouchEvent) {
      return event.nativeEvent.touches[FIRST_TOUCH].pageY;
    }
    if (event.nativeEvent instanceof MouseEvent) {
      return event.nativeEvent.pageY;
    }
    return 0;
  }

  function initializeForDragged(standard: number) {
    setDragged(0);
    standardRef.current = standard;
  }

  function handleMouseMove(event: SyntheticEvent<HTMLElement>) {
    const container = containerRef.current;

    if (!container) return;
    if (!isStartDragging) return;

    const page = getPageByEventType(event);
    currentRef.current = page;
    moveDrawerByCurrent(container, page);

    setDragged(Math.abs(page - standardRef.current));
  }

  function moveDrawerByCurrent(container: HTMLElement, movedTrigger: number) {
    const offset = Math.max(0, movedTrigger - standardRef.current);
    container.style.transform = `translateY(${offset}px)`;
    currentRef.current = movedTrigger;
  }

  function handleMouseUp() {
    const container = containerRef.current;
    if (!container) return;

    if (dragged > thresholds.OFFSET) {
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
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseUp,

      onTouchStart: handleMouseDown,
      onTouchMove: handleMouseMove,
      onTouchEnd: handleMouseUp,
      onTouchCancel: handleMouseUp,
    },
    knobRef,
  };
}
