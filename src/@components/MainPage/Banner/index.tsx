import "swiper/swiper.css";

import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";

import { CardList, LocationType } from "../../../types/cardCollection";
import { GOOGLE_FORM_TOPIC } from "../../../util/const/form";
import { BannerImage, newBannerImages } from "../../../util/main/banner";
import useNavigateCardCollection, {
  NavigateCardCollectionRecentType,
  NavigateCardCollectionUpdateType,
} from "../../@common/hooks/useNavigateCardCollection";
import { useRecentlyBookmarked } from "../../@common/hooks/useRecentlyBookmarked";
import { useRecentlyUpdated } from "../../@common/hooks/useRecentlyUpdated";
import useBannerSwiper from "../hooks/useBannerSwiper";
import Slide from "./Slide";
import * as St from "./style";

export interface newBannerType {
  bannerImage: BannerImage;
  phrase: string;
  topic: string;
  date?: string;
  cards?: CardList[];
  linkTo: NavigateCardCollectionRecentType | NavigateCardCollectionUpdateType | (() => void);
  isLightMode: boolean;
}

export default function Banner() {
  const { swiperSettings, currentSlide } = useBannerSwiper();
  const { recentlyBookmarkedDate, recentlyBookmarkedCards } = useRecentlyBookmarked();
  const { recentlyUpdatedDate, recentlyUpdatedCards } = useRecentlyUpdated();

  const navigateRecentCollection = useNavigateCardCollection(LocationType.RECENT) as NavigateCardCollectionRecentType;
  const navigateUpdateCollection = useNavigateCardCollection(LocationType.UPDATE) as NavigateCardCollectionUpdateType;

  const newBanners: newBannerType[] = [
    {
      bannerImage: newBannerImages[0],
      phrase: "가장 최근 북마크 된",
      topic: "핫한 대화주제",
      date: recentlyBookmarkedDate,
      cards: recentlyBookmarkedCards,
      linkTo: navigateRecentCollection,
      isLightMode: false,
    },
    {
      bannerImage: newBannerImages[1],
      phrase: "가장 최근 업데이트 된",
      topic: "새로운 대화주제",
      date: recentlyUpdatedDate,
      cards: recentlyUpdatedCards,
      linkTo: navigateUpdateCollection,
      isLightMode: true,
    },
    {
      bannerImage: newBannerImages[2],
      phrase: "여러분만의 톡톡 튀는",
      topic: "대화주제를 얘기해주세요",
      linkTo: () => window.open(GOOGLE_FORM_TOPIC),
      isLightMode: true,
    },
  ];

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={newBannerImages[0].src} />
      </Helmet>
      <St.BannerSlider>
        <Swiper {...swiperSettings}>
          {newBanners.map((banner, idx) => (
            <SwiperSlide key={idx} onClick={() => banner.linkTo()}>
              <Slide {...banner} />
            </SwiperSlide>
          ))}
        </Swiper>

        <St.ContentsPages>
          <St.CurrentPage>
            {currentSlide + 1} / {newBannerImages.length}
          </St.CurrentPage>
        </St.ContentsPages>
      </St.BannerSlider>
      <St.PagingWrapper>
        {newBanners.map((banner, idx) => (
          <St.PagingButton key={idx} isSelected={currentSlide === idx} />
        ))}
      </St.PagingWrapper>
    </>
  );
}
