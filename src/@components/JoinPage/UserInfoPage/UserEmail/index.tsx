import { St } from "./style";

interface UserEmailProps {
  text: string;
}

export default function UserEmail(props: UserEmailProps) {
  const { text } = props;

  return (
    <St.EmailContainer>
      <St.EmailTitleWrapper>
        <St.EmailTitleText>이메일 아이디 (필수)</St.EmailTitleText>
      </St.EmailTitleWrapper>
      <St.EmailInputForm>{text}</St.EmailInputForm>
    </St.EmailContainer>
  );
}
