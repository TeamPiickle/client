import { useRecoilState, useSetRecoilState } from "recoil";
import { Pagination } from "swiper";
import { SwiperProps } from "swiper/react";

import { isSliderDownState, sliderIdxState } from "../../../core/atom/slider";

export default function useCardSwiper() {
  const [sliderIdx, setSliderIdx] = useRecoilState(sliderIdxState);
  const setIsSliderDown = useSetRecoilState(isSliderDownState);

  const swiperSettings: SwiperProps = {
    slidesPerView: "auto",
    spaceBetween: 8,
    direction: "vertical",
    modules: [Pagination],
    initialSlide: sliderIdx,
    onSlideChange: (swiper) => {
      setIsSliderDown(swiper.activeIndex > sliderIdx);
      setSliderIdx(swiper.activeIndex);
    },
  };

  return { swiperSettings };
}
