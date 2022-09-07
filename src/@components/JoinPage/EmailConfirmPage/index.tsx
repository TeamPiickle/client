import { useLocation, useNavigate } from "react-router-dom";

import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import Footer from "../../@common/Footer";
import Header from "../common/Header";
import PageProgressBar from "../common/PageProgressBar";
import { St } from "./style";

export default function EmailConfirmPage() {
  const navigate = useNavigate();
  const locationState = useLocation().state as { userEmail: string };
  const userEmail = locationState.userEmail;

  return (
    <St.Root>
      <Header prevPage={prevPages[1].prevPage} />
      <PageProgressBar rate={progressRate[1].rate} />
      <St.EmailConfirmContainer>
        <St.TitleText>인증 메일을 확인해주세요</St.TitleText>
        <St.ConfirmDescription>
          {userEmail}으로 인증 메일이 발송 되었습니다
          <br />
          메일의 링크를 클릭하면 회원가입을 진행할 수 있습니다
        </St.ConfirmDescription>
        <St.EmailErrorContainer>
          <St.SendErrorText>인증 메일이 오지 않았어요</St.SendErrorText>
          <St.ReSendBtn>인증메일 재전송</St.ReSendBtn>
        </St.EmailErrorContainer>
      </St.EmailConfirmContainer>
      <Footer />
    </St.Root>
  );
}
