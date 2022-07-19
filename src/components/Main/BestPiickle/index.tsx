import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import Slider from "react-slick";

import { useBestPiickle } from "../../../core/api/main";
import { headingTitles } from "../../../core/main/headingTitles";
import { Card } from "../../../types/main";
import HeadingTitleContainer from "../../common/HeadingTitleContainer";
import BestPiickleCard from "./BestPiickleCard";
import { St } from "./style";

type bestPiickleType = {
  _id: string;
  category: string[];
  content: string;
};

const sliderSettings = {
  arrows: false,
  dots: false,
  infinite: false,
  variableWidth: true,
  slidesToScroll: 1,
};

export default function BestPiickle() {
  const { bestPiickle, isLoading, isError } = useBestPiickle();

  return (
    <St.Root>
      <HeadingTitleContainer headingTitles={headingTitles[0]} />
      <St.SliderWrapper>
        <Slider {...sliderSettings}>
          {bestPiickle &&
            bestPiickle.data.map((bestPiickle: bestPiickleType) => {
              return <BestPiickleCard key={bestPiickle._id} bestPiickle={bestPiickle} />;
            })}
        </Slider>
      </St.SliderWrapper>
    </St.Root>
  );
}
