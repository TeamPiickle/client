import "swiper/swiper.css";

import { SwiperSlide } from "swiper/react";

import { newBannerType } from "..";
import * as St from "./style";

export default function Slide(props: newBannerType) {
  const { bannerImage, phrase, topic, date, cards, linkTo, isLightMode } = props;
  return (
    <St.SlideContainer>
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
    </St.SlideContainer>
  );
}
