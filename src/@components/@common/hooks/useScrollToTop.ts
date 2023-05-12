import { useEffect } from "react";

export default function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
