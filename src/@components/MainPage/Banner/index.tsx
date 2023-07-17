import "swiper/swiper.css";

import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";

import { CardList } from "../../../types/cardCollection";
import { BannerImage, newBannerImages } from "../../../util/main/banner";
import { useRecentlyBookmarked } from "../../@common/hooks/useRecentlyBookmarked";
import useBannerSwiper from "../hooks/useBannerSwiper";
import St from "./style";

interface newBannerType {
  bannerImage: BannerImage;
  phrase: string;
  topic: string;
  date: string;
  cards: CardList[];
  linkTo: string;
}

export default function Banner() {
  const { swiperSettings, currentSlide } = useBannerSwiper();
  const { recentlyDate, recentlyBookmarkedCards } = useRecentlyBookmarked();

  const newBanners: Partial<newBannerType>[] = [
    {
      bannerImage: newBannerImages[0],
      phrase: "가장 최근 북마크 된",
      topic: "핫한 대화주제",
      date: recentlyDate,
      cards: recentlyBookmarkedCards,
      linkTo: "",
    },
    {
      bannerImage: newBannerImages[1],
      phrase: "가장 최근 업데이트 된",
      topic: "새로운 대화주제",
      date: "",
      cards: [],
      linkTo: "",
    },
    {
      bannerImage: newBannerImages[2],
      phrase: "여러분만의 톡톡 튀는",
      topic: "대화주제를 얘기해주세요",
      date: "",
      cards: [],
      linkTo: "",
    },
  ];

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={newBannerImages[0].src} />
      </Helmet>
      <St.BannerSlider>
        <Swiper {...swiperSettings}>
          {newBannerImages.map((img, index) => (
            <SwiperSlide key={index}>
              <picture>
                <source srcSet={img.src} type="image/webp" />
                <St.ImageWrapper src={img.subSrc} alt={img.alt} loading="lazy" />
              </picture>
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
