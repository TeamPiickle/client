import { Helmet } from "react-helmet";

import { IcSmallRightArrow } from "../../asset/icon/index";
import { ImgCategoryBanner } from "../../asset/image";
import { OriginImgCategoryBanner } from "../../asset/image/origin";
import { LocationType } from "../../types/cardCollection";
import { categoryTitles } from "../../util/category/categoryList";
import { GTM_CLASS_NAME } from "../../util/const/gtm";
import Header from "../@common/Header";
import HeadingTitleContainer from "../@common/HeadingTitleContainer";
import useGTMPage from "../@common/hooks/useGTMPage";
import useNavigateCardCollection, { NavigateCardCollectionBestType } from "../@common/hooks/useNavigateCardCollection";
import useScroll from "../@common/hooks/useScroll";
import CategoryContents from "./CategoryContents";
import St from "./style";

export default function CategoryPage() {
  useGTMPage();
  useScroll();

  const navigateCardCollection = useNavigateCardCollection(LocationType.BEST) as NavigateCardCollectionBestType;

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={ImgCategoryBanner} />
      </Helmet>
      <St.Root>
        <Header />
        <St.CategoryBanner>
          <picture>
            <source srcSet={ImgCategoryBanner} type="image/webp" />
            <St.BgImg src={OriginImgCategoryBanner} alt="" />
          </picture>
          <St.BannerTitle>베스트 카드들만 모아서 보기</St.BannerTitle>
          <St.BannerSubTitle>북마크를 가장 많이 달성한 핫한 대화 주제 30선</St.BannerSubTitle>
          <St.GoBestPiickleBtn
            type="button"
            className={GTM_CLASS_NAME.moodShowCard}
            onClick={() => navigateCardCollection()}>
            <St.BtnTitle className={GTM_CLASS_NAME.moodShowCard}>카드보기</St.BtnTitle>
            <IcSmallRightArrow className={GTM_CLASS_NAME.moodShowCard} />
          </St.GoBestPiickleBtn>
        </St.CategoryBanner>
        <HeadingTitleContainer headingTitles={categoryTitles} />
        <CategoryContents />
      </St.Root>
    </>
  );
}
