import { useEffect, useState } from "react";

const COACH_MARK_SESSION_KEY = "coach-mark-shown";

export default function useCoachMark() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const isCoachMarkShown = localStorage.getItem(COACH_MARK_SESSION_KEY);
    if (!isCoachMarkShown || isOpened) {
      setIsOpened(true);
      localStorage.setItem(COACH_MARK_SESSION_KEY, "true");
    }
  }, []);

  const handleCloseCoachMark = () => {
    setIsOpened(false);
  };

  return { isOpened, handleCloseCoachMark };
}
