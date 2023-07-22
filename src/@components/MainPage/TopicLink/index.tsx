import { GOOGLE_FORM_TOPIC } from "../../../util/const/form";
import * as St from "./style";

export default function TopicLink() {
  return (
    <St.TopicLinkContainer>
      <St.TopicTitles>
        <St.Text>대화주제를 주세요 제발요:0</St.Text>
        <St.Button onClick={() => window.open(GOOGLE_FORM_TOPIC)}>도움주러 가기</St.Button>
      </St.TopicTitles>
      <St.Gradient />
    </St.TopicLinkContainer>
  );
}
