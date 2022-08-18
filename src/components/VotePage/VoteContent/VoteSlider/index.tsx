import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useRef } from "react";
import Slider from "react-slick";
import { useRecoilState, useSetRecoilState } from "recoil";

import { useBallotLists } from "../../../../core/api/main";
import { sliderIdxState } from "../../../../core/atom/slider";
import VoteContent from "../../VoteContent";
import { St } from "./style";

export default function VoteSlider() {
  // const { ballotLists } = useBallotLists();

  const [sliderIdx, setSliderIdx] = useRecoilState(sliderIdxState);
  const sliderRef = useRef<Slider | null>(null);

  const sliderSettings = {
    className: "center",
    centerMode: true,
    arrows: false,
    dots: false,
    infinite: false,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: sliderIdx,
    afterChange: (idx: number) => setSliderIdx(idx),
  };

  return (
    <St.Wrapper>
      <Slider {...sliderSettings} ref={sliderRef}>
        <VoteContent />
        <VoteContent />
        <VoteContent />
      </Slider>
    </St.Wrapper>
  );
}
