import "swiper/swiper.css";

import { forwardRef, useRef } from "react";
import { useRecoilState } from "recoil";
import { Pagination, SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { sliderIdxState } from "../../../core/atom/slider";
import { CardList } from "../../../types/cardCollection";
import Card from "../Card";
import LastCard from "../Card/LastCard";
import St from "./style";

const swiperSettings: SwiperOptions = {
  slidesPerView: "auto",
  spaceBetween: 10,
};

interface CardSliderProps {
  openLoginModalHandler: () => void;
  cardLists: CardList[];
}

const CardSlider = forwardRef(function CardSlider(props: CardSliderProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { openLoginModalHandler, cardLists } = props;

  //const [sliderIdx, setSliderIdx] = useRecoilState(sliderIdxState);
  //const sliderRef = useRef<Slider | null>(null);

  return (
    <St.Wrapper>
      <Swiper
        {...swiperSettings}
        direction={"vertical"}
        modules={[Pagination]}
        className="swiper"
        /*initialSlide={sliderIdx}
        afterChange={(idx: number) => setSliderIdx(idx)}
        ref={sliderRef}*/
      >
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
