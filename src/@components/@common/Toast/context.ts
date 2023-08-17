import React from "react";

import { ToastType } from "./ToastProvider";

interface ToastController {
  showToast: (toast: ToastType) => void;
  blackoutToast: () => void;
}

export const ToastContext = React.createContext<ToastController>({
  showToast: () => {
    throw new Error("Function not implemented.");
  },
  blackoutToast: () => {
    throw new Error("Function not implemented.");
  },
});
