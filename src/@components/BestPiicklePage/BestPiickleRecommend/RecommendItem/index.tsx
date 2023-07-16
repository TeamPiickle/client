import BestPiickleCard from "../../../@common/BestPiickleCard";
import useDraggingContainer from "../../../@common/hooks/useDraggingContainer";
import { recommendListType } from "..";
import * as St from "./style";

interface RecommendProps {
  recommendList: recommendListType;
}

export default function RecommendItem(props: RecommendProps) {
  const { recommendList } = props;
  const { scrollableContainerProps, isDragging } = useDraggingContainer();

  return (
    <St.RecommemdItemContainer>
      <St.RecommendType>{recommendList.subtitle}</St.RecommendType>

      {recommendList.cards && (
        <St.SliderWrapper {...scrollableContainerProps}>
          {recommendList.cards.slice(0, 4).map((cards, idx) => {
            return (
              <BestPiickleCard
                key={cards._id}
                bestPiickle={cards}
                idx={idx}
                canNavigate={!isDragging}
                isLast={idx === 3}
                locationType={recommendList.locationType}
              />
            );
          })}
        </St.SliderWrapper>
      )}
    </St.RecommemdItemContainer>
  );
}
