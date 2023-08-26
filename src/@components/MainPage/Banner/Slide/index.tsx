import "swiper/swiper.css";

import { newBannerType } from "../../../../util/main/banner";
import SlideContent from "../SlideContent";
import * as St from "./style";

export default function Slide(props: newBannerType) {
  const { bannerImage, phrase, topic, isLightMode, isLast, gtmClassName } = props;
  return (
    <St.SlideContainer className={gtmClassName}>
      <St.SlideContentWrapper className={gtmClassName}>
        <St.SlideTitles islightmode={isLightMode} isLast={isLast ?? false} className={gtmClassName}>
          <St.SlideSubtitle className={gtmClassName}>{phrase}</St.SlideSubtitle>
          <St.SlideTitle className={gtmClassName}>{topic}</St.SlideTitle>
        </St.SlideTitles>
        <SlideContent {...props} />
      </St.SlideContentWrapper>
      <picture>
        <source srcSet={bannerImage.src} type="image/webp" />
        <St.ImageWrapper src={bannerImage.subSrc} alt={bannerImage.alt} loading="lazy" />
      </picture>

      <St.Gradient islightmode={isLightMode} />
    </St.SlideContainer>
  );
}
