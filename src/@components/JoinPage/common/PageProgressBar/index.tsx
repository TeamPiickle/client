import { ProgressRate } from "../../../../core/join/progressRate";
import { St } from "./style";

export interface ProgressRateProps {
  progressRate: ProgressRate;
}

export default function PageProgressBar(props: ProgressRate) {
  const { rate } = props;
  return (
    <St.ProgressBarContainer>
      <St.ProgressRate rate={rate} />
    </St.ProgressBarContainer>
  );
}
