import { useRecoilValue } from "recoil";

import { isSliderDownState } from "../../core/atom/slider";
import { GTM_CLASS_NAME } from "../../util/const/gtm";
import HeadlessCTAButton from "../@common/CTABtn/HeadlessCTAButton";
import Header from "../@common/Header";
import HeaderMinVer from "../@common/Header/HeaderMinVer";
import useGTMPage from "../@common/hooks/useGTMPage";
import useModal from "../@common/hooks/useModal";
import useScroll from "../@common/hooks/useScrollToTop";
import LoginModal from "../@common/LoginModal";
import SuspenseBoundary from "../@common/SuspenseBoundary";
import useToast from "../@common/Toast/hooks/useToast";
import Toast from "../@common/Toast/ToastProvider";
import MenuModal from "./Card/MenuModal";
import CardSlider from "./CardSlider";
import FilterModal from "./FilterModal";
import { useCardLists } from "./hooks/useCardLists";
import useCTAFilter from "./hooks/useCTAFilter";
import * as St from "./style";

export default function CardCollectionPage() {
  return (
    <SuspenseBoundary>
      <CardCollectionContent />
    </SuspenseBoundary>
  );
}

function CardCollectionContent() {
  useGTMPage();
  useScroll();

  const { cardLists, fetchCardListsWithFilter } = useCardLists();

  const { isVisibleCTAButton, intersectionObserverRef: lastCardObsvRef } = useCTAFilter();

  const { isModalOpen: isFilterModalOpen, toggleModal: toggleFilterModal } = useModal();
  const { isModalOpen: isLoginModalOpen, toggleModal: toggleLoginModal } = useModal();
  const { isModalOpen: isMenuModalOpen, toggleModal: toggleMenuModal } = useModal();

  const isSliderDown = useRecoilValue(isSliderDownState);

  return (
    <St.MainPage>
      {isSliderDown ? <HeaderMinVer /> : <Header />}

      <CardSlider
        toggleMenuModal={toggleMenuModal}
        openLoginModalHandler={toggleLoginModal}
        cardLists={cardLists}
        lastCardObsvRef={lastCardObsvRef}
      />

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

      {isMenuModalOpen && <MenuModal closeHandler={toggleMenuModal} />}
    </St.MainPage>
  );
}
