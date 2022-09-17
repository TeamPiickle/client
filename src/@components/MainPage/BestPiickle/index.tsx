import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { useBestPiickle } from "../../../core/api/main";
import { headingTitles } from "../../../core/main/headingTitles";
import HeadingTitleContainer from "../../@common/HeadingTitleContainer";
import Loading from "../../@common/Loading";
import BestPiickleCard from "./BestPiickleCard";
import { St } from "./style";

const sliderSettings = {
  arrows: false,
  dots: false,
  infinite: false,
  slidesToShow: 1.3,
  centerMode: true,
  variableWidth: true,
  slidesToScroll: 1,
};

export default function BestPiickle() {
  const { bestPiickle } = useBestPiickle();

  return (
    <St.Root>
      <HeadingTitleContainer headingTitles={headingTitles[0]} />

      {bestPiickle ? (
        <St.SliderWrapper>
          <Slider {...sliderSettings}>
            {bestPiickle &&
              bestPiickle.data.slice(0, 5).map((bestPiickle, idx) => {
                return <BestPiickleCard key={bestPiickle._id} bestPiickle={bestPiickle} idx={idx} />;
              })}
          </Slider>
        </St.SliderWrapper>
      ) : (
        <Loading backgroundColor="white" />
      )}
    </St.Root>
  );
}
