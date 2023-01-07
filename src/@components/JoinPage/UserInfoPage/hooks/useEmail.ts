import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import { joinApi } from "../../../../core/api/join";
import { EmailInvalidMessage, emailInvalidMessage } from "../../../../core/join/userInfoInputErrorMessage";
import checkEmailInvalid from "../../../../util/checkInvalidEmail";
import { useDebounce } from "../../../@common/hooks/useDebounce";

export default function useEmail() {
  const { query, setQuery, debouncedQuery } = useDebounce("");

  const [emailInvalidType, setEmailInvalidType] = useState<EmailInvalidMessage>(emailInvalidMessage.NULL);

  useEffect(() => {
    // 비어 있으면 NULL
    if (debouncedQuery === "") {
      setEmailInvalidType(emailInvalidMessage.NULL);
      return;
    }
    // 형식 검사
    if (checkEmailInvalid(debouncedQuery)) {
      setEmailInvalidType(emailInvalidMessage.form);
      return;
    }
    checkEmailExist(debouncedQuery);
  }, [debouncedQuery]);

  const checkEmailExist = async (email: string) => {
    try {
      const response: AxiosResponse = await joinApi.fetchEmailValid(email);
      if (response.data.isAlreadyExisting) {
        setEmailInvalidType(emailInvalidMessage.duplicaton);
        return;
      }
      setEmailInvalidType(emailInvalidMessage.PASS);
      return;
    } catch (error) {
      if (!axios.isAxiosError(error)) return;
      // TODO :: 에러처리
    }
  };

  const handleChangeEmailInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentText = e.target.value;
    setQuery(currentText);
  };

  const alertEmptyEmailInputValue = () => {
    setEmailInvalidType(emailInvalidMessage.nullError);
  };

  return { query, handleChangeEmailInputValue, emailInvalidType, alertEmptyEmailInputValue };
}
