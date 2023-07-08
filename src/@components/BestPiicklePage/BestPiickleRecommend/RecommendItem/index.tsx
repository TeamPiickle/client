import { LocationType } from "../../../../types/cardCollection";
import BestPiickleCard from "../../../@common/BestPiickleCard";
import useDraggingContainer from "../../../@common/hooks/useDraggingContainer";
import { useCardsByGender } from "../hooks/useCardsByGender";
import { useRecentlyBookmarked } from "../hooks/useRecentlyBookmarked";
import * as St from "./style";

interface RecommendProps {
  recommendType: string;
}

export default function RecommendItem(props: RecommendProps) {
  const { recommendType } = props;
  const { recentlyBookmarkedCards } = useRecentlyBookmarked();
  const maleBookmarkedCards = useCardsByGender("남");
  const femaleBookmarkedCards = useCardsByGender("여");
  const { scrollableContainerProps, isDragging } = useDraggingContainer();

  return (
    <St.RecommemdItemContainer>
      <St.RecommendType>{recommendType}</St.RecommendType>

      {recentlyBookmarkedCards && (
        <St.SliderWrapper {...scrollableContainerProps}>
          {recentlyBookmarkedCards.slice(0, 4).map((recenltyBookmarked, idx) => {
            return (
              <BestPiickleCard
                key={recenltyBookmarked._id}
                bestPiickle={recenltyBookmarked}
                idx={idx}
                canNavigate={!isDragging}
                isLast={idx !== 3}
                locationType={LocationType.RECENT}
              />
            );
          })}
        </St.SliderWrapper>
      )}
    </St.RecommemdItemContainer>
  );
}
