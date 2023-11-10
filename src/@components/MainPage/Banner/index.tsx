import "swiper/swiper.css";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";

import { routePaths } from "../../../core/routes/path";
import { LocationType } from "../../../types/cardCollection";
import { externalLinks } from "../../../util/const/externalLinks";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import { newBannerImages, newBannerType } from "../../../util/main/banner";
import { useRecentlyBookmarked } from "../../@common/hooks/useRecentlyBookmarked";
import useBannerSwiper from "../hooks/useBannerSwiper";
import { useRecentlyUpdated } from "../hooks/useRecentlyUpdated";
import Slide from "./Slide";
import * as St from "./style";

export default function Banner() {
  const [isSecondBanner, setIsSecondBanner] = useState(false);
  const { swiperSettings, currentSlide } = useBannerSwiper();
  const { recentlyBookmarkedDate, recentlyBookmarkedCards } = useRecentlyBookmarked();
  const { recentlyUpdatedDate, recentlyUpdatedCards } = useRecentlyUpdated(!isSecondBanner);

  const newBanners: newBannerType[] = [
    {
      bannerId: 0,
      bannerImage: newBannerImages[0],
      phrase: "가장 최근 북마크 된",
      topic: "핫한 대화주제",
      date: recentlyBookmarkedDate,
      cards: recentlyBookmarkedCards,
      linkTo: `${routePaths.CardCollection}?type=${LocationType.RECENT}`,
      isLightMode: false,
      gtmClassName: GTM_CLASS_NAME.mainBannerHot,
    },
    {
      bannerId: 1,
      bannerImage: newBannerImages[1],
      phrase: "가장 최근 업데이트 된",
      topic: "새로운 대화주제",
      date: recentlyUpdatedDate,
      cards: recentlyUpdatedCards,
      linkTo: `${routePaths.CardCollection}?type=${LocationType.UPDATE}`,
      isLightMode: true,
      gtmClassName: GTM_CLASS_NAME.mainBannerNew,
    },
    {
      bannerId: 2,
      bannerImage: newBannerImages[2],
      phrase: "여러분만의 톡톡 튀는",
      topic: "대화주제를 얘기해주세요",
      linkTo: externalLinks.TOPIC_FORM,
      isLightMode: true,
      isLast: true,
    },
  ];

  useEffect(() => {
    if (currentSlide === 1) setIsSecondBanner(true);
  }, [currentSlide]);

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={newBannerImages[0].src} />
      </Helmet>
      <St.BannerSlider>
        <Swiper {...swiperSettings}>
          {newBanners.map((banner) => (
            <SwiperSlide key={banner.bannerId} className={banner.gtmClassName}>
              <Slide {...banner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </St.BannerSlider>
      <St.PagingWrapper>
        {newBanners.map((banner, idx) => (
          <St.PagingButton key={idx} isselected={currentSlide === idx} />
        ))}
      </St.PagingWrapper>
    </>
  );
}
