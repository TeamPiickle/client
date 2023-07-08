import { HeadingTitle } from "../../../util/main/headingTitles";
import HeadingTitleContainer from "../../@common/HeadingTitleContainer";
import RecommendItem from "./RecommendItem";
import * as St from "./style";

const recommendTitles: HeadingTitle = {
  title: "이런 베스트 피클은 어때요?",
  content: "",
};

export default function BestPiickleRecommend() {
  return (
    <St.RecommendContainer>
      <HeadingTitleContainer headingTitles={recommendTitles} paddingVerticalValue={0} />

      {[
        "💖 유저들이 가장 최근에 북마크한 대화주제",
        "👩 여성이 북마크한 대화주제들",
        "👱‍♂️ 남성이 북마크한 대화주제를 확인해보세요",
      ].map((recommendType, idx) => (
        <RecommendItem recommendType={recommendType} key={idx} />
      ))}
    </St.RecommendContainer>
  );
}
