import { useContext } from "react";

import { ToastContext } from "../context";
import { ToastType } from "../ToastProvider";

export default function useToast() {
  const { showToast } = useContext(ToastContext);

  return (toast: ToastType) => showToast(toast);
}
