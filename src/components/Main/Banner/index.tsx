import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from "react";
import Slider from "react-slick";

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
        <St.ContentsWrapper>
          <St.Contents>
            브랜딩이든 설명이든
            <br />
            뭔가 대화 주제 추천 서비스다!
            <br />
            피클 - 대화주제 추천 서비스입니다.
          </St.Contents>
        </St.ContentsWrapper>
        <St.ContentsWrapper>
          <St.Contents>
            브랜딩이든 설명이든
            <br />
            뭔가 대화 주제 추천 서비스다!
            <br />
            피클 - 대화주제 추천 서비스입니다.
          </St.Contents>
        </St.ContentsWrapper>
        <St.ContentsWrapper>
          <St.Contents>
            브랜딩이든 설명이든
            <br />
            뭔가 대화 주제 추천 서비스다!
            <br />
            피클 - 대화주제 추천 서비스입니다.
          </St.Contents>
        </St.ContentsWrapper>
        <St.ContentsWrapper>
          <St.Contents>
            브랜딩이든 설명이든
            <br />
            뭔가 대화 주제 추천 서비스다!
            <br />
            피클 - 대화주제 추천 서비스입니다.
          </St.Contents>
        </St.ContentsWrapper>
        <St.ContentsWrapper>
          <St.Contents>
            브랜딩이든 설명이든
            <br />
            뭔가 대화 주제 추천 서비스다!
            <br />
            피클 - 대화주제 추천 서비스입니다.
          </St.Contents>
        </St.ContentsWrapper>
      </Slider>

      <St.ContentsPages>
        <St.CurrentPage>{currentSlide + 1} / 5</St.CurrentPage>
      </St.ContentsPages>
    </St.BannerSlider>
  );
}
