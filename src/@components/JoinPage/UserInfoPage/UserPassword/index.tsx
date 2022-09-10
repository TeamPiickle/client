import { useEffect, useState } from "react";

import checkPasswordInvalid from "../../../../util/checkInvalidPassword";
import { useDebounce } from "../../../@common/hooks/useDebounce";
import { St } from "./style";

interface isInvalidProps {
  isPasswordInvalid: boolean[];
  setIsPasswordInvalid: React.Dispatch<React.SetStateAction<boolean[]>>;
}
export default function UserPassword(props: isInvalidProps) {
  const { isPasswordInvalid, setIsPasswordInvalid } = props;
  const { query, setQuery, debouncedQuery } = useDebounce("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentStep, setCurrentStep] = useState("input");

  useEffect(() => {
    if (currentStep === "input") {
      checkInputInvalid();
    }
    if (currentStep === "confirm") {
      checkConfirmInvalid();
    }
  }, [debouncedQuery]);

  const checkInputInvalid = () => {
    if (debouncedQuery !== "" && checkPasswordInvalid(debouncedQuery)) {
      setIsPasswordInvalid((prev) => [true, prev[1]]);
    } else {
      setIsPasswordInvalid((prev) => [false, prev[1]]);
    }
  };

  const checkConfirmInvalid = () => {
    if (debouncedQuery !== "" && query !== currentPassword) {
      setIsPasswordInvalid((prev) => [prev[0], true]);
    } else {
      setIsPasswordInvalid((prev) => [prev[0], false]);
    }
  };

  const changePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentStep === "confirm") {
      setCurrentStep("input");
    }
    setQuery(e.target.value);
    setCurrentPassword(e.target.value);
  };

  const changePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(currentPassword);
    if (currentStep === "input") {
      setCurrentStep("confirm");
    }
    setQuery(e.target.value);
    return;
  };
  return (
    <St.PasswordContainer>
      <St.PasswordTitleWrapper>
        <St.PasswordTitleText>비밀번호 및 확인 (필수)</St.PasswordTitleText>
        <St.PasswordDescription>※ 영문,숫자, 특수문자 조합 6자 이상</St.PasswordDescription>
      </St.PasswordTitleWrapper>
      <St.PasswordInputForm
        type="password"
        placeholder="비밀번호 입력"
        onChange={changePasswordInput}
        isFocused={isPasswordInvalid[0]}
      />
      {isPasswordInvalid[0] && (
        <St.ErrorText>영문, 숫자, 특수 문자를 하나 이상씩 조합해서 6자 이상으로 입력해주세요.</St.ErrorText>
      )}
      <St.PasswordInputForm
        type="pxassword"
        placeholder="비밀번호 확인"
        onChange={changePasswordConfirm}
        isFocused={isPasswordInvalid[1]}
      />
      {isPasswordInvalid[1] && <St.ErrorText>비밀번호가 일치하지 않습니다</St.ErrorText>}
    </St.PasswordContainer>
  );
}
