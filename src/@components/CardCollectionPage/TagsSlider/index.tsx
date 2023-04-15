import Tag from "../Tag";
import { St } from "./style";

interface TagsSliderProps {
  tags: string[];
}

export default function TagsSlider(props: TagsSliderProps) {
  const { tags } = props;

  const setTagsNumber = () => {
    let count = 0;
    tags.forEach((tag) => {
      count += tag.length;

      if (count > 18) return 3;
    });

    return 4;
  };

  return (
    <St.SliderWrapper>
      {tags.slice(0, setTagsNumber()).map((tag, i) => (
        <Tag key={`${tag}-${i}`}>{tag.slice(1)}</Tag>
      ))}
    </St.SliderWrapper>
  );
}
