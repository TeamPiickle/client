import { useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import { subHeaderInfo } from "../../../core/join/subHeaderInfo";
import { routePaths } from "../../../core/routes/path";
import checkPasswordInvalid from "../../../util/checkInvalidPassword";
import Footer from "../../@common/Footer";
import { useDebounce } from "../../@common/hooks/useDebounce";
import SubHeader from "../../@common/SubHeader";
import { UserInfoFormDataContext } from "..";
import { St } from "./style";
import UserEmail from "./UserEmail";
import UserPassword from "./UserPassword";

const enum Step {
  input = "input",
  confirm = "confirm",
}

export default function UserInfo() {
  const [isPasswordInvalid, setIsPasswordInvalid] = useState({
    input: false,
    confirm: false,
  });
  const { query, setQuery, debouncedQuery } = useDebounce("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentStep, setCurrentStep] = useState<Step>(Step.input);
  const [isUnfilled, setIsUnfilled] = useState({
    input: false,
    confirm: false,
  });

  const navigate = useNavigate();

  const { search } = useLocation();
  const userEmail = new URLSearchParams(search).get("email") as string;

  const { setUserInfoFormData } = useOutletContext<UserInfoFormDataContext>();

  const checkInputInvalid = () => {
    if (debouncedQuery !== "" && checkPasswordInvalid(debouncedQuery)) {
      setIsPasswordInvalid({ ...isPasswordInvalid, input: true });
    } else {
      setIsPasswordInvalid({ ...isPasswordInvalid, input: false });
    }
  };

  const checkConfirmInvalid = () => {
    if (debouncedQuery !== "" && query !== currentPassword) {
      setIsPasswordInvalid({ ...isPasswordInvalid, confirm: true });
    } else {
      setIsPasswordInvalid({ ...isPasswordInvalid, confirm: false });
    }
  };

  const changePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentStep === Step.confirm) {
      setCurrentStep(Step.input);
    }
    setQuery(e.target.value);
    setCurrentPassword(e.target.value);
  };

  const changePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentStep === Step.input) {
      setCurrentStep(Step.confirm);
    }
    setQuery(e.target.value);
    return;
  };

  const clickSuccessBtn = () => {
    if (isPasswordInvalid.input === false && isPasswordInvalid.confirm === false) {
      setUserInfoFormData(() => {
        const currentFormData = new FormData();

        currentFormData.append("email", userEmail);
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
      <SubHeader prevPage={subHeaderInfo[2].prevPage} rate={subHeaderInfo[2].rate} />
      <St.ContainerWrapper>
        <St.UserInfoContainer>
          <St.ContentTitle>정보를 입력해주세요</St.ContentTitle>
          <UserEmail text={userEmail} />
          <UserPassword
            isPasswordInvalid={isPasswordInvalid}
            checkInputInvalid={checkInputInvalid}
            checkConfirmInvalid={checkConfirmInvalid}
            debouncedQuery={debouncedQuery}
            changePasswordInput={changePasswordInput}
            changePasswordConfirm={changePasswordConfirm}
            currentStep={currentStep}
            isUnfilled={isUnfilled}
          />
        </St.UserInfoContainer>
        <St.SuccessBtnContainer>
          <St.SuccessBtn onClick={clickSuccessBtn} className="GTM_Password">
            다음으로
          </St.SuccessBtn>
        </St.SuccessBtnContainer>
      </St.ContainerWrapper>
      <Footer />
    </>
  );
}
