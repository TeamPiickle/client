import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useRef } from "react";
import Slider from "react-slick";
import { useRecoilState, useSetRecoilState } from "recoil";

import { filterTagsState, sliderIdxState } from "../../../core/atom/slider";
import { CardList, CardsTypeLocation } from "../../../types/cardCollection";
import fetchCardCollection from "../../../util/fetchCardCollection";
import Loading from "../../common/Loading";
import Card from "../Card";
import LastCard from "../Card/LastCard";
import { St } from "./style";

interface CardSliderProps {
  openFilterModalHandler: () => void;
  openLoginModalHandler: () => void;
  cardsTypeLoaction: CardsTypeLocation;
  cardLists: CardList[] | null;
  setCardLists: React.Dispatch<React.SetStateAction<CardList[] | null>>;
}

// 1. 카테고리 :: /categories/:categoryId :: { type: "category", categoryId: "62cbb7d8a8c54f168a6ddfe1"}
// 2. 베스트 카드 :: /cards/best :: { type: "best" }
// 3. all 전체 카드 :: /categories/cards :: { type: "all" }
// 4. 마이 피클 :: /users/bookmarks :: { type: "bookmark" }
export default function CardSlider(props: CardSliderProps) {
  const { openFilterModalHandler, openLoginModalHandler, cardsTypeLoaction, cardLists, setCardLists } = props;

  const setFilterTags = useSetRecoilState(filterTagsState);
  const [sliderIdx, setSliderIdx] = useRecoilState(sliderIdxState);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    fetchCardCollection(cardsTypeLoaction, (data: CardList[]) => {
      setCardLists(data);
    });
    // 필터 정보 초기화
    setFilterTags((prev) => ({ ...prev, isActive: false }));
  }, [cardsTypeLoaction, setCardLists, setFilterTags]);

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
        <Loading backgroundColor="transparent" />
      ) : (
        <Slider {...sliderSettings} ref={sliderRef}>
          {cardLists?.map((cardList) => (
            <Card key={cardList._id} openLoginModalHandler={openLoginModalHandler} cardList={cardList} />
          ))}
          <LastCard />
        </Slider>
      )}
      <St.IcFilterBtn onClick={openFilterModalHandler} aria-label="카드 추천 필터" role="dialog" />
    </St.Wrapper>
  );
}
