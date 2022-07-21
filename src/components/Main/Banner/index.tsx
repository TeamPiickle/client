import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
import Slider from "react-slick";

import { ImgBanner1, ImgBanner2, ImgBanner4 } from "../../../asset/image";
import { St } from "./style";

type BannerImage = {
  src: string;
  alt: string;
};
const BannerImage: BannerImage[] = [
  {
    src: ImgBanner1,
    alt: "피클 소개 이미지",
  },
  {
    src: ImgBanner2,
    alt: "피클 소개 이미지",
  },
  {
    src: "ImgBanner3",
    alt: "피클 소개 이미지",
  },
  {
    src: ImgBanner4,
    alt: "피클 소개 이미지",
  },
];

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
        {BannerImage.map((img, index) => (
          <St.ImageWrapper key={index} src={img.src} alt={img.alt} />
        ))}
      </Slider>

      <St.ContentsPages>
        <St.CurrentPage>{currentSlide + 1} / 4</St.CurrentPage>
      </St.ContentsPages>
    </St.BannerSlider>
  );
}
