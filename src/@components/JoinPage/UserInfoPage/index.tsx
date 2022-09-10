import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import checkPasswordInvalid from "../../../util/checkInvalidPassword";
import Footer from "../../@common/Footer";
import { useDebounce } from "../../@common/hooks/useDebounce";
import Header from "../common/Header";
import PageProgressBar from "../common/PageProgressBar";
import { St } from "./style";
import UserEmail from "./UserEmail";
import UserPassword from "./UserPassword";

const enum Step {
  input = "input",
  confirm = "confirm",
}

export default function UserInfo() {
  const [isPasswordInvalid, setIsPasswordInvalid] = useState([false, false]);
  const { query, setQuery, debouncedQuery } = useDebounce("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentStep, setCurrentStep] = useState<Step>(Step.input);
  const [isUnfilled, setIsUnfilled] = useState([false, false]);

  const navigate = useNavigate();

  const checkInputInvalid = () => {
    if (debouncedQuery !== "" && checkPasswordInvalid(debouncedQuery)) {
      setIsPasswordInvalid((prev) => [true, prev[1]]);
    } else {
      setIsPasswordInvalid((prev) => [false, prev[1]]);
    }
  };

  const checkConfirmInvalid = () => {
    if (debouncedQuery !== "" && query !== currentPassword) {
      setIsPasswordInvalid((prev) => [prev[0], true]);
    } else {
      setIsPasswordInvalid((prev) => [prev[0], false]);
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
    console.log(currentPassword);
    if (currentStep === Step.input) {
      setCurrentStep(Step.confirm);
    }
    setQuery(e.target.value);
    return;
  };

  const clickSuccessBtn = () => {
    console.log(currentPassword);
    if (isPasswordInvalid[0] === false && isPasswordInvalid[1] === false) {
      // navigate();
      console.log("okay");
    } else if (currentPassword === undefined) {
      setIsUnfilled((prev) => [true, prev[1]]);
      console.log(isUnfilled);
    } else if (isPasswordInvalid[1] === true) {
      setIsUnfilled((prev) => [prev[0], true]);
    }
  };

  return (
    <>
      <Header prevPage={prevPages[2].prevPage} />
      <PageProgressBar rate={progressRate[2].rate} />
      <St.ContainerWrapper>
        <St.UserInfoContainer>
          <St.ContentTitle>정보를 입력해주세요</St.ContentTitle>
          <UserEmail />
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
          <St.SuccessBtn onClick={clickSuccessBtn}>다음으로</St.SuccessBtn>
        </St.SuccessBtnContainer>
      </St.ContainerWrapper>
      <Footer />
    </>
  );
}
