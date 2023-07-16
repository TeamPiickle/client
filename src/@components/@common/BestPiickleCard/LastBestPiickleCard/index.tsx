import * as St from "./style";

interface LastCardProps {
  handleClickCard: () => void;
}

export default function LastBestPiickleCard(props: LastCardProps) {
  const { handleClickCard } = props;

  return (
    <St.LastCard>
      <St.LastCardContent>
        나머지 주제들도
        <br />
        보고 싶다면?
      </St.LastCardContent>
      <St.LastCardWButtonWrapper onClick={handleClickCard}>나머지 보기</St.LastCardWButtonWrapper>
    </St.LastCard>
  );
}
