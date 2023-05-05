import { useState } from "react";

// const POPUP_SESSION_KEY = "popup-shown";

export default function useUpdateModal() {
  const [isOpened, setIsOpened] = useState(true);

  // MEMO :: 페이지 방문 시 매번 Open 설정 요구 (기획 측)
  // useEffect(() => {
  //   const isPopupShown = sessionStorage.getItem(POPUP_SESSION_KEY);
  //   if (!isPopupShown) {
  //     setIsOpened(true);
  //     sessionStorage.setItem(POPUP_SESSION_KEY, "true");
  //   }
  // }, []);

  const handleCloseModal = () => {
    setIsOpened(false);
  };

  return { isOpened, handleCloseModal };
}
