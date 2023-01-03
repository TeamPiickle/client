import axios from "axios";
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
      setEmailInvalidType(emailInvalidMessage.NULL);
    }
  }, [debouncedQuery]);

  const changeEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentText = e.target.value;
    setIsEmailInvalid(currentText);
    setQuery(currentText);
  };

  const clickSendBtn = async () => {
    // 에러 상태일 때 실행 취소
    if (emailInvalidType || query === "") return;

    setQuery(query);

    // TODO :: 로딩처리 필요할 듯
    try {
      await joinApi.postEmail(query);
    } catch (error) {
      if (!axios.isAxiosError(error)) return;
      switch (error.response?.data.message) {
        case "이미 가입된 메일입니다.":
          setEmailInvalidType(emailInvalidMessage.duplicaton);
          return;
        default:
          setEmailInvalidType(emailInvalidMessage.form);
          return;
      }
    }
  };

  return (
    <St.EmailContainer>
      <St.EmailAuthenticationContent>
        <St.DescriptionContainer>
          <St.ContentDescription>이메일</St.ContentDescription>
          {emailInvalidType ? <St.EssentialIcon>*</St.EssentialIcon> : <St.EssentialText>(필수)</St.EssentialText>}
        </St.DescriptionContainer>
        <St.InputContainer>
          <St.EmailInput
            id="email"
            placeholder="hello@piickle.com"
            value={query}
            onChange={(e) => changeEmailInput(e)}
          />
        </St.InputContainer>
      </St.EmailAuthenticationContent>
      <St.WarningText>{emailInvalidType}</St.WarningText>
    </St.EmailContainer>
  );
}

/*
        <St.SendBtn onClick={clickSendBtn} className="GTM_SendEmail">
          인증메일 전송
        </St.SendBtn>

*/
