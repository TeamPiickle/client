import { useState } from "react";

import useIntersectionObserver from "../../@common/hooks/useIntersectionObserver";

export default function useCTAFilter() {
  const [isVisibleCTAButton, setIsVisibleCTAButton] = useState(true);

  const intersectionObserverRef = useIntersectionObserver(
    (entry) => {
      if (entry.isIntersecting) {
        setIsVisibleCTAButton(true);
        return;
      }
      setIsVisibleCTAButton(false);
    },
    { threshold: 0.3 },
  );

  return { isVisibleCTAButton, intersectionObserverRef };
}
