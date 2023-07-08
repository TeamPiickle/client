import BestPiickleCard from "../../../@common/BestPiickleCard";
import useDraggingContainer from "../../../@common/hooks/useDraggingContainer";
import { useRecentlyBookmarked } from "../hooks/useRecentlyBookmarked";
import * as St from "./style";

interface RecommendProps {
  recommendType: string;
}

export default function RecommendItem(props: RecommendProps) {
  const { recommendType } = props;
  const { recentlyBookmarkedCards } = useRecentlyBookmarked();
  const { scrollableContainerProps, isDragging } = useDraggingContainer();

  return (
    <St.RecommemdItemContainer>
      <St.RecommendType>{recommendType}</St.RecommendType>

      {recentlyBookmarkedCards && (
        <St.SliderWrapper {...scrollableContainerProps}>
          {recentlyBookmarkedCards.slice(0, 4).map((bestPiickle, idx) => {
            return (
              <BestPiickleCard
                key={bestPiickle._id}
                bestPiickle={bestPiickle}
                idx={idx}
                canNavigate={!isDragging}
                isLast={idx !== 3}
              />
            );
          })}
        </St.SliderWrapper>
      )}
    </St.RecommemdItemContainer>
  );
}
