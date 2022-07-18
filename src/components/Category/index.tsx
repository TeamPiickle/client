import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { HeadingTitle } from "../../core/main/headingTitles";
import Header from "../common/Header";
import HeadingTitleContainer from "../common/HeadingTitleContainer";
import CategoryContents from "./CategoryContents";
import { St } from "./style";

const categoryTitles: HeadingTitle = {
  title: "Mood Piickle",
  content: "더욱 쉽게 피클을 즐길 수 있는 방법!\n지금 나의 무드에 맞는 카테고리를 골라보세요",
  isMoreBtn: false,
};

export default function Category() {
  const navigate = useNavigate();

  const moveBestPiickle = () => {
    navigate("/card-collection", { state: { type: "best", idx: 0 } });
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
