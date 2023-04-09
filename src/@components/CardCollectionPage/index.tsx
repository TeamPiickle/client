import { useLocation } from "react-router-dom";

import { CardsTypeLocation } from "../../types/cardCollection";
import HeaderMinVer from "../@common/Header/HeaderMinVer";
import useGTMPage from "../@common/hooks/useGTMPage";
import useModal from "../@common/hooks/useModal";
import useScroll from "../@common/hooks/useScroll";
import Loading from "../@common/Loading";
import LoginModal from "../@common/LoginModal";
import CardSlider from "./CardSlider";
import FilterModal from "./FilterModal";
import { useCardLists } from "./hooks/useCardLists";
import { St } from "./style";

export default function CardCollectionPage() {
  useGTMPage();
  useScroll();

  const location = useLocation();
  const cardsTypeLoaction = location.state as CardsTypeLocation;
  const { cardLists, isLoading, fetchCardListsWithFilter } = useCardLists(cardsTypeLoaction);

  const { isModalOpen: isFilterModalOpen, toggleModal: toggleFilterModal } = useModal();
  const { isModalOpen: isLoginModalOpen, toggleModal: toggleLoginModal } = useModal();

  return (
    <St.MainPage>
      <HeaderMinVer />

      {!isLoading ? (
        <CardSlider
          openFilterModalHandler={toggleFilterModal}
          openLoginModalHandler={toggleLoginModal}
          cardLists={cardLists}
        />
      ) : (
        <Loading backgroundColor="transparent" />
      )}

      {isLoginModalOpen && <LoginModal closeHandler={toggleLoginModal} contents={"북마크기능인 마이피클을"} />}
      {isFilterModalOpen && (
        <FilterModal closeHandler={toggleFilterModal} fetchCardListsWithFilter={fetchCardListsWithFilter} />
      )}
    </St.MainPage>
  );
}
