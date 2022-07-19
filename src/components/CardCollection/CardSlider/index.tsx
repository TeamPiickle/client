import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import { useRecoilState } from "recoil";

import { sliderIdxState } from "../../../core/atom/slider";
import { CardList, CardsTypeLocation } from "../../../types/cardCollection";
import fetchCardCollection from "../../../util/fetchCardCollection";
import Card from "../Card";
import LastCard from "../Card/LastCard";
import { St } from "./style";

interface CardSliderProps {
  openFilterModalHandler: () => void;
  openLoginModalHandler: () => void;
  cardsTypeLoaction: CardsTypeLocation;
}

// 1. 카테고리 :: /categories/:categoryId :: { type: "category", categoryId: "62cbb7d8a8c54f168a6ddfe1"}
// 2. 베스트 카드 :: /cards/best :: { type: "best" }
// 3. all 전체 카드 :: /categories/cards :: { type: "all" }
// 4. 필터 :: /categories/cards?search={type} :: { type: "filter", filters: ["남자", "상관없음"] }
export default function CardSlider(props: CardSliderProps) {
  const { openFilterModalHandler, openLoginModalHandler, cardsTypeLoaction } = props;

  const [sliderIdx, setSliderIdx] = useRecoilState(sliderIdxState);
  const sliderRef = useRef<Slider | null>(null);
  const [cardLists, setCardLists] = useState<CardList[]>([]);

  useEffect(() => {
    fetchCardCollection(cardsTypeLoaction, (data: CardList[]) => {
      setCardLists(data);
    });
  }, [cardsTypeLoaction]);

  const sliderSettings = {
    className: "center",
    centerMode: true,
    arrows: false,
    dots: false,
    infinite: false,
    variableWidth: true,
    slidesToScroll: 1,
    initialSlide: sliderIdx,
    afterChange: (idx: number) => setSliderIdx(idx),
  };

  return (
    <St.Wrapper>
      {!cardLists ? (
        <article>Loading...</article>
      ) : (
        <Slider {...sliderSettings} ref={sliderRef}>
          {cardLists.map((cardList) => (
            <Card key={cardList._id} openLoginModalHandler={openLoginModalHandler} cardList={cardList} />
          ))}
          <LastCard />
        </Slider>
      )}
      <St.IcFilterBtn onClick={openFilterModalHandler} />
    </St.Wrapper>
  );
}
