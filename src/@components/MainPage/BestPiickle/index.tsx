import { headingTitles } from "../../../util/main/headingTitles";
import HeadingTitleContainer from "../../@common/HeadingTitleContainer";
import Loading from "../../@common/Loading";
import { useBestPiickle } from "../hooks/useBestPiickle";
import BestPiickleCard from "./BestPiickleCard";
import St from "./style";

export default function BestPiickle() {
  const { bestPiickle } = useBestPiickle();

  return (
    <St.Root>
      <HeadingTitleContainer headingTitles={headingTitles[0]} />

      {bestPiickle ? (
        <St.SliderWrapper>
          {bestPiickle &&
            bestPiickle.data.slice(0, 5).map((bestPiickle, idx) => {
              return <BestPiickleCard key={bestPiickle._id} bestPiickle={bestPiickle} idx={idx} />;
            })}
        </St.SliderWrapper>
      ) : (
        <Loading backgroundColor="white" />
      )}
    </St.Root>
  );
}
