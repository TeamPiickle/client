import { useNavigate, useOutletContext } from "react-router-dom";

import { subHeaderInfo } from "../../../core/join/subHeaderInfo";
import {
  emailInvalidMessage,
  passwordConfirmInvalidMessage,
  passwordInvalidMessage,
} from "../../../core/join/userInfoInputErrorMessage";
import { routePaths } from "../../../core/routes/path";
import Footer from "../../@common/Footer";
import SubHeader from "../../@common/SubHeader";
import { UserInfoFormDataContext } from "..";
import useEmail from "./hooks/useEmail";
import usePasswords from "./hooks/usePasswords";
import { St } from "./style";
import UserEmail from "./UserEmail";
import UserPassword from "./UserPassword";

export const enum Step {
  input = "input",
  confirm = "confirm",
}

export default function UserInfo() {
  // const { search } = useLocation();
  // const userEmail = new URLSearchParams(search).get("email") as string;
  const navigate = useNavigate();
  const { setUserInfoFormData } = useOutletContext<UserInfoFormDataContext>();
  const { query: emailQuery, handleChangeEmailInputValue, emailInvalidType, alertEmptyEmailInputValue } = useEmail();
  const {
    pwQuery,
    handleChangePwInputValue,
    pwInvalidType,
    alertEmptyPwInputValue,
    pwConfirmQuery,
    handleChangePwConfirmInputValue,
    pwConfirmInvalidType,
    alertEmptyPwConfirmInputValue,
  } = usePasswords();

  const onClickSuccessBtn = () => {
    if (
      // TODO :: checkSuccess 함수화하여 모든 경우 체크
      emailInvalidType === emailInvalidMessage.PASS &&
      pwInvalidType === passwordInvalidMessage.PASS &&
      pwConfirmInvalidType === passwordConfirmInvalidMessage.PASS &&
      pwQuery === pwConfirmQuery
    ) {
      setUserInfoFormData(() => {
        const currentFormData = new FormData();
        // currentFormData.append("email", userEmail);
        currentFormData.append("email", emailQuery);
        currentFormData.append("password", pwConfirmQuery);

        return currentFormData;
      });

      navigate(`${routePaths.Join_}${routePaths.Join_UserProfile}`);
      return;
    }
    // 비어있음 문제
    if (emailInvalidType === emailInvalidMessage.NULL) {
      alertEmptyEmailInputValue();
      return;
    }
    if (pwInvalidType === passwordInvalidMessage.NULL) {
      alertEmptyPwInputValue();
      return;
    }
    if (pwConfirmInvalidType === passwordConfirmInvalidMessage.NULL) {
      alertEmptyPwConfirmInputValue();
      return;
    }
  };

  return (
    <>
      {/* <SubHeader prevPage={subHeaderInfo[2].prevPage} rate={subHeaderInfo[2].rate} /> */}
      <SubHeader prevPage={subHeaderInfo[0].prevPage} rate={subHeaderInfo[0].rate} />
      <St.ContainerWrapper>
        <St.UserInfoContainer>
          <St.ContentTitle>정보를 입력해주세요</St.ContentTitle>
          <UserEmail query={emailQuery} onChange={handleChangeEmailInputValue} invalidType={emailInvalidType} />
          <UserPassword
            pwQuery={pwQuery}
            handleChangePwInputValue={handleChangePwInputValue}
            pwInvalidType={pwInvalidType}
            pwConfirmQuery={pwConfirmQuery}
            handleChangePwConfirmInputValue={handleChangePwConfirmInputValue}
            pwConfirmInvalidType={pwConfirmInvalidType}
          />
        </St.UserInfoContainer>
        <St.SuccessBtnContainer>
          <St.SuccessBtn onClick={onClickSuccessBtn}>다음으로</St.SuccessBtn>
        </St.SuccessBtnContainer>
      </St.ContainerWrapper>
      <Footer />
    </>
  );
}
