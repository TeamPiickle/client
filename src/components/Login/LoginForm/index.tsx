/*
마지막 편집자: 22-07-14 joohaem
변경사항 및 참고:
  - "react-hook-form" 도입 고려해도 좋을 것 같습니다
    
고민점:
  - 
*/

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { real } from "../../../core/api/login";
import { loginState } from "../../../core/atom/login";
import { St } from "./style";

export default function LoginForm() {
  const setIsLogin = useSetRecoilState(loginState);
  const navigate = useNavigate();
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [errorMessage, setErrorMessage] = useState({ emailError: "", passwordError: "" });

  const submitLoginForm = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    const { status, message, data } = await real.postLogin(inputRefs.current[0].value, inputRefs.current[1].value);

    switch (status) {
      case 200:
        LoginNGoMain(data);
        break;
      case 400:
        setErrorMessage((prev) => ({ ...prev, passwordError: "필요한 값이 없습니다." }));
        break;
      case 401:
        if (message === "존재하지 않는 email 입니다.")
          setErrorMessage((prev) => ({ ...prev, emailError: "존재하지 않는 email 입니다." }));
        else if (message === "비밀번호가 일치하지 않습니다.")
          setErrorMessage((prev) => ({ ...prev, passwordError: "비밀번호가 일치하지 않습니다." }));
        break;
      default:
        throw new Error("로그인 에러");
    }
  };

  const LoginNGoMain = (data: { accessToken: string }) => {
    localStorage.setItem("piickle-token", data.accessToken);
    setIsLogin(true);
    navigate("/");
  };

  return (
    <St.Section onSubmit={submitLoginForm}>
      <St.Title>로그인</St.Title>
      <St.Form>
        <St.Label htmlFor="email">이메일</St.Label>
        <St.Input
          id="email"
          type="text"
          ref={(el) => {
            if (el !== null) inputRefs.current[0] = el;
          }}
        />
        {errorMessage.emailError && <St.ErrorMessage>{errorMessage.emailError}</St.ErrorMessage>}
        <St.Label htmlFor="password">비밀번호</St.Label>
        <St.Input
          id="password"
          type="password"
          ref={(el) => {
            if (el !== null) inputRefs.current[1] = el;
          }}
        />
        {errorMessage.passwordError && <St.ErrorMessage>{errorMessage.passwordError}</St.ErrorMessage>}
        <St.LoginBtn type="submit">로그인하기</St.LoginBtn>
      </St.Form>
      <St.LinkWrapper>
        <St.Link>회원가입</St.Link> <St.Delimeter>|</St.Delimeter> <St.Link>비밀번호 재설정</St.Link>
      </St.LinkWrapper>
    </St.Section>
  );
}
