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
      //   navigate(path... {s
      // state : {
      //   userPassword : currentPassword,
      // userEmail : window.location.search.substring(6)
      // }});
    } else if (currentPassword === undefined) {
      setIsUnfilled({ ...isUnfilled, input: true });
    } else if (isPasswordInvalid.confirm === true) {
      setIsUnfilled({ ...isUnfilled, confirm: true });
    }
  };

  return (
    <>
      <Header prevPage={prevPages[1].prevPage} />
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
