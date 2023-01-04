import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import { joinApi } from "../../../../core/api/join";
import { EmailInvalidMessage, emailInvalidMessage } from "../../../../core/join/emailErrorMessage";
import checkEmailInvalid from "../../../../util/checkInvalidEmail";
import { useDebounce } from "../../../@common/hooks/useDebounce";
import { St } from "./style";

interface UserEmailProps {
  setIsEmailInvalid: (email: string) => void;
}

export default function UserEmail(props: UserEmailProps) {
  const { setIsEmailInvalid } = props;
  const { query, setQuery, debouncedQuery } = useDebounce<string>("");
  const [emailInvalidType, setEmailInvalidType] = useState<EmailInvalidMessage>(emailInvalidMessage.NULL);

  useEffect(() => {
    // 1초 후, 형식 검사
    if (debouncedQuery !== "" && checkEmailInvalid(debouncedQuery)) {
      setEmailInvalidType(emailInvalidMessage.form);
    } else {
      if (debouncedQuery !== "") checkEmailExist(debouncedQuery);
      setEmailInvalidType(emailInvalidMessage.NULL);
    }
  }, [debouncedQuery]);

  const checkEmailExist = async (email: string) => {
    try {
      const response: AxiosResponse = await joinApi.fetchEmailValid(email);
      response.data.isAlreadyExisting ? setEmailInvalidType(emailInvalidMessage.duplicaton) : setIsEmailInvalid(email);
    } catch (error) {
      if (!axios.isAxiosError(error)) return;
    }
  };

  const changeEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentText = e.target.value;
    setQuery(currentText);
  };

  return (
    <St.EmailContainer>
      <St.EmailTitleWrapper>
        <St.EmailTitleText>이메일 (필수)</St.EmailTitleText>
        <St.EmailDescription>※ 이메일은 아이디로 사용됩니다</St.EmailDescription>
      </St.EmailTitleWrapper>
      <St.InputContainer>
        <St.EmailInput
          id="email"
          placeholder="hello@piickle.com"
          value={query}
          onChange={(e) => changeEmailInput(e)}
          emailInvalid={emailInvalidType}
        />
        <St.WarningText>{emailInvalidType}</St.WarningText>
      </St.InputContainer>
    </St.EmailContainer>
  );
}
