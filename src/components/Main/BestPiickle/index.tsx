import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import Slider from "react-slick";

import { headingTitles } from "../../../core/main/headingTitles";
import { Card } from "../../../types/main";
import HeadingTitleContainer from "../../common/HeadingTitleContainer";
import BestPiickleCard from "./BestPiickleCard";
import { St } from "./style";

const bestPiickles = [
  {
    cardId: "6290145b6af16276098d04d9",
    content: "서해은은 귀여울 뿐만 아니라 사랑스럽다",
    tags: ["재미", "IF 밸런스게임"],
  },
  {
    cardId: "6290145b6af16276098d04d8",
    content: "이주함은 킹왕짱짱짱 머시써 라고할뻔~ 는구라",
    tags: ["재미", "IF 밸런스게임"],
  },
  {
    cardId: "6290145b6af16276098d04d7",
    content: "앙큼지영은 진오씨와 912일 ~ 혜은이랑은 이제 10일이지롱 부럽지 ㅋㅋ ",
    tags: ["재미", "IF 밸런스게임"],
  },
  {
    cardId: "6290145b6af16276098d04d6",
    content: "고나연 1349일 동안 너무 고마워",
    tags: ["재미", "IF 밸런스게임"],
  },
  {
    cardId: "6290145b6af16276098d04d5",
    content: "상대방의 첫인상을 말해주세요",
    tags: ["재미", "IF 밸런스게임"],
  },
];

const sliderSettings = {
  arrows: false,
  dots: false,
  infinite: false,
  variableWidth: true,
  slidesToScroll: 1,
};

export default function BestPiickle() {
  return (
    <St.Root>
      <HeadingTitleContainer headingTitles={headingTitles[0]} />
      <St.SliderWrapper>
        <Slider {...sliderSettings}>
          {bestPiickles.map((bestPiickle) => {
            return <BestPiickleCard key={bestPiickle.cardId} bestPiickle={bestPiickle} />;
          })}
        </Slider>
      </St.SliderWrapper>
    </St.Root>
  );
}
