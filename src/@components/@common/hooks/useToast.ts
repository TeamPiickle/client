import { useContext } from "react";

import { ToastContext } from "../Toast/context";
import { ToastType } from "../Toast/ToastProvider";

export default function useToast() {
  const { showToast } = useContext(ToastContext);

  return (toast: ToastType) => showToast(toast);
}
