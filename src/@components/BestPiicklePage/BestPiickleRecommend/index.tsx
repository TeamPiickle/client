import { CardList, LocationType } from "../../../types/cardCollection";
import { HeadingTitle } from "../../../util/main/headingTitles";
import HeadingTitleContainer from "../../@common/HeadingTitleContainer";
import { useRecentlyBookmarked } from "../../@common/hooks/useRecentlyBookmarked";
import { useCardsByGender } from "./hooks/useCardsByGender";
import RecommendItem from "./RecommendItem";
import * as St from "./style";

const recommendTitles: HeadingTitle = {
  title: "이런 베스트 피클은 어때요?",
  content: "",
};

export type recommendListType = {
  subtitle: string;
  cards?: CardList[];
  locationType: LocationType;
  gtmClassName: string;
};

export default function BestPiickleRecommend() {
  const { recentlyBookmarkedCards } = useRecentlyBookmarked();
  const { genderBookmarkedCards: femaleBookmarkedCards } = useCardsByGender("여");
  const { genderBookmarkedCards: maleBookmarkedCards } = useCardsByGender("남");

  const recommendLists: recommendListType[] = [
    {
      subtitle: "💖 유저들이 가장 최근에 북마크한 대화주제",
      cards: recentlyBookmarkedCards,
      locationType: LocationType.RECENT,
      gtmClassName: "bestRecentBookmark",
    },
    {
      subtitle: "👩 여성이 북마크한 대화주제들",
      cards: femaleBookmarkedCards,
      locationType: LocationType.FEMALE,
      gtmClassName: "bestFemaleBookmark",
    },
    {
      subtitle: "👱‍♂️ 남성이 북마크한 대화주제를 확인해보세요",
      cards: maleBookmarkedCards,
      locationType: LocationType.MALE,
      gtmClassName: "bestMaleBookmark",
    },
  ];

  return (
    <St.RecommendContainer>
      <HeadingTitleContainer headingTitles={recommendTitles} paddingVerticalValue={0} />

      {recommendLists.map((recommendList, idx) => (
        <RecommendItem recommendList={recommendList} key={idx} />
      ))}
    </St.RecommendContainer>
  );
}
