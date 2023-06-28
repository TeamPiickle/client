import { PropsWithChildren, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import Error404Page from "../../Error404Page";
import Loading from "../Loading";

interface SuspenseBoundaryProps {
  bgColor?: string;
}

const SuspenseBoundary = ({ children, bgColor }: PropsWithChildren<SuspenseBoundaryProps>) => {
  return (
    <ErrorBoundary fallback={<Error404Page />}>
      <Suspense fallback={<Loading backgroundColor={bgColor || "transparent"} />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseBoundary;
