import { Pagination, SwiperOptions } from "swiper";

export default function useCardSwiper() {
  const swiperSettings: SwiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 8,
    direction: "vertical",
    modules: [Pagination],
  };

  return { swiperSettings };
}
