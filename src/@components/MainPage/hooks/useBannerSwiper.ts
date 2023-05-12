import { useState } from "react";
import { SwiperProps } from "swiper/react";

export default function useBannerSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const swiperSettings: SwiperProps = {
    slidesPerView: 1,
    loop: true,
    onSlideChange: (swiper) => setCurrentSlide(swiper.realIndex),
  };

  return { swiperSettings, currentSlide };
}
