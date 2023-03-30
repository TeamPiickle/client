import { headingTitles } from "../../../util/main/headingTitles";
import HeadingTitleContainer from "../../@common/HeadingTitleContainer";
import useScrollableContainer from "../../@common/hooks/useScrollableContainer";
import Loading from "../../@common/Loading";
import { useBestPiickle } from "../hooks/useBestPiickle";
import BestPiickleCard from "./BestPiickleCard";
import St from "./style";

export default function BestPiickle() {
  const { bestPiickle } = useBestPiickle();
  const { scrollableContainerProps, isDragging } = useScrollableContainer();

  return (
    <St.Root>
      <HeadingTitleContainer headingTitles={headingTitles[0]} />

      {bestPiickle ? (
        <St.SliderWrapper {...scrollableContainerProps}>
          {bestPiickle &&
            bestPiickle.data.slice(0, 5).map((bestPiickle, idx) => {
              return (
                <BestPiickleCard key={bestPiickle._id} bestPiickle={bestPiickle} idx={idx} canNavigate={!isDragging} />
              );
            })}
        </St.SliderWrapper>
      ) : (
        <Loading backgroundColor="white" />
      )}
    </St.Root>
  );
}
