import { useState } from "react";
import { useLocation } from "react-router-dom";

import { CardsTypeLocation } from "../../types/cardCollection";
import Header from "../common/Header";
import CardSlider from "./CardSlider";
import FilterModal from "./FilterModal";
import LoginModal from "./LoginModal";
import { St } from "./style";

export default function CardCollection() {
  const location = useLocation();
  const cardsTypeLoaction = location.state as CardsTypeLocation;

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isLoginOpened, setLoginOpened] = useState<boolean>(false);

  const openModal = () => {
    setIsOpened(true);
  };

  const closeModal = () => {
    setIsOpened(false);
  };

  const openLoginModal = () => {
    setLoginOpened(true);
  };

  const closeLoginModal = () => {
    setLoginOpened(false);
  };

  const clickHandleFilterModal = () => {
    openModal();
  };

  const clickHandleLoginModal = () => {
    openLoginModal();
  };

  return (
    <St.MainPage>
      <Header />
      <CardSlider
        openFilterModalHandler={clickHandleFilterModal}
        openLoginModalHandler={clickHandleLoginModal}
        cardsTypeLoaction={cardsTypeLoaction}
      />

      {isLoginOpened && <LoginModal closeHandler={closeLoginModal} contents={"북마크기능인 마이피클을"} />}
      {isOpened && <FilterModal typeLocation={cardsTypeLoaction.type} closeHandler={closeModal} />}
    </St.MainPage>
  );
}
