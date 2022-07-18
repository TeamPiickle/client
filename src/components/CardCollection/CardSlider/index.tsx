import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";

import { real } from "../../../core/api/cardCollection";
import { sliderSettings } from "../../../core/cardCollection/slider";
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

  // const location = useLocation();
  // const CARD_TYPE = location.state as number...?;
  // eslint-disable-next-line prefer-const
  let CARD_TYPE_LOCATION: CardsTypeLocation = { type: "category", categoryId: "62cbb7d8a8c54f168a6ddfe1" };

  const [cardLists, setCardLists] = useState<CardIdList[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    switch (CARD_TYPE_LOCATION.type) {
      case "category":
        (async () => {
          const { data } = await real.fetchCardsWithCategory(CARD_TYPE_LOCATION.categoryId);
          setCardLists(data.cardIdList);
        })();
        break;

      case "best":
        (async () => {
          const { data } = await real.fetchCardsWithBest();
          setCardLists(data.cardIdList);
        })();
        break;

      case "all":
        (async () => {
          const { data } = await real.fetchCardsWithFilter([]);
          setCardLists(data.cardIdList);
        })();
        break;

      case "filter":
        (async () => {
          const { data } = await real.fetchCardsWithFilter(CARD_TYPE_LOCATION.filters);
          setCardLists(data.cardIdList);
        })();
        break;
      default:
        throw new Error("잘못된 접근입니다");
    }
    setIsLoading(false);
  }, []);

  return (
    <St.Wrapper>
      {isLoading ? (
        <article>Loading...</article>
      ) : (
        <Slider {...sliderSettings}>
          {cardLists.map((cardList) => (
            <Card key={cardList._id} openLoginModalHandler={openLoginModalHandler} />
          ))}
          <LastCard />
        </Slider>
      )}
      {/* 마지막 index에서는 필터버튼 없애주기 */}
      <St.IcFilterBtn onClick={openFilterModalHandler} />
    </St.Wrapper>
  );
}
