import { useState } from "react";

import IcBtnCheck from "../../asset/icon/IcBtnCheck";
import { cardCollectionApi } from "../../core/api/cardCollection";
import useToast from "../@common/Toast/hooks/useToast";
import * as St from "./style";

export default function EventPage() {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [isComplete, setIsCompleted] = useState<boolean>(false);

  const LotInput = () => {
    const [email, setEmail] = useState<string>("");
    const { showToast } = useToast();

    const handleSubmitEmail = () => {
      if (email.length) {
        cardCollectionApi.addPrizeEntry(isCheck);
        setIsCompleted(true);
      } else {
        showToast({ message: "❗️ 이메일을 입력해주세요!", duration: 2.5 });
      }
    };

    return (
      <St.Box>
        <St.Title>이메일을 남겨주세요!</St.Title>
        <St.SubTitle>
          하단에 이메일을 남겨주시면 경품에 응모가 됩니다
          <br />
          9월 3일 당첨된 분에 한해서 기프티콘이
          <br />
          기입하신 이메일로 전달됩니다
        </St.SubTitle>
        <St.EmailText>
          계속해서 업데이트 되는 Piickle의 모습 궁금하지 않으세요?
          <br />
          완성되면 이메일로 알림을 보내드릴게요!
        </St.EmailText>
        <St.AgreeWrapper onClick={() => setIsCheck(!isCheck)}>
          <IcBtnCheck isChecked={isCheck} />
          <St.AgreeText>피클 소식 받아보기</St.AgreeText>
        </St.AgreeWrapper>
        <St.InputWrapper>
          <St.Input
            placeholder="teampiickle@piickle.com"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <St.Button onClick={handleSubmitEmail}>완료</St.Button>
        </St.InputWrapper>
      </St.Box>
    );
  };

  const LotComplete = () => {
    return (
      <St.Box>
        <St.Title>경품 응모 완료!</St.Title>
        <St.SubTitle>
          참여해주셔서 감사합니다
          <br />
          앞으로 Piickle 많이 사랑해주세요🥰
        </St.SubTitle>
        <St.Link href="/">피클 웹사이트 둘러보기</St.Link>
      </St.Box>
    );
  };

  return <St.Root>{isComplete ? <LotComplete /> : <LotInput />}</St.Root>;
}
