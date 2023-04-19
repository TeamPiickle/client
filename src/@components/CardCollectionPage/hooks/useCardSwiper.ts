import { useRecoilState } from "recoil";
import { Pagination } from "swiper";
import { SwiperProps } from "swiper/react";

import { sliderIdxState } from "../../../core/atom/slider";

export default function useCardSwiper() {
  const [sliderIdx, setSliderIdx] = useRecoilState(sliderIdxState);

  const swiperSettings: SwiperProps = {
    slidesPerView: "auto",
    spaceBetween: 8,
    direction: "vertical",
    modules: [Pagination],
    initialSlide: sliderIdx,
    onSlideChange: (swiper) => setSliderIdx(swiper.activeIndex),
  };

  return { swiperSettings };
}
