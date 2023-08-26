import { useContext } from "react";

import { ToastContext } from "../context";
import { ToastType } from "../ToastProvider";

export default function useToast() {
  const { showToast, blackoutToast } = useContext(ToastContext);

  return { showToast: (toast: ToastType) => showToast(toast), blackoutToast };
}
