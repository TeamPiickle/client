import { IcNextCardBtn } from "../../../../asset/icon";
import { routePaths } from "../../../../core/routes/path";
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

      <St.CategoryLink to={routePaths.Category} className="GTM_GoCategory">
        <IcNextCardBtn />
      </St.CategoryLink>

      <St.HomeLink to={routePaths.Main} className="GTM_GoMain">
        홈으로 돌아가기
      </St.HomeLink>
    </St.Card>
  );
}
