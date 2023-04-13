import { useState } from "react";

import useIntersectionObserver from "../../@common/hooks/useIntersectionObserver";

export default function useCTAFilter() {
  const [isVisibleCTAButton, setIsVisibleCTAButton] = useState(true);

  const intersectionObserverRef = useIntersectionObserver(
    (entry) => {
      if (entry.isIntersecting) {
        setIsVisibleCTAButton(false);
        return;
      }
      setIsVisibleCTAButton(true);
    },
    { threshold: 0.3 },
  );

  return { isVisibleCTAButton, intersectionObserverRef };
}
