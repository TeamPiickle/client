import { useEffect, useState } from "react";

const POPUP_SESSION_KEY = "popup-shown";

export default function useUpdateModal() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const isPopupShown = sessionStorage.getItem(POPUP_SESSION_KEY);
    if (!isPopupShown) {
      setIsOpened(true);
      sessionStorage.setItem(POPUP_SESSION_KEY, "true");
    }
  }, []);

  const handleCloseModal = () => {
    setIsOpened(false);
  };

  return { isOpened, handleCloseModal };
}
