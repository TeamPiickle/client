import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from "react";
import Slider from "react-slick";

import { St } from "./style";

type BannerImage = {
  src: string;
  alt: string;
};
const BannerImage: BannerImage[] = [
  {
    src: "Contact",
    alt: "Contact1",
  },
  {
    src: "Contact",
    alt: "Contact2",
  },
  {
    src: "Contact",
    alt: "Contact3",
  },
  {
    src: "Contact",
    alt: "Contact4",
  },
  {
    src: "Contact",
    alt: "Contact5",
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
