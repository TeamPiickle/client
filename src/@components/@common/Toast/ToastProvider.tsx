import { PropsWithChildren, useCallback, useState } from "react";

import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import { ToastContext } from "./context";
import useTimeout from "./hooks/useTimeout";
import * as St from "./style";

export type ToastType = {
  message: string;
  duration: number;
  handleClickCancel?: () => void;
};

export default function ToastProvider({ children }: PropsWithChildren) {
  const [toast, setToast] = useState<ToastType | null>(null);
  const toastTimeout = useTimeout();

  const showToast = useCallback(
    async ({ message, duration, handleClickCancel }: ToastType) => {
      setToast({ message, duration, handleClickCancel });

      toastTimeout.set(() => {
        setToast(null);
      }, duration * 1000);
    },
    [setToast, toastTimeout],
  );

  const blackoutToast = useCallback(() => setToast(null), [setToast]);

  return (
    <ToastContext.Provider value={{ showToast, blackoutToast }}>
      {children}
      {toast && (
        <St.ToastContainer>
          <St.ToastMessage>
            {toast.message}
            {toast.handleClickCancel && (
              <St.CancelButton onClick={toast.handleClickCancel} className={GTM_CLASS_NAME.handleClickCancelBlacklist}>
                취소
              </St.CancelButton>
            )}
          </St.ToastMessage>
        </St.ToastContainer>
      )}
    </ToastContext.Provider>
  );
}
