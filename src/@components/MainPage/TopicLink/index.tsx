import { GOOGLE_FORM_TOPIC } from "../../../util/const/form";
import * as St from "./style";

export default function TopicLink() {
  return (
    <St.TopicLinkContainer>
      <St.TopicTitles>
        <h1>대화주제를 주세요 제발요:0</h1>
        <button onClick={() => window.open(GOOGLE_FORM_TOPIC)}>도움주러 가기</button>
      </St.TopicTitles>
      <St.Gradient />
    </St.TopicLinkContainer>
  );
}
