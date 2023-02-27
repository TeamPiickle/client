import { useNavigate, useOutletContext } from "react-router-dom";

import { JOIN_FORM_DATA_KEY } from "../../../core/join/formData";
import { subHeaderInfo } from "../../../core/join/subHeaderInfo";
import {
  emailInvalidMessage,
  passwordConfirmInvalidMessage,
  passwordInvalidMessage,
} from "../../../core/join/userInfoInputErrorMessage";
import { routePaths } from "../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
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
  const { formDataEmailValue, formDataPasswordValue, setUserInfoFormData } =
    useOutletContext<UserInfoFormDataContext>();
  const {
    query: emailQuery,
    handleChangeEmailInputValue,
    emailInvalidType,
    alertEmptyEmailInputValue,
  } = useEmail(formDataEmailValue);
  const {
    pwQuery,
    handleChangePwInputValue,
    pwInvalidType,
    alertEmptyPwInputValue,
    pwConfirmQuery,
    handleChangePwConfirmInputValue,
    pwConfirmInvalidType,
    alertEmptyPwConfirmInputValue,
  } = usePasswords(formDataPasswordValue);

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
        currentFormData.append(JOIN_FORM_DATA_KEY.Email, emailQuery);
        currentFormData.append(JOIN_FORM_DATA_KEY.Password, pwConfirmQuery);

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
          <St.SuccessBtn className={GTM_CLASS_NAME.joinInfoNext} onClick={onClickSuccessBtn}>
            다음으로
          </St.SuccessBtn>
        </St.SuccessBtnContainer>
      </St.ContainerWrapper>
      <Footer />
    </>
  );
}
