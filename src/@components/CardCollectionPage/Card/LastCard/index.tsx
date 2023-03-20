import { IcNextCardBtn } from "../../../../asset/icon";
import { routePaths } from "../../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import { St } from "./style";

export default function LastCard() {
  return (
    <St.Card>
      <St.ContentTitle>
        의미있는 대화를
        <br />
        나누셨나요?
      </St.ContentTitle>
      <St.Content>
        화살표를 터치해서
        <br />
        새로운 대화 주제를 둘러보세요
      </St.Content>

      <St.CategoryLink className={GTM_CLASS_NAME.cardKeep} to={routePaths.Category}>
        <IcNextCardBtn />
      </St.CategoryLink>

      <St.HomeLink to={routePaths.Main}>홈으로 돌아가기</St.HomeLink>
    </St.Card>
  );
}
