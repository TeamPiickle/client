import { St } from "./style";

interface BestPiickleCardProps {
  bestPiickle: {
    _id: string;
    category: string[];
    content: string;
  };
}

export default function BestPiickleCard(props: BestPiickleCardProps) {
  const { bestPiickle } = props;
  const { _id, content, category } = bestPiickle;

  return (
    <St.BestPiickleCard>
      <St.TagsWrapper>
        {category.map((tag, i) => {
          return <St.Tag key={i}># {tag}</St.Tag>;
        })}
      </St.TagsWrapper>
      <St.Content>{content}</St.Content>
      <St.PickButtonWrapper type="button">
        <St.PickButton to={`/categories/${_id}`}>주제 픽하기</St.PickButton>
      </St.PickButtonWrapper>
    </St.BestPiickleCard>
  );
}
