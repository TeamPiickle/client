import { useNavigate } from "react-router-dom";

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

  const navigation = useNavigate();

  return (
    <St.BestPiickleCard>
      <St.TagsWrapper>
        {category.map((tag, i) => {
          return <St.Tag key={i}># {tag}</St.Tag>;
        })}
      </St.TagsWrapper>
      <St.Content>{content}</St.Content>
      <St.PickButtonWrapper>
        <St.PickButton
          type="button"
          onClick={() => {
            navigation("/card-collection", { state: { type: "category", categoryId: _id } });
          }}>
          카드 보기
        </St.PickButton>
      </St.PickButtonWrapper>
    </St.BestPiickleCard>
  );
}
