import "swiper/swiper.css";

import { newBannerType } from "../../../../util/main/banner";
import SlideContent from "../SlideContent";
import * as St from "./style";

export default function Slide(props: newBannerType) {
  const { bannerImage, phrase, topic, isLightMode, isLast, className } = props;
  return (
    <St.SlideContainer className={className}>
      <St.SlideContentWrapper className={className}>
        <St.SlideTitles islightmode={isLightMode} isLast={isLast ?? false} className={className}>
          <St.SlideSubtitle className={className}>{phrase}</St.SlideSubtitle>
          <St.SlideTitle className={className}>{topic}</St.SlideTitle>
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
