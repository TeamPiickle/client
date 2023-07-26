import React, { PropsWithChildren, useCallback, useState } from "react";

import { ToastContext } from "./context";
import useTimeout from "./hooks/useTimeout";
import * as St from "./style";

export type ToastType = {
  message: string;
  duration: number;
};

export default function ToastProvider({ children }: PropsWithChildren) {
  const [toast, setToast] = useState<ToastType | null>(null);
  const toastTimeout = useTimeout();

  const showToast = useCallback(
    async ({ message, duration }: ToastType) => {
      setToast({ message, duration });

      toastTimeout.set(() => {
        setToast(null);
      }, duration * 1000);
    },
    [setToast, toastTimeout],
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <St.ToastContainer>
          <St.ToastMessage>{toast.message}</St.ToastMessage>
        </St.ToastContainer>
      )}
    </ToastContext.Provider>
  );
}
