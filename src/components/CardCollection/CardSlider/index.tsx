import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useRef } from "react";
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
  cardLists: CardList[];
  setCardLists: React.Dispatch<React.SetStateAction<CardList[]>>;
}

// 1. 카테고리 :: /categories/:categoryId :: { type: "category", categoryId: "62cbb7d8a8c54f168a6ddfe1"}
// 2. 베스트 카드 :: /cards/best :: { type: "best" }
// 3. all 전체 카드 :: /categories/cards :: { type: "all" }
// 4. 필터 :: /categories/cards?search={type} :: { type: "filter", filters: ["남자", "상관없음"] }
export default function CardSlider(props: CardSliderProps) {
  const { openFilterModalHandler, openLoginModalHandler, cardsTypeLoaction, cardLists, setCardLists } = props;

  const [sliderIdx, setSliderIdx] = useRecoilState(sliderIdxState);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    fetchCardCollection(cardsTypeLoaction, (data: CardList[]) => {
      setCardLists(data);
    });
  }, [cardsTypeLoaction, setCardLists]);

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
      {/* 이거 왜 로딩뷰 안나오냐 */}
      {cardLists === [] ? (
        <article>Loading...</article>
      ) : (
        <Slider {...sliderSettings} ref={sliderRef}>
          {cardLists?.map((cardList) => (
            <Card key={cardList._id} openLoginModalHandler={openLoginModalHandler} cardList={cardList} />
          ))}
          <LastCard />
        </Slider>
      )}
      <St.IcFilterBtn onClick={openFilterModalHandler} />
    </St.Wrapper>
  );
}
