import { useState } from "react";

import Header from "../common/Header";
import CardSlider from "./CardSlider";
import FilterModal from "./FilterModal";
import LoginModal from "./LoginModal";
import { St } from "./style";

export default function CardCollection() {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const openModal = () => {
    setIsOpened(true);
  };
  const closeModal = () => {
    setIsOpened(false);
  };

  return (
    <St.MainPage>
      <Header />
      <CardSlider openHandler={openModal} />
      {isOpened && <FilterModal closeHandler={closeModal} />}
      <LoginModal />
    </St.MainPage>
  );
}
