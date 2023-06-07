import { PropsWithChildren, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import Error404Page from "../../Error404Page";
import Loading from "../Loading";

const SuspenseBoundary = ({ children }: PropsWithChildren) => {
  return (
    <ErrorBoundary fallback={<Error404Page />}>
      <Suspense fallback={<Loading backgroundColor="transparent" />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseBoundary;
