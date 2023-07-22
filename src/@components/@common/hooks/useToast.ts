import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { activeStateToast } from "../../../core/atom/menuBar";

export default function useToast() {
  const [activeToast, setActiveStateToast] = useRecoilState(activeStateToast);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const fireToast = useCallback(() => {
    setIsToastOpen(true);
    setTimeout(() => {
      setIsToastOpen(false);
    }, activeToast.duration * 1000);
  }, [activeToast]);

  useEffect(() => {
    setActiveStateToast(activeToast);
    fireToast();
  }, [activeToast, setActiveStateToast, fireToast]);

  return { isToastOpen, fireToast };
}
