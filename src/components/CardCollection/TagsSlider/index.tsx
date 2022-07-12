import Slider from "react-slick";

import Tag from "../Tag";
import { St } from "./style";

interface TagsSliderProps {
  tags: string[];
}

const sliderSettings = {
  arrows: false,
  dots: false,
  infinite: false,
  slidesToShow: 3.5,
};

export default function TagsSlider(props: TagsSliderProps) {
  const { tags } = props;

  return (
    <St.SliderWrapper>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </St.SliderWrapper>
  );
}
