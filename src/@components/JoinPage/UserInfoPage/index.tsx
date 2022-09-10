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

export default function UserInfo() {
  const [isPasswordInvalid, setIsPasswordInvalid] = useState([false, false]);
  const { query, setQuery, debouncedQuery } = useDebounce("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentStep, setCurrentStep] = useState("input");

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
    if (currentStep === "confirm") {
      setCurrentStep("input");
    }
    setQuery(e.target.value);
    setCurrentPassword(e.target.value);
  };

  const changePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(currentPassword);
    if (currentStep === "input") {
      setCurrentStep("confirm");
    }
    setQuery(e.target.value);
    return;
  };

  const clickSuccessBtn = () => {
    console.log(isPasswordInvalid);
    if (isPasswordInvalid[0] === false && isPasswordInvalid[1] === false) {
      // navigate();
      console.log("okay");
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
