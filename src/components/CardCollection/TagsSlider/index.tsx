import Tag from "../Tag";
import { St } from "./style";

interface TagsSliderProps {
  tags: string[];
}

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
