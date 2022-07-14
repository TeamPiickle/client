import { IcNextCardBtmn } from "../../../../asset/icon";
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
        오른쪽에서 왼쪽으로 스와이핑 해서
        <br />
        새로운 대화 주제를 둘러보세요
      </St.Content>

      <St.CategoryLink to="/category">
        <IcNextCardBtmn />
      </St.CategoryLink>

      <St.HomeLink to="/">홈으로 돌아가기</St.HomeLink>
    </St.Card>
  );
}
