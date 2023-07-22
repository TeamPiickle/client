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
  lastCardObsvRef: React.RefObject<HTMLDivElement>;
  toggleMenuModal: () => void;
}

const CardSlider = (props: CardSliderProps) => {
  const { openLoginModalHandler, cardLists, lastCardObsvRef, toggleMenuModal } = props;
  const { swiperSettings } = useCardSwiper();

  return (
    <St.Wrapper>
      <Swiper {...swiperSettings}>
        {cardLists.map((cardList) => (
          <SwiperSlide key={cardList._id}>
            <Card toggleMenuModal={toggleMenuModal} openLoginModalHandler={openLoginModalHandler} {...cardList} />
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
