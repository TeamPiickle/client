import { useLocation } from "react-router-dom";

import useCardLists from "../../core/api/cardCollection";
import { CardsTypeLocation } from "../../types/cardCollection";
import Header from "../common/Header";
import useModal from "../common/hooks/useModal";
import useScroll from "../common/hooks/useScroll";
import LoginModal from "../common/LoginModal";
import CardSlider from "./CardSlider";
import FilterModal from "./FilterModal";
import { St } from "./style";

export default function CardCollectionPage() {
  useScroll();

  const location = useLocation();
  const cardsTypeLoaction = location.state as CardsTypeLocation;
  const { cardLists, fetchCardListsWithFilter } = useCardLists(cardsTypeLoaction);

  const { isModalOpen: isFilterModalOpen, toggleModal: toggleFilterModal } = useModal();
  const { isModalOpen: isLoginModalOpen, toggleModal: toggleLoginModal } = useModal();

  return (
    <St.MainPage>
      <Header />
      <CardSlider
        openFilterModalHandler={toggleFilterModal}
        openLoginModalHandler={toggleLoginModal}
        cardsTypeLoaction={cardsTypeLoaction}
        cardLists={cardLists}
      />

      {isLoginModalOpen && <LoginModal closeHandler={toggleLoginModal} contents={"북마크기능인 마이피클을"} />}
      {isFilterModalOpen && (
        <FilterModal closeHandler={toggleFilterModal} fetchCardListsWithFilter={fetchCardListsWithFilter} />
      )}
    </St.MainPage>
  );
}
