import { St } from "./style";

interface BestPiickleCardProps {
  bestPiickle: {
    cardId: string;
    content: string;
    tags: string[];
  };
}

export default function BestPiickleCard(props: BestPiickleCardProps) {
  const { bestPiickle } = props;
  const { cardId, content, tags } = bestPiickle;

  return (
    <St.BestPiickleCard>
      <St.TagsWrapper>
        {tags.map((tag, i) => {
          return <St.Tag key={i}># {tag}</St.Tag>;
        })}
      </St.TagsWrapper>
      <St.Content>{content}</St.Content>
      <St.PickButtonWrapper type="button">
        <St.PickButton to={`/categories/${cardId}`}>주제 픽하기</St.PickButton>
      </St.PickButtonWrapper>
    </St.BestPiickleCard>
  );
}
