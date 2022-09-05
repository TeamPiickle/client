import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import Footer from "../../@common/Footer";
import Header from "../common/Header";
import InputForm from "../common/InputForm";
import PageProgressBar from "../common/PageProgressBar";
import SuccessBtn from "../common/SuccessBtn";
import { St } from "./style";

export default function UserInfo() {
  return (
    <>
      <Header prevPage={prevPages[2].prevPage} />
      <PageProgressBar rate={progressRate[2].rate} />
      <St.ContainerWrapper>
        <St.UserInfoContainer>
          <St.ContentTitle>정보를 입력해주세요</St.ContentTitle>
          <St.EmailContainer>
            <St.EmailTitleWrapper>
              <St.EmailTitleText>이메일 아이디 (필수)</St.EmailTitleText>
            </St.EmailTitleWrapper>
            <InputForm />
          </St.EmailContainer>
          <St.PasswordContainer>
            <St.PasswordTitleWrapper>
              <St.PasswordTitleText>비밀번호 및 확인 (필수)</St.PasswordTitleText>
              <St.PasswordDescription>※ 영문,숫자, 특수문자 조합 6자 이상</St.PasswordDescription>
            </St.PasswordTitleWrapper>
            <InputForm />
            <InputForm />
          </St.PasswordContainer>
        </St.UserInfoContainer>
        <St.SuccessBtnContainer>
          <SuccessBtn></SuccessBtn>
        </St.SuccessBtnContainer>
      </St.ContainerWrapper>
      <Footer />
    </>
  );
}
