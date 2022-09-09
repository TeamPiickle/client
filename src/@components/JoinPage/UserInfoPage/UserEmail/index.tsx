import { St } from "./style";

export default function UserEmail() {
  return (
    <St.EmailContainer>
      <St.EmailTitleWrapper>
        <St.EmailTitleText>이메일 아이디 (필수)</St.EmailTitleText>
      </St.EmailTitleWrapper>
      <St.EmailInputForm placeholder="hello@piickle.com" />
    </St.EmailContainer>
  );
}
