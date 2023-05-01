import { useEffect, useState } from "react";

export default function useUpdateModal() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const isPopupShown = sessionStorage.getItem("popup-shown");
    if (!isPopupShown) {
      setIsOpened(true);
      sessionStorage.setItem("popup-shown", "true");
    }
  }, []);

  const handleCloseModal = () => {
    setIsOpened(false);
  };

  return { isOpened, handleCloseModal };
}
