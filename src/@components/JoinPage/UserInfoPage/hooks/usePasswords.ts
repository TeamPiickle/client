import { useEffect, useState } from "react";

import {
  PasswordConfirmInvalidMessage,
  passwordConfirmInvalidMessage,
  PasswordInvalidMessage,
  passwordInvalidMessage,
} from "../../../../core/join/userInfoInputErrorMessage";
import checkPasswordInvalid from "../../../../util/checkInvalidPassword";
import { useDebounce } from "../../../@common/hooks/useDebounce";

export default function usePasswords() {
  const { query: pwQuery, setQuery: setPwQuery, debouncedQuery: debouncedPwQuery } = useDebounce("");
  const {
    query: pwConfirmQuery,
    setQuery: setPwConfirmQuery,
    debouncedQuery: debouncedPwConfirmQuery,
  } = useDebounce("");

  const [pwInvalidType, setPwInvalidType] = useState<PasswordInvalidMessage>(passwordInvalidMessage.NULL);
  const [pwConfirmInvalidType, setPwConfirmInvalidType] = useState<PasswordConfirmInvalidMessage>(
    passwordConfirmInvalidMessage.NULL,
  );

  useEffect(() => {
    // 비어 있으면 NULL
    if (debouncedPwQuery === "") {
      setPwInvalidType(passwordInvalidMessage.NULL);
      return;
    }
    // 형식 검사
    if (checkPasswordInvalid(debouncedPwQuery)) {
      setPwInvalidType(passwordInvalidMessage.form);
      return;
    }
    setPwInvalidType(passwordInvalidMessage.PASS);
  }, [debouncedPwQuery]);

  useEffect(() => {
    // 비어 있으면 NULL
    if (debouncedPwConfirmQuery === "") {
      setPwConfirmInvalidType(passwordConfirmInvalidMessage.NULL);
      return;
    }
    // 비밀번호와 매칭 검사
    if (pwQuery !== debouncedPwConfirmQuery) {
      setPwConfirmInvalidType(passwordConfirmInvalidMessage.noMatch);
      return;
    }
    setPwConfirmInvalidType(passwordConfirmInvalidMessage.PASS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPwConfirmQuery]);

  const handleChangePwInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwQuery(e.target.value);
  };
  const handleChangePwConfirmInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwConfirmQuery(e.target.value);
  };

  const alertEmptyPwInputValue = () => {
    setPwInvalidType(passwordInvalidMessage.nullPwError);
  };
  const alertEmptyPwConfirmInputValue = () => {
    setPwConfirmInvalidType(passwordConfirmInvalidMessage.nullPwConfirmError);
  };

  return {
    pwQuery,
    handleChangePwInputValue,
    pwInvalidType,
    alertEmptyPwInputValue,
    pwConfirmQuery,
    handleChangePwConfirmInputValue,
    pwConfirmInvalidType,
    alertEmptyPwConfirmInputValue,
  };
}
