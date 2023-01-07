import { EmailInvalidMessage, emailInvalidMessage } from "../../../../core/join/emailErrorMessage";
import { St } from "./style";

interface UserEmailProps {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  invalidType: EmailInvalidMessage;
}

export default function UserEmail(props: UserEmailProps) {
  const { query, onChange, invalidType } = props;
  const IS_INVALID = invalidType !== emailInvalidMessage.PASS && invalidType !== emailInvalidMessage.NULL;

  return (
    <St.EmailContainer>
      <St.EmailTitleWrapper>
        {/* <St.EmailTitleText>이메일 아이디 (필수)</St.EmailTitleText> */}
        <St.EmailTitleText>이메일 (필수)</St.EmailTitleText>
        <St.EmailDescription>※ 이메일은 아이디로 사용됩니다</St.EmailDescription>
      </St.EmailTitleWrapper>
      {/* <St.EmailInputForm>{text}</St.EmailInputForm> */}
      <St.InputContainer>
        <St.EmailInput
          id="email"
          placeholder="hello@piickle.com"
          value={query}
          onChange={onChange}
          isemailinvalid={IS_INVALID}
        />
        <St.WarningText>{IS_INVALID && invalidType}</St.WarningText>
      </St.InputContainer>
    </St.EmailContainer>
  );
}
