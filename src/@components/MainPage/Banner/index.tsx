import "swiper/swiper.css";

import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";

import { routePaths } from "../../../core/routes/path";
import { LocationType } from "../../../types/cardCollection";
import { externalLinks } from "../../../util/const/externalLinks";
import { newBannerImages, newBannerType } from "../../../util/main/banner";
import { useRecentlyBookmarked } from "../../@common/hooks/useRecentlyBookmarked";
import useBannerSwiper from "../hooks/useBannerSwiper";
import { useRecentlyUpdated } from "../hooks/useRecentlyUpdated";
import Slide from "./Slide";
import * as St from "./style";

export default function Banner() {
  const { swiperSettings, currentSlide } = useBannerSwiper();
  const { recentlyBookmarkedDate, recentlyBookmarkedCards } = useRecentlyBookmarked();
  const { recentlyUpdatedDate, recentlyUpdatedCards } = useRecentlyUpdated();

  const newBanners: newBannerType[] = [
    {
      bannerImage: newBannerImages[0],
      phrase: "가장 최근 북마크 된",
      topic: "핫한 대화주제",
      date: recentlyBookmarkedDate,
      cards: recentlyBookmarkedCards,
      linkTo: `${routePaths.CardCollection}?type=${LocationType.RECENT}`,
      isLightMode: false,
    },
    {
      bannerImage: newBannerImages[1],
      phrase: "가장 최근 업데이트 된",
      topic: "새로운 대화주제",
      date: recentlyUpdatedDate,
      cards: recentlyUpdatedCards,
      linkTo: `${routePaths.CardCollection}?type=${LocationType.UPDATE}`,
      isLightMode: true,
    },
    {
      bannerImage: newBannerImages[2],
      phrase: "여러분만의 톡톡 튀는",
      topic: "대화주제를 얘기해주세요",
      linkTo: externalLinks.TOPIC_FORM,
      isLightMode: true,
      isLast: true,
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
            <SwiperSlide key={idx}>
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
          <St.PagingButton key={idx} isselected={currentSlide === idx} />
        ))}
      </St.PagingWrapper>
    </>
  );
}
