import BestPiickleCard from "../../../@common/BestPiickleCard";
import useDraggingContainer from "../../../@common/hooks/useDraggingContainer";
import { useBestPiickle } from "../../../MainPage/hooks/useBestPiickle";
import * as St from "./style";

interface RecommendProps {
  recommendType: string;
}

export default function RecommendItem(props: RecommendProps) {
  const { recommendType } = props;
  const { bestPiickle } = useBestPiickle();
  const { scrollableContainerProps, isDragging } = useDraggingContainer();
  return (
    <St.RecommemdItemContainer>
      <St.RecommendType>{recommendType}</St.RecommendType>

      {bestPiickle && (
        <St.SliderWrapper {...scrollableContainerProps}>
          {bestPiickle &&
            bestPiickle.data.slice(0, 4).map((bestPiickle, idx) => {
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
