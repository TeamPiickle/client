import { externalLinks } from "../../../util/const/externalLinks";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import * as St from "./style";

export default function TopicLink() {
  return (
    <St.TopicLinkContainer>
      <St.TopicTitles>
        <St.Text>대화주제를 주세요 제발요:0</St.Text>
        <St.Link href={externalLinks.TOPIC_FORM} className={GTM_CLASS_NAME.mainTopicRequestBtn}>
          도움주러 가기
        </St.Link>
      </St.TopicTitles>
      <St.Gradient />
    </St.TopicLinkContainer>
  );
}
