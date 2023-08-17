import { useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Pagination } from "swiper";
import { SwiperProps, SwiperRef } from "swiper/react";

import { isSliderDownState, sliderIdxState } from "../../../core/atom/slider";

export type autoSlideType = {
  slideDown: () => void;
  slideUp: () => void;
};

export default function useCardSwiper() {
  const [sliderIdx, setSliderIdx] = useRecoilState(sliderIdxState);
  const setIsSliderDown = useSetRecoilState(isSliderDownState);
  const swiperRef = useRef<SwiperRef>(null);

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

  const autoSlide: autoSlideType = {
    slideDown: () => swiperRef.current?.swiper.slideTo(sliderIdx + 1),
    slideUp: () => swiperRef.current?.swiper.slideTo(sliderIdx),
  };

  return { swiperSettings, swiperRef, autoSlide };
}
