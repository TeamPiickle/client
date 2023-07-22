import { useState } from "react";
import { useRecoilValue } from "recoil";

import { activeStateToast } from "../../../core/atom/menuBar";

export default function useToast() {
  const { duration } = useRecoilValue(activeStateToast);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const fireToast = () => {
    setIsToastOpen(true);
    setTimeout(() => {
      setIsToastOpen(false);
    }, duration * 1000);
  };

  return { isToastOpen, fireToast };
}
