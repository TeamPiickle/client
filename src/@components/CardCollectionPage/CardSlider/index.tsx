import "swiper/swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { CardList } from "../../../types/cardCollection";
import Card from "../Card";
import LastCard from "../Card/LastCard";
import useCardSwiper from "../hooks/useCardSwiper";
import St from "./style";

interface CardSliderProps {
  openLoginModalHandler: () => void;
  cardLists: CardList[];
  firstCardObsvRef: React.RefObject<HTMLDivElement>;
  lastCardObsvRef: React.RefObject<HTMLDivElement>;
}

const CardSlider = (props: CardSliderProps) => {
  const { openLoginModalHandler, cardLists, firstCardObsvRef, lastCardObsvRef } = props;
  const { swiperSettings } = useCardSwiper();

  return (
    <St.Wrapper>
      <Swiper {...swiperSettings}>
        {cardLists.map((cardList, idx) => (
          <SwiperSlide key={cardList._id}>
            <Card
              openLoginModalHandler={openLoginModalHandler}
              {...cardList}
              firstCardObsvRef={idx === 0 ? firstCardObsvRef : undefined}
            />
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
