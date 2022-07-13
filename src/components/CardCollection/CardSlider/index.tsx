import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import Card from "../Card";
import { St } from "./style";

const sliderSettings = {
  className: "center",
  centerMode: true,
  arrows: false,
  dots: false,
  infinite: false,
  variableWidth: true,
  slidesToScroll: 1,
};

export default function CardSlider() {
  return (
    <St.Wrapper>
      <Slider {...sliderSettings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </St.Wrapper>
  );
}
