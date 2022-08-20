import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import ErrorPopup from "../ErrorPopup";
import { St } from "./style";

export default function EmailAuthentication() {
  const navigate = useNavigate();
  const [emailText, setEmailText] = useState<string>("");
  const [isPopupOpen, setIsPopupOpen] = useState<any>(false);
  const emailInput = useRef<HTMLInputElement | null>(null);

  const onChangeEmail = () => {
    console.log(emailInput.current);
    emailInput.current && setEmailText(emailInput.current.value);
  };

  useEffect(() => console.log(emailText), [emailText]);

  const verifyEmail = () => {
    const email: string | null = emailInput.current && emailInput.current.value;
    const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    email && console.log(regEmail.test(email));
    console.log(email);

    if (!email || regEmail.test(email) === false) {
      setIsPopupOpen(true);
    } else {
      navigate("/email-confirm");
    }
  };

  return (
    <St.Root>
      <St.EmailAuthenticationSection>
        <St.EmailAuthenticationTitle>
          <St.EmailAuthenticationTitleText>이메일 인증이 필요합니다</St.EmailAuthenticationTitleText>
        </St.EmailAuthenticationTitle>
        <St.EmailAuthenticationContent>
          <St.EmailAuthenticationContentTitle>이메일</St.EmailAuthenticationContentTitle>
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
      </St.EmailAuthenticationSection>
      {isPopupOpen && <ErrorPopup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />}
    </St.Root>
  );
}
