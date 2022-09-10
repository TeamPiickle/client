import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import Footer from "../../@common/Footer";
import Header from "../common/Header";
import PageProgressBar from "../common/PageProgressBar";
import { St } from "./style";
import UserEmail from "./UserEmail";
import UserPassword from "./UserPassword";

export default function UserInfo() {
  const [isPasswordInvalid, setIsPasswordInvalid] = useState([false, false]);
  const navigate = useNavigate();

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
          <UserPassword isPasswordInvalid={isPasswordInvalid} setIsPasswordInvalid={setIsPasswordInvalid} />
        </St.UserInfoContainer>
        <St.SuccessBtnContainer>
          <St.SuccessBtn onClick={clickSuccessBtn}>다음으로</St.SuccessBtn>
        </St.SuccessBtnContainer>
      </St.ContainerWrapper>
      <Footer />
    </>
  );
}
