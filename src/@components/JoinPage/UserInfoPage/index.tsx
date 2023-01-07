import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import { emailInvalidMessage } from "../../../core/join/emailErrorMessage";
import { subHeaderInfo } from "../../../core/join/subHeaderInfo";
import { routePaths } from "../../../core/routes/path";
import checkPasswordInvalid from "../../../util/checkInvalidPassword";
import Footer from "../../@common/Footer";
import { useDebounce } from "../../@common/hooks/useDebounce";
import SubHeader from "../../@common/SubHeader";
import { UserInfoFormDataContext } from "..";
import useEmail from "./hooks/useEmail";
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
  const { query: emailQuery, handleChangeEmailInputValue, emailInvalidType } = useEmail();

  const [isPasswordInvalid, setIsPasswordInvalid] = useState({
    input: false,
    confirm: false,
  });
  const { query: passwordQuery, setQuery: setPasswordQuery, debouncedQuery: debouncedPasswordQuery } = useDebounce("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentStep, setCurrentStep] = useState<Step>(Step.input);
  const [isUnfilled, setIsUnfilled] = useState({
    input: false,
    confirm: false,
  });

  const { setUserInfoFormData } = useOutletContext<UserInfoFormDataContext>();

  const checkInputInvalid = () => {
    if (debouncedPasswordQuery !== "" && checkPasswordInvalid(debouncedPasswordQuery)) {
      setIsPasswordInvalid({ ...isPasswordInvalid, input: true });
    } else {
      setIsPasswordInvalid({ ...isPasswordInvalid, input: false });
    }
  };

  const checkConfirmInvalid = () => {
    if (debouncedPasswordQuery !== "" && passwordQuery !== currentPassword) {
      setIsPasswordInvalid({ ...isPasswordInvalid, confirm: true });
    } else {
      setIsPasswordInvalid({ ...isPasswordInvalid, confirm: false });
    }
  };

  const changePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentStep === Step.confirm) {
      setCurrentStep(Step.input);
    }
    setPasswordQuery(e.target.value);
    setCurrentPassword(e.target.value);
  };

  const changePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentStep === Step.input) {
      setCurrentStep(Step.confirm);
    }
    setPasswordQuery(e.target.value);
    return;
  };

  const onClickSuccessBtn = () => {
    if (
      emailInvalidType === emailInvalidMessage.PASS &&
      emailQuery !== "" &&
      isPasswordInvalid.input === false &&
      isPasswordInvalid.confirm === false
    ) {
      setUserInfoFormData(() => {
        const currentFormData = new FormData();
        // currentFormData.append("email", userEmail);
        currentFormData.append("email", emailQuery);
        currentFormData.append("password", currentPassword);

        return currentFormData;
      });
      navigate(`${routePaths.Join_}${routePaths.Join_UserProfile}`);
    } else if (currentPassword === undefined) {
      setIsUnfilled({ ...isUnfilled, input: true });
    } else if (isPasswordInvalid.confirm === true) {
      setIsUnfilled({ ...isUnfilled, confirm: true });
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
            isPasswordInvalid={isPasswordInvalid}
            checkInputInvalid={checkInputInvalid}
            checkConfirmInvalid={checkConfirmInvalid}
            debouncedQuery={debouncedPasswordQuery}
            changePasswordInput={changePasswordInput}
            changePasswordConfirm={changePasswordConfirm}
            currentStep={currentStep}
            isUnfilled={isUnfilled}
          />
        </St.UserInfoContainer>
        <St.SuccessBtnContainer>
          <St.SuccessBtn onClick={onClickSuccessBtn} className="GTM_Password">
            다음으로
          </St.SuccessBtn>
        </St.SuccessBtnContainer>
      </St.ContainerWrapper>
      <Footer />
    </>
  );
}
