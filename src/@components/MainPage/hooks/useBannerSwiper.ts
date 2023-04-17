import { SwiperOptions } from "swiper";

export default function useBannerSwiper() {
  const swiperSettings: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
  };

  return { swiperSettings };
}
