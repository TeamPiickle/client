import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import * as St from "./style";

interface LastCardProps {
  handleClickCard: () => void;
  gtmClassName: string;
}

export default function LastBestPiickleCard(props: LastCardProps) {
  const { handleClickCard, gtmClassName } = props;

  return (
    <St.LastCard>
      <St.LastCardContent>
        나머지 주제들도
        <br />
        보고 싶다면?
      </St.LastCardContent>
      <St.LastCardWButtonWrapper className={GTM_CLASS_NAME[`${gtmClassName}More`]} onClick={handleClickCard}>
        나머지 보기
      </St.LastCardWButtonWrapper>
    </St.LastCard>
  );
}
