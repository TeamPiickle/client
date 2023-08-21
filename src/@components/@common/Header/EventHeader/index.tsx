import * as St from "./style";

export default function EventHeader() {
  return (
    <St.EventHeaderContainer>
      <St.StatusWrapper>
        <St.Circle />
        NN명 참여 중
      </St.StatusWrapper>
      <St.StatusWrapper>
        <p>현재 대답할 수 있는 질문</p>
        <St.CountString>
          <St.CountNumber>{4}</St.CountNumber>개
        </St.CountString>
      </St.StatusWrapper>
    </St.EventHeaderContainer>
  );
}
