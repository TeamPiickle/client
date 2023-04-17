import "swiper/swiper.css";

import { useState } from "react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";

import { bannerImage } from "../../../util/main/banner";
import useBannerSwiper from "../hooks/useBannerSwiper";
import { St } from "./style";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { swiperSettings } = useBannerSwiper();

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={bannerImage[0].src} />
      </Helmet>
      <St.BannerSlider>
        <Swiper {...swiperSettings} onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}>
          {bannerImage.map((img, index) => (
            <SwiperSlide key={index}>
              <picture>
                <source srcSet={img.src} type="image/webp" />
                <St.ImageWrapper src={img.subSrc} alt={img.alt} loading="lazy" />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>

        <St.ContentsPages>
          <St.CurrentPage>
            {currentSlide + 1} / {bannerImage.length}
          </St.CurrentPage>
        </St.ContentsPages>
      </St.BannerSlider>
    </>
  );
}
