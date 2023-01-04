import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import { joinApi } from "../../../../core/api/join";
import { EmailInvalidMessage, emailInvalidMessage } from "../../../../core/join/emailErrorMessage";
import checkEmailInvalid from "../../../../util/checkInvalidEmail";
import { St } from "./style";

interface UserEmailProps {
  query: string;
  debouncedQuery: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkIsEmailInvalid: (isInvalid: boolean) => void;
}

export default function UserEmail(props: UserEmailProps) {
  const { query, debouncedQuery, onChange, checkIsEmailInvalid } = props;
  const [emailInvalidType, setEmailInvalidType] = useState<EmailInvalidMessage>(emailInvalidMessage.NULL);

  useEffect(() => {
    // 1초 후, 형식 검사
    if (debouncedQuery === "") {
      setEmailInvalidType(emailInvalidMessage.NULL);
      checkIsEmailInvalid(true);
      return;
    }
    if (checkEmailInvalid(debouncedQuery)) {
      checkIsEmailInvalid(true);
      setEmailInvalidType(emailInvalidMessage.form);
      return;
    }
    checkEmailExist(debouncedQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  const checkEmailExist = async (email: string) => {
    try {
      const response: AxiosResponse = await joinApi.fetchEmailValid(email);
      if (response.data.isAlreadyExisting) {
        checkIsEmailInvalid(true);
        setEmailInvalidType(emailInvalidMessage.duplicaton);
        return;
      }
      if (!response.data.isAlreadyExisting) {
        checkIsEmailInvalid(false);
        setEmailInvalidType(emailInvalidMessage.NULL);
      }
    } catch (error) {
      if (!axios.isAxiosError(error)) return;
    }
  };

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
          emailInvalid={emailInvalidType}
        />
        <St.WarningText>{emailInvalidType}</St.WarningText>
      </St.InputContainer>
    </St.EmailContainer>
  );
}
