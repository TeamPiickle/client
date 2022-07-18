import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import { useRecoilState } from "recoil";

import { real } from "../../../core/api/cardCollection";
import { sliderIdxState } from "../../../core/atom/sliderIdx";
import { CardIdList, CardsTypeLocation } from "../../../types/cardCollection";
import Card from "../Card";
import LastCard from "../Card/LastCard";
import { St } from "./style";

interface CardSliderProps {
  openFilterModalHandler: () => void;
  openLoginModalHandler: () => void;
}

// 1. 카테고리 :: /categories/:categoryId :: { type: "category", categoryId: "62cbb7d8a8c54f168a6ddfe1"}
// 2. 베스트 카드 :: /cards/best :: { type: "best" }
// 3. all 전체 카드 :: /categories/cards :: { type: "all" }
// 4. 필터 :: /categories/cards?search={type} :: { type: "filter", filters: ["남자", "상관없음"] }
export default function CardSlider(props: CardSliderProps) {
  const { openFilterModalHandler, openLoginModalHandler } = props;

  const [sliderIdx, setSliderIdx] = useRecoilState(sliderIdxState);
  const location = useLocation();
  const CARD_TYPE_LOCATION = location.state as CardsTypeLocation;

  const sliderRef = useRef<Slider | null>(null);
  const [cardLists, setCardLists] = useState<CardIdList[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    switch (CARD_TYPE_LOCATION.type) {
      case "category":
        (async () => {
          const { data } = await real.fetchCardsWithCategory(CARD_TYPE_LOCATION.categoryId);
          setCardLists(data.cardList);
        })();
        break;

      case "best":
        (async () => {
          const { data } = await real.fetchCardsWithBest();
          setCardLists(data.cardList);
        })();
        break;

      case "all":
        (async () => {
          const { data } = await real.fetchCardsWithFilter([]);
          setCardLists(data.cardList);
        })();
        break;

      case "filter":
        (async () => {
          const { data } = await real.fetchCardsWithFilter(CARD_TYPE_LOCATION.filters);
          setCardLists(data.cardList);
        })();
        break;
      default:
        throw new Error("잘못된 접근입니다.");
    }
    setIsLoading(false);
  }, [CARD_TYPE_LOCATION]);

  return (
    <St.Wrapper>
      {isLoading ? (
        <article>Loading...</article>
      ) : (
        <Slider {...sliderSettings} ref={sliderRef}>
          {cardLists.map((cardList) => (
            <Card key={cardList._id} openLoginModalHandler={openLoginModalHandler} cardIdList={cardList} />
          ))}
          <LastCard />
        </Slider>
      )}
      <St.IcFilterBtn onClick={openFilterModalHandler} />
    </St.Wrapper>
  );
}
