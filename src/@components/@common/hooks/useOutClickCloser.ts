import { useEffect, useRef } from "react";

type HandleOutClickCloser = () => void;

export default function useOutClickCloser(handleOutClickCloser: HandleOutClickCloser) {
  const currentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (!(e.target instanceof HTMLElement)) return;
      if (currentRef.current && !currentRef.current.contains(e.target)) {
        handleOutClickCloser();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [currentRef, handleOutClickCloser]);

  return currentRef;
}
