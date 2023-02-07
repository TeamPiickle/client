import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { sliderIdxState } from "../../../core/atom/slider";
import { routePaths } from "../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import { St } from "./style";

export default function CTABtn() {
  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const navigate = useNavigate();

  const clickCTABtn = () => {
    navigate(routePaths.CardCollection, { state: { type: "all" } });
    setSliderIdx(0);
  };

  return (
    <St.Button type="button" onClick={clickCTABtn} className={GTM_CLASS_NAME.mainCTABtn}>
      대화주제 추천 바로가기
    </St.Button>
  );
}
