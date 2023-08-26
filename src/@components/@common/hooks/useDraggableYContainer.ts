import { useRef, useState } from "react";

export default function useDraggableYContainer() {
  const containerRef = useRef<HTMLElement | null>(null);

  const [isStartDragging, setIsStartDragging] = useState<boolean>(false);
  const [isScrollEnd, setIsScrollEnd] = useState<boolean>(false);
  const [startY, setStartY] = useState(0);
  const [movedY, setMovedY] = useState(0);

  const touchSensitivity = 0.7; // 이동 감도 조절 값 (조절할 수 있음)

  function handleTouchStart(event: React.TouchEvent<HTMLElement>) {
    setIsStartDragging(true);
    setStartY(event.touches[0].clientY); // 터치 시작 지점 저장
    setMovedY(0);
  }

  function handleTouchMove(event: React.TouchEvent<HTMLElement>) {
    if (!isStartDragging) return;

    const deltaY = event.touches[0].clientY - startY;

    // 이동 감도에 따라 이동 거리 조절
    const adjustedDeltaY = deltaY / touchSensitivity;

    setMovedY(adjustedDeltaY);
    moveContainer(adjustedDeltaY);
  }

  function moveContainer(deltaY: number) {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTop -= deltaY;

    // 컨테이너 끝에 도달했는지 여부 확인
    setIsScrollEnd(container.scrollHeight - container.scrollTop === container.clientHeight);
  }

  function handleTouchEnd() {
    setIsStartDragging(false);
  }

  return {
    scrollableContainerProps: {
      ref: containerRef,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
    isDragging: Math.abs(movedY) > 10, // 이동 거리에 따라 드래그 여부 결정
    isScrollEnd,
  };
}
