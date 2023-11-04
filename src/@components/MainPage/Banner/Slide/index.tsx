import "swiper/swiper.css";

import { newBannerType } from "../../../../util/main/banner";
import SlideContent from "../SlideContent";
import * as St from "./style";

const FIRST_BANNER_ID = 0;

export default function Slide(props: newBannerType) {
  const { bannerId, bannerImage, phrase, topic, isLightMode, isLast, gtmClassName } = props;
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
        <source width={360} height={302} srcSet={bannerImage.src} type="image/webp" />
        <St.ImageWrapper
          width={360}
          height={302}
          src={bannerImage.subSrc}
          alt={bannerImage.alt}
          loading={bannerId === FIRST_BANNER_ID ? "eager" : "lazy"}
        />
      </picture>

      <St.Gradient islightmode={isLightMode} />
    </St.SlideContainer>
  );
}
