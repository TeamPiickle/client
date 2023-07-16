import { HeadingTitle } from "../../../util/main/headingTitles";
import HeadingTitleContainer from "../../@common/HeadingTitleContainer";
import RankItem from "./RankItem";
import * as St from "./style";

const rankTitles: HeadingTitle = {
  title: "베스트 피클 랭킹",
  content: "가장 많이 북마크한 대화주제를 확인해보세요",
};

export default function BestPiickleRank() {
  return (
    <St.RankContainer>
      {/* todo : rankitem id 수정*/}
      <HeadingTitleContainer headingTitles={rankTitles} paddingVerticalValue={1.6} />
      <RankItem cardId="1" content="상대방의첫인상을기억하나요저는몰라요그냥해그냥해그냥해" rank={1} />
      <RankItem cardId="1" content="상대방의 첫인상을 기억하나요?" rank={2} />
      <RankItem cardId="1" content="상대방의 첫인상을 기억하나요?" rank={3} />
      <RankItem cardId="1" content="상대방의 첫인상을 기억하나요?" rank={4} />
      <RankItem cardId="1" content="상대방의 첫인상을 기억하나요?" rank={5} />
      <RankItem cardId="1" content="상대방의 첫인상을 기억하나요?" rank={6} />
      <RankItem cardId="1" content="상대방의 첫인상을 기억하나요?" rank={7} />
      <RankItem cardId="1" content="상대방의 첫인상을 기억하나요?" rank={8} />
      <St.ButtonWrapper>
        <St.ContinueButton>이어서 베스트 피클 카드 보기</St.ContinueButton>
      </St.ButtonWrapper>
    </St.RankContainer>
  );
}
