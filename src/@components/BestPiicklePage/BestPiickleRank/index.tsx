import { LocationType } from "../../../types/cardCollection";
import { HeadingTitle } from "../../../util/main/headingTitles";
import HeadingTitleContainer from "../../@common/HeadingTitleContainer";
import useModal from "../../@common/hooks/useModal";
import useNavigateCardCollection, {
  NavigateCardCollectionBookMarkType,
} from "../../@common/hooks/useNavigateCardCollection";
import LoginModal from "../../@common/LoginModal";
import { useBestPiickle } from "../../MainPage/hooks/useBestPiickle";
import RankItem from "./RankItem";
import * as St from "./style";

const rankTitles: HeadingTitle = {
  title: "베스트 피클 랭킹",
  content: "가장 많이 북마크한 대화주제를 확인해보세요",
};

const BEST_PIICKLE_TOTAL_COUNT = 8;

export default function BestPiickleRank() {
  const { bestPiickle } = useBestPiickle();
  const { isModalOpen: isLoginModalOpen, toggleModal: toggleLoginModal } = useModal();
  const navigateRankCollection = useNavigateCardCollection(LocationType.BEST) as NavigateCardCollectionBookMarkType;
  return (
    <St.RankContainer>
      <HeadingTitleContainer headingTitles={rankTitles} paddingVerticalValue={1.6} />
      {bestPiickle &&
        [...bestPiickle.data]
          .slice(0, BEST_PIICKLE_TOTAL_COUNT)
          .map(({ _id, content, isBookmark }, idx) => (
            <RankItem
              key={_id}
              cardId={_id}
              content={content}
              rank={idx}
              isBookmark={isBookmark}
              openLoginModalHandler={toggleLoginModal}
            />
          ))}
      <St.ButtonWrapper>
        <St.ContinueButton onClick={() => navigateRankCollection(8)}>이어서 베스트 피클 카드 보기</St.ContinueButton>
      </St.ButtonWrapper>

      {isLoginModalOpen && <LoginModal closeHandler={toggleLoginModal} contents={"북마크 기능인 마이피클을"} />}
    </St.RankContainer>
  );
}
