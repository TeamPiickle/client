import { routePaths } from "../../../core/routes/path";
import { LocationType } from "../../../types/cardCollection";
import { headingTitles } from "../../../util/main/headingTitles";
import BestPiickleCard from "../../@common/BestPiickleCard";
import HeadingTitleContainer from "../../@common/HeadingTitleContainer";
import useDraggingContainer from "../../@common/hooks/useDraggingContainer";
import { useBestPiickle } from "../hooks/useBestPiickle";
import St from "./style";

export default function BestPiickle() {
  const { bestPiickle } = useBestPiickle();
  const { scrollableContainerProps, isDragging } = useDraggingContainer();

  return (
    <St.Root>
      <HeadingTitleContainer
        headingTitles={headingTitles[0]}
        paddingVerticalValue={4}
        routePath={routePaths.BestPiicklePage}
      />

      {bestPiickle && (
        <St.SliderWrapper {...scrollableContainerProps}>
          {bestPiickle &&
            bestPiickle.data.slice(0, 5).map((bestPiickle, idx) => {
              return (
                <BestPiickleCard
                  key={bestPiickle._id}
                  bestPiickle={bestPiickle}
                  idx={idx}
                  canNavigate={!isDragging}
                  locationType={LocationType.BEST}
                />
              );
            })}
        </St.SliderWrapper>
      )}
    </St.Root>
  );
}
