import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { sliderIdxState } from "../../../core/atom/slider";
import { St } from "./style";

export default function CTABtn() {
  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const navigate = useNavigate();

  const clickCTABtn = () => {
    navigate("/card-collection", { state: { type: "all" } });
    setSliderIdx(0);
  };

  return (
    <St.Button type="button" onClick={clickCTABtn}>
      대화주제 추천 바로가기
    </St.Button>
  );
}
