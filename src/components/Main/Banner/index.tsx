import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
import Slider from "react-slick";

import { ImgBanner1, ImgBanner2, ImgBanner3, ImgBanner4 } from "../../../asset/image";
import { St } from "./style";

type BannerImage = {
  src: string;
  alt: string;
};
const bannerImage: BannerImage[] = [
  {
    src: ImgBanner1,
    alt: "지금 내게 필요한 대화주제 추천 서비스 피클 시작하기",
  },
  {
    src: ImgBanner2,
    alt: "헬로우 피클 피플",
  },
  {
    src: ImgBanner3,
    alt: "무드 피클",
  },
  {
    src: ImgBanner4,
    alt: "렛츠 피클",
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
