import { St } from "./style";

export default function EmailAuthentication() {
  return (
    <St.EmailAuthenticationSection>
      <St.EmailAuthenticationTitle>
        <St.EmailAuthenticationTitleText>이메일 인증이 필요합니다</St.EmailAuthenticationTitleText>
      </St.EmailAuthenticationTitle>
      <St.EmailAuthenticationContent>
        <St.EmailAuthenticationContentTitle>이메일</St.EmailAuthenticationContentTitle>
        <St.EmailAuthenticationInputContainer>
          <St.EmailAuthenticationInputForm placeholder="hello@piickle.com" />
          <St.SendBtn>인증메일 전송</St.SendBtn>
        </St.EmailAuthenticationInputContainer>
      </St.EmailAuthenticationContent>
    </St.EmailAuthenticationSection>
  );
}
