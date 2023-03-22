import { IcSmallRightArrow } from "../../asset/icon/index";
import { LocationType } from "../../types/cardCollection";
import { categoryTitles } from "../../util/category/categoryList";
import { GTM_CLASS_NAME } from "../../util/const/gtm";
import Header from "../@common/Header";
import HeadingTitleContainer from "../@common/HeadingTitleContainer";
import useNavigateCardCollection, { NavigateCardCollectionBestType } from "../@common/hooks/useNavigateCardCollection";
import useGTMPage from "../@common/hooks/useGTMPage";
import useScroll from "../@common/hooks/useScroll";
import CategoryContents from "./CategoryContents";
import { St } from "./style";

export default function CategoryPage() {
  useGTMPage();
  useScroll();

  const navigateCardCollection = useNavigateCardCollection(LocationType.BEST) as NavigateCardCollectionBestType;

  return (
    <St.Root>
      <Header />
      <St.CategoryBanner>
        <St.BannerTitle>베스트 카드들만 모아서 보기</St.BannerTitle>
        <St.BannerSubTitle>북마크를 가장 많이 달성한 핫한 대화 주제 30선</St.BannerSubTitle>
        <St.GoBestPiickleBtn
          type="button"
          className={GTM_CLASS_NAME.moodShowCard}
          onClick={() => navigateCardCollection()}>
          <St.BtnTitle>카드보기</St.BtnTitle>
          <IcSmallRightArrow />
        </St.GoBestPiickleBtn>
      </St.CategoryBanner>
      <HeadingTitleContainer headingTitles={categoryTitles} />
      <CategoryContents />
    </St.Root>
  );
}
