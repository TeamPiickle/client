import "swiper/swiper.css";

import { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { CardList } from "../../../types/cardCollection";
import Card from "../Card";
import LastCard from "../Card/LastCard";
import useCardSwiper from "../hooks/useCardSwiper";
import St from "./style";

interface CardSliderProps {
  openLoginModalHandler: () => void;
  cardLists: CardList[];
}

const CardSlider = forwardRef(function CardSlider(props: CardSliderProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { openLoginModalHandler, cardLists } = props;
  const { swiperSettings } = useCardSwiper();

  return (
    <St.Wrapper>
      <Swiper {...swiperSettings}>
        {cardLists.map((cardList) => (
          <SwiperSlide key={cardList._id}>
            <Card openLoginModalHandler={openLoginModalHandler} {...cardList} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <LastCard ref={ref} />
        </SwiperSlide>
      </Swiper>
    </St.Wrapper>
  );
});

export default CardSlider;
