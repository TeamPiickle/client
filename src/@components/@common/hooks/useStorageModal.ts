import { useEffect, useState } from "react";

export default function useStorageModal(storage: Storage, key: string) {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const isPopupShown = storage.getItem(key);
    if (!isPopupShown || isOpened) {
      setIsOpened(true);
      storage.setItem(key, "true");
    }

    if (storage === sessionStorage) {
      const handlePageHideForRefresh = () => {
        storage.removeItem(key);
      };

      window.addEventListener("pagehide", handlePageHideForRefresh);
      return () => window.removeEventListener("pagehide", handlePageHideForRefresh);
    }
  }, []);

  const handleCloseModal = () => setIsOpened(false);

  return { isOpened, handleCloseModal };
}
