import { LocationType } from "../../../types/cardCollection";
import { HeadingTitle } from "../../../util/main/headingTitles";
import HeadingTitleContainer from "../../@common/HeadingTitleContainer";
import useNavigateCardCollection, {
  NavigateCardCollectionBookMarkType,
} from "../../@common/hooks/useNavigateCardCollection";
import { useBestPiickle } from "../../MainPage/hooks/useBestPiickle";
import RankItem from "./RankItem";
import * as St from "./style";

const rankTitles: HeadingTitle = {
  title: "베스트 피클 랭킹",
  content: "가장 많이 북마크한 대화주제를 확인해보세요",
};

export default function BestPiickleRank() {
  const { bestPiickle } = useBestPiickle();

  const navigateRankCollection = useNavigateCardCollection(LocationType.BEST) as NavigateCardCollectionBookMarkType;
  return (
    <St.RankContainer>
      {/* todo : rankitem id 수정*/}
      <HeadingTitleContainer headingTitles={rankTitles} paddingVerticalValue={1.6} />
      {bestPiickle &&
        [...bestPiickle.data]
          .slice(0, 8)
          .map(({ _id, content, isBookmark }, idx) => (
            <RankItem key={_id} cardId={_id} content={content} rank={idx} isBookmark={isBookmark} />
          ))}
      <St.ButtonWrapper>
        <St.ContinueButton onClick={() => navigateRankCollection(8)}>이어서 베스트 피클 카드 보기</St.ContinueButton>
      </St.ButtonWrapper>
    </St.RankContainer>
  );
}
