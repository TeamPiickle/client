import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
import { Helmet } from "react-helmet";
import Slider from "react-slick";

import { bannerImage } from "../../../util/main/banner";
import { St } from "./style";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange(currentSlide: number) {
      setCurrentSlide(currentSlide);
    },
  };

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={bannerImage[0].src} />
      </Helmet>
      <St.BannerSlider>
        <Slider {...settings}>
          {bannerImage.map((img, index) => (
            <picture key={index}>
              <source srcSet={img.src} type="image/webp" />
              <St.ImageWrapper src={img.subSrc} alt={img.alt} loading="lazy" />
            </picture>
          ))}
        </Slider>

        <St.ContentsPages>
          <St.CurrentPage>
            {currentSlide + 1} / {bannerImage.length}
          </St.CurrentPage>
        </St.ContentsPages>
      </St.BannerSlider>
    </>
  );
}
