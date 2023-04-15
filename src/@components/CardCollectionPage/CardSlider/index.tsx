import "swiper/swiper.css";

import { forwardRef, useRef } from "react";
import { useRecoilState } from "recoil";
import { Pagination, SwiperOptions } from "swiper";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import { sliderIdxState } from "../../../core/atom/slider";
import { CardList } from "../../../types/cardCollection";
import Card from "../Card";
import LastCard from "../Card/LastCard";
import St from "./style";

interface CardSliderProps {
  openLoginModalHandler: () => void;
  cardLists: CardList[];
}

const swiperSettings: SwiperOptions = {
  slidesPerView: "auto",
  spaceBetween: 8,
};

const CardSlider = forwardRef(function CardSlider(props: CardSliderProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { openLoginModalHandler, cardLists } = props;

  const [sliderIdx, setSliderIdx] = useRecoilState(sliderIdxState);
  const sliderRef = useRef<SwiperRef | null>(null);

  return (
    <St.Wrapper>
      <Swiper
        {...swiperSettings}
        direction={"vertical"}
        modules={[Pagination]}
        className="swiper"
        initialSlide={sliderIdx}
        onSlideChange={(swiper) => setSliderIdx(swiper.activeIndex)}
        ref={sliderRef}>
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
