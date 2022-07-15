import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import Card from "../Card";
import LastCard from "../Card/LastCard";
import { St } from "./style";

interface CardSliderProps {
  openHandler: () => void;
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
  const { openHandler } = props;

  return (
    <St.Wrapper>
      <Slider {...sliderSettings}>
        <Card openHandler={openHandler} />
        <Card openHandler={openHandler} />
        <Card openHandler={openHandler} />
        <Card openHandler={openHandler} />
        <Card openHandler={openHandler} />
        <Card openHandler={openHandler} />
        <LastCard />
      </Slider>
      {/* 마지막 index에서는 필터버튼 없애주기 */}
      <St.IcFilterBtn onClick={openHandler} />
    </St.Wrapper>
  );
}
