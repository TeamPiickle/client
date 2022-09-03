import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import { routePaths } from "../../../core/routes/path";
import Footer from "../../@common/Footer";
import Header from "../common/Header";
import PageProgressBar from "../common/PageProgressBar";
import { St } from "./style";

export default function EmailAuthentication() {
  const navigate = useNavigate();
  const [emailText, setEmailText] = useState<string>("");
  const [isEmailInValid, setIsEmailInValid] = useState<any>(false);
  const emailInput = useRef<HTMLInputElement | null>(null);

  const clickSendBtn = () => {
    if (emailInput.current && emailInput.current.value) {
      setEmailText(emailInput.current?.value);
    } else {
      setIsEmailInValid(true);
    }
  };

  useEffect(() => {
    emailText && verifyEmail(emailText);
  }, [emailText]);

  const verifyEmail = (email: string) => {
    const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    if (!email || regEmail.test(email) === false) {
      setIsEmailInValid(true);
    } else {
      navigate(`${routePaths.Join_}${routePaths.Join_EmailConfirm}`, {
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
        <St.TitleContainer>
          <St.TitleText>이메일 인증이 필요합니다</St.TitleText>
        </St.TitleContainer>
        <St.EmailAuthenticationContent>
          <St.DescriptionContainer>
            <St.ContentDescription>이메일</St.ContentDescription>
            {isEmailInValid ? <St.EssentialIcon>*</St.EssentialIcon> : <St.EssentialText>(필수)</St.EssentialText>}
          </St.DescriptionContainer>
          <St.InputContainer>
            <St.EmailInputForm id="email" placeholder="hello@piickle.com" ref={emailInput} />
            <St.SendBtn onClick={clickSendBtn}>인증메일 전송</St.SendBtn>
          </St.InputContainer>
        </St.EmailAuthenticationContent>
        {isEmailInValid && <St.WarningText>이메일 형식이 올바르지 않습니다</St.WarningText>}
      </St.EmailAuthenticationSection>
      <Footer />
    </St.Root>
  );
}
