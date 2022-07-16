import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import Slider from "react-slick";

import { real } from "../../../core/api/cardCollection";
import { CardIdList } from "../../../types/cardCollection";
import Card from "../Card";
import LastCard from "../Card/LastCard";
import { St } from "./style";

interface CardSliderProps {
  openFilterModalHandler: () => void;
  openLoginModalHandler: () => void;
}
const sliderSettings = {
  className: "center",
  centerMode: true,
  arrows: false,
  dots: false,
  infinite: false,
  variableWidth: true,
  slidesToScroll: 1,
};

export default function CardSlider(props: CardSliderProps) {
  const { openFilterModalHandler, openLoginModalHandler } = props;
  const [cardLists, setCardLists] = useState<CardIdList[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await real.fetchCardsWithCategory("카테고리id");
      setCardLists(data.cardIdList);
    })();
  }, []);

  return (
    <St.Wrapper>
      <Slider {...sliderSettings}>
        <Card openLoginModalHandler={openLoginModalHandler} />
        <Card openLoginModalHandler={openLoginModalHandler} />
        <Card openLoginModalHandler={openLoginModalHandler} />
        <Card openLoginModalHandler={openLoginModalHandler} />
        <Card openLoginModalHandler={openLoginModalHandler} />
        <Card openLoginModalHandler={openLoginModalHandler} />
        <LastCard />
      </Slider>
      {/* 마지막 index에서는 필터버튼 없애주기 */}
      <St.IcFilterBtn onClick={openFilterModalHandler} />
    </St.Wrapper>
  );
}
