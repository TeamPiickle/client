import BestPiickleCard from "../../../@common/BestPiickleCard";
import useDraggingContainer from "../../../@common/hooks/useDraggingContainer";
import { recommendListType } from "..";
import * as St from "./style";

interface RecommendProps {
  recommendList: recommendListType;
}

const BEST_PIICKLE_TOTAL_COUNT = 4;

export default function RecommendItem(props: RecommendProps) {
  const { recommendList } = props;
  const { scrollableContainerProps, isDragging } = useDraggingContainer();

  return (
    <St.RecommemdItemContainer>
      <St.RecommendType>{recommendList.subtitle}</St.RecommendType>

      {recommendList.cards && (
        <St.SliderWrapper {...scrollableContainerProps}>
          {recommendList.cards.slice(0, BEST_PIICKLE_TOTAL_COUNT).map((cards, idx) => {
            return (
              <BestPiickleCard
                key={cards._id}
                bestPiickle={cards}
                idx={idx}
                canNavigate={!isDragging}
                isLast={
                  recommendList.cards &&
                  idx === (recommendList.cards.length > BEST_PIICKLE_TOTAL_COUNT && BEST_PIICKLE_TOTAL_COUNT - 1)
                }
                locationType={recommendList.locationType}
                gtmClassName={recommendList.gtmClassName}
              />
            );
          })}
        </St.SliderWrapper>
      )}
    </St.RecommemdItemContainer>
  );
}
