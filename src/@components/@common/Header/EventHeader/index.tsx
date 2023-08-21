import * as St from "./style";

interface HeaderProps {
  participants: number;
  questions: number;
}

export default function EventHeader(props: HeaderProps) {
  const { participants, questions } = props;
  return (
    <St.EventHeaderContainer>
      <St.StatusWrapper>
        <St.Circle />
        {participants}명 참여 중
      </St.StatusWrapper>
      <St.StatusWrapper>
        <p>현재 대답할 수 있는 질문</p>
        <St.CountString>
          <St.CountNumber>{questions}</St.CountNumber>개
        </St.CountString>
      </St.StatusWrapper>
    </St.EventHeaderContainer>
  );
}
