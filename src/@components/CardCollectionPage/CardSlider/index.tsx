import "swiper/swiper.css";

import { useRef } from "react";
import { useRecoilState } from "recoil";
import { Pagination, SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { sliderIdxState } from "../../../core/atom/slider";
import { CardList } from "../../../types/cardCollection";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import Card from "../Card";
import LastCard from "../Card/LastCard";
import St from "./style";

const swiperSettings: SwiperOptions = {
  slidesPerView: "auto",
  spaceBetween: 10,
};

interface CardSliderProps {
  openFilterModalHandler: () => void;
  openLoginModalHandler: () => void;
  cardLists: CardList[];
}

export default function CardSlider(props: CardSliderProps) {
  const { openFilterModalHandler, openLoginModalHandler, cardLists } = props;

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
          <LastCard />
        </SwiperSlide>
      </Swiper>
      <St.FilterBtn
        aria-label="카드 추천 필터"
        role="dialog"
        className={GTM_CLASS_NAME.cardRecommendFilter}
        onClick={openFilterModalHandler}
      />
    </St.Wrapper>
  );
}
