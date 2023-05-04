import { useState } from "react";

import useIntersectionObserver from "../../@common/hooks/useIntersectionObserver";

const useHeaderChange = () => {
  const [isDefaultHeader, setIsDefaultHeader] = useState(true);

  const intersectionObserverRef = useIntersectionObserver(
    (entry) => {
      if (entry.isIntersecting) {
        setIsDefaultHeader(true);
        return;
      }
      setIsDefaultHeader(false);
    },
    { threshold: 0.5 },
  );

  return { isDefaultHeader, intersectionObserverRef };
};

export default useHeaderChange;
