import { useLocation } from "react-router-dom";

import { St } from "./style";

export default function UserEmail() {
  const { search } = useLocation();
  const userEmail = new URLSearchParams(search).get("email") as string;

  return (
    <St.EmailContainer>
      <St.EmailTitleWrapper>
        <St.EmailTitleText>이메일 아이디 (필수)</St.EmailTitleText>
      </St.EmailTitleWrapper>
      <St.EmailInputForm>{userEmail}</St.EmailInputForm>
    </St.EmailContainer>
  );
}
