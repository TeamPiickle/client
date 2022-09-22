import { useEffect } from "react";

interface UseOutClickCloserProps {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  handleOutClickCloser: () => void;
}

export default function useOutClickCloser(props: UseOutClickCloserProps) {
  const { ref, handleOutClickCloser } = props;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (!(e.target instanceof HTMLElement)) return;
      if (ref.current && !ref.current.contains(e.target)) {
        handleOutClickCloser();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, handleOutClickCloser]);
}
