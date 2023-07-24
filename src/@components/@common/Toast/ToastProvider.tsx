import React, { PropsWithChildren, useCallback, useState } from "react";

import * as St from "./style";

interface ToastController {
  showToast: (toast: ToastType) => void;
}

export type ToastType = {
  message: string;
  duration: number;
};

export const ToastContext = React.createContext<ToastController>({
  showToast: () => {
    throw new Error("Function not implemented.");
  },
});

export default function ToastProvider({ children }: PropsWithChildren) {
  const [toast, setToast] = useState<ToastType | null>(null);

  const showToast = useCallback(
    async ({ message, duration }: ToastType) => {
      setToast({ message, duration });
      setTimeout(() => {
        setToast(null);
      }, duration * 1000);
    },
    [setToast],
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <St.ToastContainer>{toast.message}</St.ToastContainer>}
    </ToastContext.Provider>
  );
}
