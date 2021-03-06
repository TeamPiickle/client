import { useState } from "react";
import { useLocation } from "react-router-dom";

import { CardList, CardsTypeLocation } from "../../types/cardCollection";
import useScroll from "../../util/hooks/useScroll";
import Header from "../common/Header";
import LoginModal from "../common/LoginModal";
import CardSlider from "./CardSlider";
import FilterModal from "./FilterModal";
import { St } from "./style";

export default function CardCollection() {
  useScroll();

  const location = useLocation();
  const cardsTypeLoaction = location.state as CardsTypeLocation;

  const [cardLists, setCardLists] = useState<CardList[] | null>(null);
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
        cardLists={cardLists}
        setCardLists={setCardLists}
      />

      {isLoginOpened && <LoginModal closeHandler={closeLoginModal} contents={"북마크기능인 마이피클을"} />}
      {isOpened && <FilterModal closeHandler={closeModal} setCardLists={setCardLists} />}
    </St.MainPage>
  );
}
