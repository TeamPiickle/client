import { useRecoilValue } from "recoil";

import { isSliderDownState } from "../../core/atom/slider";
import { GTM_CLASS_NAME } from "../../util/const/gtm";
import HeadlessCTAButton from "../@common/CTABtn/HeadlessCTAButton";
import Header from "../@common/Header";
import HeaderMinVer from "../@common/Header/HeaderMinVer";
import useGTMPage from "../@common/hooks/useGTMPage";
import useModal from "../@common/hooks/useModal";
import useModalPopup from "../@common/hooks/useModalPopup";
import useScroll from "../@common/hooks/useScrollToTop";
import SuspenseBoundary from "../@common/SuspenseBoundary";
import CardSlider from "./CardSlider";
import CoachMark from "./CoachMark";
import FilterModal from "./FilterModal";
import { useCardLists } from "./hooks/useCardLists";
import useCTAFilter from "./hooks/useCTAFilter";
import * as St from "./style";
const COACH_MARK_LOCAL_KEY = "coach-mark-shown";

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

  const { isOpened: isCoachMarkOpen, handleCloseModal: toggleCoachMark } = useModalPopup(
    localStorage,
    COACH_MARK_LOCAL_KEY,
  );

  const isSliderDown = useRecoilValue(isSliderDownState);

  return (
    <St.MainPage>
      {isSliderDown ? <HeaderMinVer /> : <Header />}

      <CardSlider cardLists={cardLists} lastCardObsvRef={lastCardObsvRef} />

      {isVisibleCTAButton && (
        <HeadlessCTAButton
          aria-label="카드 추천 필터"
          role="dialog"
          className={GTM_CLASS_NAME.cardRecommendFilter}
          onClick={toggleFilterModal}>
          필터 설정하기
        </HeadlessCTAButton>
      )}
      {isCoachMarkOpen && <CoachMark closeHandler={toggleCoachMark} />}
      {isFilterModalOpen && (
        <FilterModal closeHandler={toggleFilterModal} fetchCardListsWithFilter={fetchCardListsWithFilter} />
      )}
    </St.MainPage>
  );
}
