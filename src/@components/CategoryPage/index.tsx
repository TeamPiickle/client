import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { sliderIdxState } from "../../core/atom/slider";
import { categoryTitles } from "../../core/category/categoryList";
import { routePaths } from "../../core/routes/path";
import Header from "../@common/Header";
import HeadingTitleContainer from "../@common/HeadingTitleContainer";
import useScroll from "../@common/hooks/useScroll";
import CategoryContents from "./CategoryContents";
import { St } from "./style";

export default function CategoryPage() {
  useScroll();

  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const navigate = useNavigate();

  const moveBestPiickle = () => {
    navigate(routePaths.CardCollection, { state: { type: "best" } });
    setSliderIdx(0);
  };

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
