import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
import Slider from "react-slick";

import { bannerImage } from "../../../core/main/banner";
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
    <St.BannerSlider>
      <Slider {...settings}>
        {bannerImage.map((img, index) => (
          <St.ImageWrapper key={index} src={img.src} alt={img.alt} />
        ))}
      </Slider>

      <St.ContentsPages>
        <St.CurrentPage>
          {currentSlide + 1} / {bannerImage.length}
        </St.CurrentPage>
      </St.ContentsPages>
    </St.BannerSlider>
  );
}
