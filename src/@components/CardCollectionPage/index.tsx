import { useLocation } from "react-router-dom";

import { CardsTypeLocation } from "../../types/cardCollection";
import { GTM_CLASS_NAME } from "../../util/const/gtm";
import HeadlessCTAButton from "../@common/CTABtn/HeadlessCTAButton";
import Header from "../@common/Header";
import HeaderMinVer from "../@common/Header/HeaderMinVer";
import useGTMPage from "../@common/hooks/useGTMPage";
import useModal from "../@common/hooks/useModal";
import useScroll from "../@common/hooks/useScrollToTop";
import Loading from "../@common/Loading";
import LoginModal from "../@common/LoginModal";
import CardSlider from "./CardSlider";
import FilterModal from "./FilterModal";
import { useCardLists } from "./hooks/useCardLists";
import useCTAFilter from "./hooks/useCTAFilter";
import useHeaderChange from "./hooks/useHeaderChange";
import * as St from "./style";

export default function CardCollectionPage() {
  useGTMPage();
  useScroll();

  const location = useLocation();
  const cardsTypeLoaction = location.state as CardsTypeLocation;
  const { cardLists, isLoading, fetchCardListsWithFilter } = useCardLists(cardsTypeLoaction);

  const { isDefaultHeader, intersectionObserverRef: firstCardObsvRef } = useHeaderChange();
  const { isVisibleCTAButton, intersectionObserverRef: lastCardObsvRef } = useCTAFilter();

  const { isModalOpen: isFilterModalOpen, toggleModal: toggleFilterModal } = useModal();
  const { isModalOpen: isLoginModalOpen, toggleModal: toggleLoginModal } = useModal();

  return (
    <St.MainPage>
      {isDefaultHeader ? <Header /> : <HeaderMinVer />}

      {!isLoading ? (
        <CardSlider
          openLoginModalHandler={toggleLoginModal}
          cardLists={cardLists}
          firstCardObsvRef={firstCardObsvRef}
          lastCardObsvRef={lastCardObsvRef}
        />
      ) : (
        <Loading backgroundColor="transparent" />
      )}

      {isVisibleCTAButton && (
        <HeadlessCTAButton
          aria-label="카드 추천 필터"
          role="dialog"
          className={GTM_CLASS_NAME.cardRecommendFilter}
          onClick={toggleFilterModal}>
          필터 설정하기
        </HeadlessCTAButton>
      )}

      {isLoginModalOpen && <LoginModal closeHandler={toggleLoginModal} contents={"북마크 기능인 마이피클을"} />}
      {isFilterModalOpen && (
        <FilterModal closeHandler={toggleFilterModal} fetchCardListsWithFilter={fetchCardListsWithFilter} />
      )}
    </St.MainPage>
  );
}
