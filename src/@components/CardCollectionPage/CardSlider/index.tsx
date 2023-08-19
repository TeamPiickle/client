import "swiper/swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { CardList } from "../../../types/cardCollection";
import { externalLinks } from "../../../util/const/externalLinks";
import Card from "../Card";
import LastCard from "../Card/LastCard";
import useCardSwiper from "../hooks/useCardSwiper";
import * as St from "./style";

interface CardSliderProps {
  cardLists: CardList[];
  lastCardObsvRef: React.RefObject<HTMLDivElement>;
}

const CardSlider = (props: CardSliderProps) => {
  const { cardLists, lastCardObsvRef } = props;
  const { swiperSettings, swiperRef, autoSlide } = useCardSwiper();

  return (
    <St.Wrapper>
      <Swiper {...swiperSettings} ref={swiperRef}>
        {cardLists.map((cardList) => (
          <SwiperSlide key={cardList._id}>
            <Card autoSlide={autoSlide} {...cardList} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <LastCard ref={lastCardObsvRef} />
        </SwiperSlide>
        <SwiperSlide>
          <St.Footer>
            <St.Text>피클에게 전할 말이 있다면 피드백을 남겨주세요</St.Text>
            <St.feedBackLink to={externalLinks.SERVICE_FEEDBACK}>피드백 남기기</St.feedBackLink>
          </St.Footer>
        </SwiperSlide>
      </Swiper>
    </St.Wrapper>
  );
};

export default CardSlider;
