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

// 1. 카테고리 :: /categories/:categoryId :: { type: "category", categoryId: "62cbb7d8a8c54f168a6ddfe1"}
// 2. 베스트 카드 :: /cards/best :: { type: "best" }
// 3. all 전체 카드 :: /categories/cards :: { type: "all" }
// 4. 마이 피클 :: /users/bookmarks :: { type: "bookmark" }
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
        cardLists={cardLists}
      />

      {isLoginModalOpen && <LoginModal closeHandler={toggleLoginModal} contents={"북마크기능인 마이피클을"} />}
      {isFilterModalOpen && (
        <FilterModal closeHandler={toggleFilterModal} fetchCardListsWithFilter={fetchCardListsWithFilter} />
      )}
    </St.MainPage>
  );
}
