/*
마지막 편집자: 22-07-14 joohaem
변경사항 및 참고:
  - "react-hook-form" 도입 고려해도 좋을 것 같습니다
    
고민점:
  - 
*/

import { useState } from "react";

import { St } from "./style";

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState({ emailError: "", passwordError: "" });

  const submitLoginForm = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <St.Section onSubmit={submitLoginForm}>
      <St.Title>로그인</St.Title>
      <St.Form>
        <St.Label htmlFor="email">이메일</St.Label>
        <St.Input id="email" type="text" />
        {errorMessage.emailError && <St.ErrorMessage>{errorMessage.emailError}</St.ErrorMessage>}
        <St.Label htmlFor="password">비밀번호</St.Label>
        <St.Input id="password" type="password" />
        {errorMessage.passwordError && <St.ErrorMessage>{errorMessage.passwordError}</St.ErrorMessage>}
        <St.LoginBtn type="submit">로그인하기</St.LoginBtn>
      </St.Form>
      <St.LinkWrapper>
        <St.Link>회원가입</St.Link> <St.Delimeter>|</St.Delimeter> <St.Link>비밀번호 재설정</St.Link>
      </St.LinkWrapper>
    </St.Section>
  );
}
