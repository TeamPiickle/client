import { useState } from "react";

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevModalState) => !prevModalState);
  };

  return { isModalOpen, toggleModal };
}
