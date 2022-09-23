import { useNavigate } from "react-router-dom";

import { routePaths } from "../../../core/routes/path";
import useLoginForm from "../@hooks/useLoginForm";
import { St } from "./style";

export default function LoginForm() {
  const { inputRefs, errorMessage, submitLoginForm } = useLoginForm();
  const navigate = useNavigate();

  const goJoinPage = () => {
    navigate(`${routePaths.Join_}${routePaths.Join_EmailAuthentication}`);
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
        <St.Link onClick={goJoinPage}>회원가입</St.Link> <St.Delimeter>|</St.Delimeter>{" "}
        <St.Link>
          <a href="https://www.notion.so/13e1fd1b107241e3921f29e50f5144e0">비밀번호 재설정</a>
        </St.Link>
      </St.LinkWrapper>
    </St.Section>
  );
}
