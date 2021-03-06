import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { sliderIdxState } from "../../../../core/atom/slider";
import { St } from "./style";

interface BestPiickleCardProps {
  bestPiickle: {
    _id: string;
    tags: string[];
    content: string;
  };
  idx: number;
}

export default function BestPiickleCard(props: BestPiickleCardProps) {
  const { bestPiickle, idx } = props;
  const { content, tags } = bestPiickle;

  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const navigation = useNavigate();

  return (
    <St.BestPiickleCard>
      <St.TagsWrapper>
        {tags.map((tag: string, i: number) => {
          return <St.Tag key={i}>{tag}</St.Tag>;
        })}
      </St.TagsWrapper>
      <St.Content>{content}</St.Content>
      <St.PickButtonWrapper>
        <St.PickButton
          type="button"
          onClick={() => {
            navigation("/card-collection", { state: { type: "best" } });
            setSliderIdx(idx);
          }}>
          카드 보기
        </St.PickButton>
      </St.PickButtonWrapper>
    </St.BestPiickleCard>
  );
}
