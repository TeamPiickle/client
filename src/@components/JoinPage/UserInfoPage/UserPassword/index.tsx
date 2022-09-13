import { useEffect } from "react";

import { St } from "./style";

type invalidType = {
  input: boolean;
  confirm: boolean;
};

interface UserPasswordProps {
  isPasswordInvalid: invalidType;
  checkInputInvalid: () => void;
  checkConfirmInvalid: () => void;
  debouncedQuery: string;
  changePasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changePasswordConfirm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentStep: string;
  isUnfilled: invalidType;
}
export default function UserPassword(props: UserPasswordProps) {
  const {
    isPasswordInvalid,
    checkInputInvalid,
    checkConfirmInvalid,
    debouncedQuery,
    changePasswordInput,
    changePasswordConfirm,
    currentStep,
    isUnfilled,
  } = props;
  useEffect(() => {
    if (currentStep === "input") {
      checkInputInvalid();
    }
    if (currentStep === "confirm") {
      checkConfirmInvalid();
    }
  }, [debouncedQuery]);

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
          onChange={changePasswordInput}
          isFocused={isPasswordInvalid.input}
        />
        {isPasswordInvalid.input &&
          (isUnfilled.input ? (
            <St.ErrorText>비밀번호를 입려해주세요</St.ErrorText>
          ) : (
            <St.ErrorText>영문, 숫자, 특수 문자를 하나 이상씩 조합해서 6자 이상으로 입력해주세요.</St.ErrorText>
          ))}
      </St.InputWrapper>
      <St.InputWrapper>
        <St.PasswordInputForm
          type="password"
          placeholder="비밀번호 확인"
          onChange={changePasswordConfirm}
          isFocused={isPasswordInvalid.confirm}
        />
        {isPasswordInvalid.confirm && <St.ErrorText>비밀번호가 일치하지 않습니다</St.ErrorText>}
      </St.InputWrapper>
    </St.PasswordContainer>
  );
}
