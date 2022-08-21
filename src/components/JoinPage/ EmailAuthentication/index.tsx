import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import Footer from "../../common/Footer";
import Header from "../Header";
import PageProgressBar from "../PageProgressBar";
import { St } from "./style";

export default function EmailAuthentication() {
  const navigate = useNavigate();
  const [emailText, setEmailText] = useState<string>("");
  const [isEmailInValid, setIsEmailInValid] = useState<any>(false);
  const emailInput = useRef<HTMLInputElement | null>(null);

  const onChangeEmail = () => {
    console.log(emailInput.current);
    emailInput.current && setEmailText(emailInput.current.value);
  };
  const verifyEmail = () => {
    const email: string | null = emailInput.current && emailInput.current.value;
    const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    if (!email || regEmail.test(email) === false) {
      setIsEmailInValid(true);
    } else {
      navigate("/email-confirm", {
        state: {
          userEmail: emailText,
        },
      });
    }
  };

  return (
    <St.Root>
      <Header prevPage={prevPages[0].prevPage} />
      <PageProgressBar rate={progressRate[0].rate} />
      <St.EmailAuthenticationSection>
        <St.EmailAuthenticationTitle>
          <St.EmailAuthenticationTitleText>이메일 인증이 필요합니다</St.EmailAuthenticationTitleText>
        </St.EmailAuthenticationTitle>
        <St.EmailAuthenticationContent>
          <St.TitleContainer>
            <St.TitleText>이메일</St.TitleText>
            {isEmailInValid ? <St.EssentialIcon>*</St.EssentialIcon> : <St.EssentialText>(필수)</St.EssentialText>}
          </St.TitleContainer>
          <St.EmailAuthenticationInputContainer>
            <St.EmailAuthenticationInputForm
              id="email"
              placeholder="hello@piickle.com"
              ref={emailInput}
              onChange={onChangeEmail}
              value={emailText}
            />
            <St.SendBtn onClick={verifyEmail}>인증메일 전송</St.SendBtn>
          </St.EmailAuthenticationInputContainer>
        </St.EmailAuthenticationContent>
        {isEmailInValid && <St.EmailWarningText>이메일 형식이 올바르지 않습니다</St.EmailWarningText>}
      </St.EmailAuthenticationSection>
      <Footer />
    </St.Root>
  );
}
