import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import { routePaths } from "../../../core/routes/path";
import checkEmailInvalid from "../../../util/checkInvalidEmail";
import Footer from "../../@common/Footer";
import { useDebounce } from "../../@common/hooks/useDebounce";
import Header from "../common/Header";
import PageProgressBar from "../common/PageProgressBar";
import { St } from "./style";

export default function EmailAuthentication() {
  const navigate = useNavigate();
  const { query, setQuery, debouncedQuery } = useDebounce("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  useEffect(() => {
    // 0.5초 이내로 형식 검사
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
    if (isEmailInvalid) return;

    navigate(`${routePaths.Join_}${routePaths.Join_EmailConfirm}`, {
      state: {
        userEmail: query,
      },
    });
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
