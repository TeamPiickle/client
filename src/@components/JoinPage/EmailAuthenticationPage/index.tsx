import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import { joinApi } from "../../../core/api/join";
import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import { routePaths } from "../../../core/routes/path";
import { useOutletContexts } from "../../../types/users";
import checkEmailInvalid from "../../../util/checkInvalidEmail";
import Footer from "../../@common/Footer";
import { useDebounce } from "../../@common/hooks/useDebounce";
import Header from "../common/Header";
import PageProgressBar from "../common/PageProgressBar";
import { St } from "./style";
export default function EmailAuthentication() {
  const navigate = useNavigate();
  const { query, setQuery, debouncedQuery } = useDebounce<string>("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const { setUserEmail } = useOutletContext<useOutletContexts>();

  useEffect(() => {
    // 1초 후, 형식 검사
    if (debouncedQuery !== "" && checkEmailInvalid(debouncedQuery)) {
      setIsEmailInvalid(true);
    } else {
      setIsEmailInvalid(false);
    }
  }, [debouncedQuery]);

  const changeEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentText = e.target.value;
    setQuery(currentText);
  };

  const clickSendBtn = () => {
    // 에러 상태일 때 실행 취소
    if (isEmailInvalid || query === "") return;

    setUserEmail(query);

    navigate(`${routePaths.Join_}${routePaths.Join_EmailConfirm}`, {
      state: {
        userEmail: query,
      },
    });

    postEmail();
  };

  const postEmail = () => {
    const postingEmail = {
      email: query,
    };
    joinApi.postEmail(postingEmail);
  };

  return (
    <St.Root>
      <Header prevPage={prevPages[0].prevPage} />
      <PageProgressBar rate={progressRate[0].rate} />
      <St.EmailAuthenticationSection>
        <St.TitleContainer>
          <St.TitleText>이메일 인증이 필요합니다</St.TitleText>
        </St.TitleContainer>
        <St.EmailAuthenticationContent>
          <St.DescriptionContainer>
            <St.ContentDescription>이메일</St.ContentDescription>
            {isEmailInvalid ? <St.EssentialIcon>*</St.EssentialIcon> : <St.EssentialText>(필수)</St.EssentialText>}
          </St.DescriptionContainer>
          <St.InputContainer>
            <St.EmailInput
              id="email"
              placeholder="hello@piickle.com"
              value={query}
              onChange={(e) => changeEmailInput(e)}
            />
            <St.SendBtn onClick={clickSendBtn}>인증메일 전송</St.SendBtn>
          </St.InputContainer>
        </St.EmailAuthenticationContent>
        {isEmailInvalid && <St.WarningText>이메일 형식이 올바르지 않습니다</St.WarningText>}
      </St.EmailAuthenticationSection>
      <Footer />
    </St.Root>
  );
}
