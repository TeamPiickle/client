import { St } from "./style";

export default function EmailConfirm() {
  return (
    <St.EmailConfirmContainer>
      <St.EmailConfirmTitle>인증 메일을 확인해주세요</St.EmailConfirmTitle>
      <St.EmailConfirmDescription>
        00으로 인증 메일이 발송 되었습니다
        <br />
        메일의 링크를 클릭하면 회원가입을 진행할 수 있습니다
      </St.EmailConfirmDescription>
    </St.EmailConfirmContainer>
  );
}
