import { useRecoilValue } from "recoil";

import { IcEventArrow } from "../../asset/icon";
import { isSliderDownState } from "../../core/atom/slider";
import { LocationType } from "../../types/cardCollection";
import { GTM_CLASS_NAME } from "../../util/const/gtm";
import HeadlessCTAButton from "../@common/CTABtn/HeadlessCTAButton";
import Header from "../@common/Header";
import EventHeader from "../@common/Header/EventHeader";
import HeaderMinVer from "../@common/Header/HeaderMinVer";
import useCardType from "../@common/hooks/useCardType";
import useGTMPage from "../@common/hooks/useGTMPage";
import useModal from "../@common/hooks/useModal";
import useScroll from "../@common/hooks/useScrollToTop";
import SuspenseBoundary from "../@common/SuspenseBoundary";
import CardSlider from "./CardSlider";
import CoachMark from "./CoachMark";
import FilterModal from "./FilterModal";
import { useCardLists } from "./hooks/useCardLists";
import useCoachMark from "./hooks/useCoachMark";
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

  const { isOpened: isCoachMarkOpen, handleCloseCoachMark: toggleCoachMark } = useCoachMark();

  const { cardType } = useCardType();

  const isSliderDown = useRecoilValue(isSliderDownState);

  if (cardType === LocationType.EVENT) {
    return (
      <St.MainPage>
        <EventHeader />
        <CardSlider cardLists={cardLists} lastCardObsvRef={lastCardObsvRef} />

        {isVisibleCTAButton ? (
          <HeadlessCTAButton onClick={() => console.log("경품 응모하러가기")}>경품 응모하러 가기</HeadlessCTAButton>
        ) : (
          <St.EventCoach>
            <St.EventCoachMessage>
              자 이제 시작해볼까요?
              <br />
              다음 카드로 넘겨주세요!
            </St.EventCoachMessage>
            <IcEventArrow />
          </St.EventCoach>
        )}
      </St.MainPage>
    );
  }

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
