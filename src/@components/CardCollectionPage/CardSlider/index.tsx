import "swiper/swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { CardList } from "../../../types/cardCollection";
import Card from "../Card";
import LastCard from "../Card/LastCard";
import useBlacklist from "../hooks/useBlacklist";
import useCardSwiper from "../hooks/useCardSwiper";
import St from "./style";

interface CardSliderProps {
  openLoginModalHandler: () => void;
  cardLists: CardList[];
  lastCardObsvRef: React.RefObject<HTMLDivElement>;
}

const CardSlider = (props: CardSliderProps) => {
  const { openLoginModalHandler, cardLists, lastCardObsvRef } = props;
  const { swiperSettings, swiperRef, autoSlide } = useCardSwiper();

  return (
    <St.Wrapper>
      <Swiper {...swiperSettings} ref={swiperRef}>
        {cardLists.map((cardList) => (
          <SwiperSlide key={cardList._id}>
            <Card autoSlide={autoSlide} openLoginModalHandler={openLoginModalHandler} {...cardList} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <LastCard ref={lastCardObsvRef} />
        </SwiperSlide>
      </Swiper>
    </St.Wrapper>
  );
};

export default CardSlider;
