import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

import { activeStateModal } from "../../core/atom/menuBar";

export default function useModal() {
  const setIsActiveModal = useSetRecoilState(activeStateModal);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevModalState) => !prevModalState);
  };

  useEffect(() => {
    setIsActiveModal(isModalOpen);
  }, [isModalOpen, setIsActiveModal]);

  return { isModalOpen, toggleModal };
}
