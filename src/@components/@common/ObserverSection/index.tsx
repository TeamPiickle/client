import { PropsWithChildren } from "react";

import useObserverSection from "./hooks/useObserverSection";

export default function ObserverSection({ children }: PropsWithChildren) {
  const { isVisibleSection, intersectionObserverRef } = useObserverSection();
  return <div ref={intersectionObserverRef}>{isVisibleSection && children}</div>;
}