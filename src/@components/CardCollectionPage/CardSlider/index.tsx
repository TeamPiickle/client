import "swiper/swiper.css";

import { forwardRef, useRef } from "react";
import { useRecoilState } from "recoil";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import { sliderIdxState } from "../../../core/atom/slider";
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

  const [sliderIdx, setSliderIdx] = useRecoilState(sliderIdxState);
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <St.Wrapper>
      <Swiper
        {...swiperSettings}
        className="swiper"
        initialSlide={sliderIdx}
        onSlideChange={(swiper) => setSliderIdx(swiper.activeIndex)}
        ref={swiperRef}>
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
