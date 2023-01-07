import {
  PasswordConfirmInvalidMessage,
  passwordConfirmInvalidMessage,
  PasswordInvalidMessage,
  passwordInvalidMessage,
} from "../../../../core/join/userInfoInputErrorMessage";
import { St } from "./style";

interface UserPasswordProps {
  pwQuery: string;
  handleChangePwInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pwInvalidType: PasswordInvalidMessage;
  pwConfirmQuery: string;
  handleChangePwConfirmInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pwConfirmInvalidType: PasswordConfirmInvalidMessage;
}

export default function UserPassword(props: UserPasswordProps) {
  const {
    pwQuery,
    handleChangePwInputValue,
    pwInvalidType,
    pwConfirmQuery,
    handleChangePwConfirmInputValue,
    pwConfirmInvalidType,
  } = props;
  const IS_PW_INVALID = pwInvalidType !== passwordInvalidMessage.PASS && pwInvalidType !== passwordInvalidMessage.NULL;
  const IS_PW_CONFIRM_INVALID =
    pwConfirmInvalidType !== passwordConfirmInvalidMessage.PASS &&
    pwConfirmInvalidType !== passwordConfirmInvalidMessage.NULL;

  return (
    <St.PasswordContainer>
      <St.PasswordTitleWrapper>
        <St.PasswordTitleText>비밀번호 및 확인 (필수)</St.PasswordTitleText>
        <St.PasswordDescription>※ 영문,숫자, 특수문자 조합 6자 이상</St.PasswordDescription>
      </St.PasswordTitleWrapper>
      <St.InputWrapper>
        <St.PasswordInputForm
          type="password"
          placeholder="비밀번호 입력"
          value={pwQuery}
          onChange={handleChangePwInputValue}
          isinvalid={IS_PW_INVALID}
        />
        {IS_PW_INVALID && <St.ErrorText>{pwInvalidType}</St.ErrorText>}
      </St.InputWrapper>
      <St.InputWrapper>
        <St.PasswordInputForm
          type="password"
          placeholder="비밀번호 확인"
          value={pwConfirmQuery}
          onChange={handleChangePwConfirmInputValue}
          isinvalid={IS_PW_CONFIRM_INVALID}
        />
        {IS_PW_CONFIRM_INVALID && <St.ErrorText>{pwConfirmInvalidType}</St.ErrorText>}
      </St.InputWrapper>
    </St.PasswordContainer>
  );
}
