import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
import Slider from "react-slick";

import { St } from "./style";

type BannerImage = {
  src: string;
  alt: string;
};
const BannerImage: BannerImage[] = [
  {
    src: "banner1",
    alt: "배너1",
  },
  {
    src: "banner2",
    alt: "배너2",
  },
  {
    src: "banner3",
    alt: "배너3",
  },
  {
    src: "banner4",
    alt: "배너4",
  },
  {
    src: "banner5",
    alt: "배너5",
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
        <St.CurrentPage>{currentSlide + 1} / 5</St.CurrentPage>
      </St.ContentsPages>
    </St.BannerSlider>
  );
}
