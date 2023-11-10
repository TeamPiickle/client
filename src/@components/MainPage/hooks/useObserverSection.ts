import { useRef, useState } from "react";

import useIntersectionObserver from "../../@common/hooks/useIntersectionObserver";

interface IntersectionParamsType {
  entry: IntersectionObserverEntry;
  observer: IntersectionObserver;
}

const INTERSECTED_BEFORE_LOAD = 1;

export default function useObserverSection() {
  const intersectCount = useRef<number>(0);
  const [isVisibleSection, setIsVisibleSection] = useState(false);

  const intersectionObserverRef = useIntersectionObserver(
    (entry, observer) => {
      if (entry.isIntersecting) {
        handleIntersecting({ entry, observer });
        return;
      }
      setIsVisibleSection(false);
    },
    { threshold: 0.3 },
  );

  const handleIntersecting = (params: IntersectionParamsType) => {
    if (intersectCount.current < INTERSECTED_BEFORE_LOAD) {
      intersectCount.current += 1;
      return;
    }
    handleIntersectingAfterLoad(params);
  };

  const handleIntersectingAfterLoad = ({ entry, observer }: IntersectionParamsType) => {
    setIsVisibleSection(true);
    observer.unobserve(entry.target);
  };

  return { isVisibleSection, intersectionObserverRef };
}
