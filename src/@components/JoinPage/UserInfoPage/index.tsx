import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import Footer from "../../@common/Footer";
import Header from "../common/Header";
import PageProgressBar from "../common/PageProgressBar";
import SuccessBtn from "../common/SuccessBtn";
import { St } from "./style";
import UserEmail from "./UserEmail";
import UserPassword from "./UserPassword";

export default function UserInfo() {
  return (
    <>
      <Header prevPage={prevPages[2].prevPage} />
      <PageProgressBar rate={progressRate[2].rate} />
      <St.ContainerWrapper>
        <St.UserInfoContainer>
          <St.ContentTitle>정보를 입력해주세요</St.ContentTitle>
          <UserEmail />
          <UserPassword />
        </St.UserInfoContainer>
        <St.SuccessBtnContainer>
          <SuccessBtn name="다음으로" />
        </St.SuccessBtnContainer>
      </St.ContainerWrapper>
      <Footer />
    </>
  );
}
