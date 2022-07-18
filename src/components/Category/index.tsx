import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { sliderIdxState } from "../../core/atom/sliderIdx";
import { categoryTitles } from "../../core/category/categoryList";
import Header from "../common/Header";
import HeadingTitleContainer from "../common/HeadingTitleContainer";
import CategoryContents from "./CategoryContents";
import { St } from "./style";

export default function Category() {
  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const navigate = useNavigate();

  const moveBestPiickle = () => {
    navigate("/card-collection", { state: { type: "best" } });
    setSliderIdx(0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <St.Root>
      <Header />
      <St.CategoryBanner>
        <St.BannerTitle>Best Piickle 들만 모아서 보기</St.BannerTitle>
        <St.BannerSubTitle>마이피클을 가장 많이 달성한 핫한 대화 주제 30선</St.BannerSubTitle>
        <St.GoBestPiickleBtn type="button" onClick={moveBestPiickle}>
          카드 보기
        </St.GoBestPiickleBtn>
      </St.CategoryBanner>
      <HeadingTitleContainer headingTitles={categoryTitles} />
      <CategoryContents />
    </St.Root>
  );
}
