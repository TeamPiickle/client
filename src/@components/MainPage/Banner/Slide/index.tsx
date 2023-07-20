import "swiper/swiper.css";

import { newBannerType } from "..";
import * as St from "./style";

const DATE_FORMAT = {
  START: 2,
  END: 10,
};

const CARDS_LIMIT = {
  START: 0,
  END: 4,
};

export default function Slide(props: newBannerType) {
  const { bannerImage, phrase, topic, date, cards, isLightMode, linkTo, isLast } = props;
  return (
    <St.SlideContainer>
      <St.SlideContentWrapper>
        <St.SlideTitles isLightMode={isLightMode} isLast={isLast ?? false}>
          <h2>{phrase}</h2>
          <h1>{topic}</h1>
        </St.SlideTitles>
        {!isLast && (
          <St.SlideContent>
            <St.SlideDate isLightMode={isLightMode}>
              <h2>{date?.replace(/-/g, ".").substring(DATE_FORMAT.START, DATE_FORMAT.END)}</h2>
              <div>New</div>
            </St.SlideDate>

            {cards?.slice(CARDS_LIMIT.START, CARDS_LIMIT.END).map((card) => (
              <St.SlideCard key={card._id} isLightMode={isLightMode}>
                {card.content}
              </St.SlideCard>
            ))}
          </St.SlideContent>
        )}
        {isLast && <St.Button onClick={() => linkTo()}>추가하러가기</St.Button>}
      </St.SlideContentWrapper>
      <picture>
        <source srcSet={bannerImage.src} type="image/webp" />
        <St.ImageWrapper src={bannerImage.subSrc} alt={bannerImage.alt} loading="lazy" />
      </picture>

      <St.Gradient isLightMode={isLightMode} />
    </St.SlideContainer>
  );
}
