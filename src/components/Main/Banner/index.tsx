import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import { St } from "./style";

export default function Banner() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <St.BannerSlider>
      <Slider {...settings}>
        <St.ContentsWrapper>
          <St.Contents>
            브랜딩이든 설명이든<br></br>뭔가 대화 주제 추천 서비스다!<br></br>
            피클 - 대화주제 추천 서비스입니다.
          </St.Contents>
        </St.ContentsWrapper>
        <St.ContentsWrapper>
          <St.Contents>
            브랜딩이든 설명이든<br></br>뭔가 대화 주제 추천 서비스다!<br></br>
            피클 - 대화주제 추천 서비스입니다.
          </St.Contents>
        </St.ContentsWrapper>
        <St.ContentsWrapper>
          <St.Contents>
            브랜딩이든 설명이든<br></br>뭔가 대화 주제 추천 서비스다!<br></br>
            피클 - 대화주제 추천 서비스입니다.
          </St.Contents>
        </St.ContentsWrapper>
        <St.ContentsWrapper>
          <St.Contents>
            브랜딩이든 설명이든<br></br>뭔가 대화 주제 추천 서비스다!<br></br>
            피클 - 대화주제 추천 서비스입니다.
          </St.Contents>
        </St.ContentsWrapper>
        <St.ContentsWrapper>
          <St.Contents>
            브랜딩이든 설명이든<br></br>뭔가 대화 주제 추천 서비스다!<br></br>
            피클 - 대화주제 추천 서비스입니다.
          </St.Contents>
        </St.ContentsWrapper>
      </Slider>
      <St.ContentsPages>
        <St.PagesNumber>2/5</St.PagesNumber>
      </St.ContentsPages>
    </St.BannerSlider>
  );
}
