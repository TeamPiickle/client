/*
마지막 편집자: 22-10-04 joohaem
변경사항 및 참고:
  - 
  url로 접근하게 되면, 
  userEmail 이 string 으로 단언되었지만 null 값이 들어가
  에러가 나게 됩니다!
*/

import { useLocation } from "react-router-dom";

import { joinApi } from "../../../core/api/join";
import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import Footer from "../../@common/Footer";
import SubHeader from "../../@common/SubHeader";
import { St } from "./style";

export default function EmailConfirmPage() {
  const locationState = useLocation().state as { userEmail: string };
  const userEmail = locationState.userEmail;

  const repostEmail = async () => {
    await joinApi.postEmail(userEmail);
  };

  return (
    <St.Root>
      <SubHeader prevPage={prevPages[1].prevPage} rate={progressRate[1].rate} />
      <St.EmailConfirmContainer>
        <St.TitleText>인증 메일을 확인해주세요</St.TitleText>
        <St.ConfirmDescription>
          {userEmail}으로 인증 메일이 발송 되었습니다
          <br />
          메일의 링크를 클릭하면 회원가입을 진행할 수 있습니다
        </St.ConfirmDescription>
        <St.EmailErrorContainer>
          <St.SendErrorText>인증 메일이 오지 않았어요</St.SendErrorText>
          <St.ReSendBtn onClick={repostEmail}>인증메일 재전송</St.ReSendBtn>
        </St.EmailErrorContainer>
      </St.EmailConfirmContainer>
      <Footer />
    </St.Root>
  );
}
