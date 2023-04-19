import { useState } from "react";
import { SwiperOptions } from "swiper";

export default function useBannerSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const swiperSettings: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    on: {
      slideChange: (swiper) => setCurrentSlide(swiper.realIndex),
    },
  };

  return { swiperSettings, currentSlide };
}
