import { useContext } from "react";

import { ToastContext, ToastType } from "../Toast/ToastProvider";

export default function useToast() {
  const { showToast } = useContext(ToastContext);

  return (toast: ToastType) => showToast(toast);
}
