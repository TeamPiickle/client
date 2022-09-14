import { St } from "./style";

export default function UserEmail() {
  const userEmail = window.location.search.substring(6);

  return (
    <St.EmailContainer>
      <St.EmailTitleWrapper>
        <St.EmailTitleText>이메일 아이디 (필수)</St.EmailTitleText>
      </St.EmailTitleWrapper>
      <St.EmailInputForm placeholder={userEmail} />
    </St.EmailContainer>
  );
}
