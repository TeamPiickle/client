import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { sliderIdxState } from "../../../../core/atom/slider";
import { routePaths } from "../../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import St from "./style";

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
  const GTM_IDX_KEY = `mainBestPiickle${idx + 1}`;

  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const navigation = useNavigate();

  return (
    <St.BestPiickleCard>
      <St.TagsWrapper>
        {tags.map((tag: string, i: number) => {
          return <St.Tag key={i}>{tag.slice(1)}</St.Tag>;
        })}
      </St.TagsWrapper>
      <St.Content>{content}</St.Content>
      <St.PickButtonWrapper
        type="button"
        className={GTM_CLASS_NAME[GTM_IDX_KEY]}
        onClick={() => {
          navigation(routePaths.CardCollection, { state: { type: "best" } });
          setSliderIdx(idx);
        }}>
        카드 보기``
      </St.PickButtonWrapper>
    </St.BestPiickleCard>
  );
}
