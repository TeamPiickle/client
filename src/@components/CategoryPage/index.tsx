import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { IcSmallRightArrow } from "../../asset/icon/index";
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
        <St.BannerTitle>베스트 카드들만 모아서 보기</St.BannerTitle>
        <St.BannerSubTitle>북마크를 가장 많이 달성한 핫한 대화 주제 30선</St.BannerSubTitle>
        <St.GoBestPiickleBtn type="button" onClick={moveBestPiickle} className="GTM_카드보기">
          <St.BtnTitle>카드보기</St.BtnTitle>
          <IcSmallRightArrow />
        </St.GoBestPiickleBtn>
      </St.CategoryBanner>
      <HeadingTitleContainer headingTitles={categoryTitles} />
      <CategoryContents />
    </St.Root>
  );
}
