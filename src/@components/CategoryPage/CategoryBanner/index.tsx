import { Helmet } from "react-helmet";

import { IcSmallRightArrow } from "../../../asset/icon";
import { ImgCategoryBanner } from "../../../asset/image";
import { OriginImgCategoryBanner } from "../../../asset/image/origin";
import { LocationType } from "../../../types/cardCollection";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import useNavigateCardCollection, {
  NavigateCardCollectionBestType,
} from "../../@common/hooks/useNavigateCardCollection";
import St from "./style";

const CategoryBanner = () => {
  const navigateCardCollection = useNavigateCardCollection(LocationType.BEST) as NavigateCardCollectionBestType;

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={ImgCategoryBanner} />
      </Helmet>

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
          <IcSmallRightArrow />
        </St.GoBestPiickleBtn>
      </St.CategoryBanner>
    </>
  );
};

export default CategoryBanner;
