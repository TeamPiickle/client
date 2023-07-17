import "swiper/swiper.css";

import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";

import { CardList, LocationType } from "../../../types/cardCollection";
import { BannerImage, newBannerImages } from "../../../util/main/banner";
import useNavigateCardCollection, {
  NavigateCardCollectionRecentType,
  NavigateCardCollectionUpdateType,
} from "../../@common/hooks/useNavigateCardCollection";
import { useRecentlyBookmarked } from "../../@common/hooks/useRecentlyBookmarked";
import { useRecentlyUpdated } from "../../@common/hooks/useRecentlyUpdated";
import useBannerSwiper from "../hooks/useBannerSwiper";
import * as St from "./style";

interface newBannerType {
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
      linkTo: () =>
        window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSfSm7iKK5myGDeFOZyv0I3yrYzNja5wmLQ-yKHV90jTVc4zcg/viewform",
        ),
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
          {newBanners.map(({ bannerImage, phrase, topic, date, cards, linkTo, isLightMode }, index) => (
            <SwiperSlide key={index} onClick={() => linkTo()}>
              <St.SlideContentWrapper>
                <St.SlideTitles isLightMode={isLightMode}>
                  <h2>{phrase}</h2>
                  <h1>{topic}</h1>
                </St.SlideTitles>
                <St.SlideContent>
                  <St.SlideDate isLightMode={isLightMode}>
                    <h2>{date?.replace(/-/g, ".").substring(2, 10)}</h2>
                    <div>New</div>
                  </St.SlideDate>
                  {cards?.slice(0, 4).map((card) => (
                    <St.SlideCard key={card._id} isLightMode={isLightMode}>
                      {card.content}
                    </St.SlideCard>
                  ))}
                </St.SlideContent>
              </St.SlideContentWrapper>
              <picture>
                <source srcSet={bannerImage.src} type="image/webp" />
                <St.ImageWrapper src={bannerImage.subSrc} alt={bannerImage.alt} loading="lazy" />
              </picture>

              <St.Gradient isLightMode={isLightMode} />
            </SwiperSlide>
          ))}
        </Swiper>

        <St.ContentsPages>
          <St.CurrentPage>
            {currentSlide + 1} / {newBannerImages.length}
          </St.CurrentPage>
        </St.ContentsPages>
      </St.BannerSlider>
    </>
  );
}
