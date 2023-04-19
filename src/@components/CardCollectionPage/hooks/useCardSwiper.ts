import { useRecoilState } from "recoil";
import { Pagination, SwiperOptions } from "swiper";

import { sliderIdxState } from "../../../core/atom/slider";

export default function useCardSwiper() {
  const [sliderIdx, setSliderIdx] = useRecoilState(sliderIdxState);

  const swiperSettings: SwiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 8,
    direction: "vertical",
    modules: [Pagination],
    initialSlide: sliderIdx,
    on: {
      slideChange: (swiper) => setSliderIdx(swiper.activeIndex),
    },
  };

  return { swiperSettings };
}
