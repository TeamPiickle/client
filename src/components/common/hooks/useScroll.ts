import { useEffect } from "react";

export default function useScroll() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
