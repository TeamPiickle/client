import { useLocation } from "react-router-dom";

import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import Footer from "../../common/Footer";
import Header from "../Header";
import PageProgressBar from "../PageProgressBar";
import { St } from "./style";

export default function EmailConfirm() {
  console.log(prevPages[0].prevPage);
  const location = useLocation();
  const state = location.state as { userEmail: string };
  const userEmail = state.userEmail;
  return (
    <St.Root>
      <Header prevPage={prevPages[1].prevPage} />
      <PageProgressBar rate={progressRate[1].rate} />
      <St.EmailConfirmContainer>
        <St.EmailConfirmTitle>인증 메일을 확인해주세요</St.EmailConfirmTitle>
        <St.EmailConfirmDescription>
          {userEmail}으로 인증 메일이 발송 되었습니다
          <br />
          메일의 링크를 클릭하면 회원가입을 진행할 수 있습니다
        </St.EmailConfirmDescription>
        <St.EmailErrorContainer>
          <St.EmailSendErrorText>인증 메일이 오지 않았어요</St.EmailSendErrorText>
          <St.EmailReSendBtn>인증메일 재전송</St.EmailReSendBtn>
        </St.EmailErrorContainer>
      </St.EmailConfirmContainer>
      <Footer />
    </St.Root>
  );
}
