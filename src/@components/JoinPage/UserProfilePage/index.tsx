import { IcAddProfileBtn, IcDownArrow } from "../../../asset/icon";
import { ImgDefaultBigProfile } from "../../../asset/image";
import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import Footer from "../../@common/Footer";
import Header from "../common/Header";
import PageProgressBar from "../common/PageProgressBar";
import { St } from "./style";

export default function UserProfilePage() {
  return (
    <St.Root>
      <Header prevPage={prevPages[4].prevPage} />
      <PageProgressBar rate={progressRate[3].rate} />
      <St.ProfileContainer>
        <St.Title>프로필을 설정해주세요</St.Title>
        <St.ProfileImageContainer>
          <St.SubTitle>프로필 사진(선택)</St.SubTitle>
          <St.Image>
            <St.ProfileImage src={ImgDefaultBigProfile} alt="프로필" />
            <St.AddBtnWrapper>
              <IcAddProfileBtn />
            </St.AddBtnWrapper>
          </St.Image>
        </St.ProfileImageContainer>
        <St.ProfileNickNameContainer>
          <St.SubTitle>닉네임(필수)</St.SubTitle>
          <St.Requirement>※ 한글, 영문, 숫자 상관없이 8자 이내</St.Requirement>
          <St.InputContainer>
            <St.NickNameInputForm id="nickname" placeholder="홍길동" />
            <St.CheckBtn>중복확인</St.CheckBtn>
          </St.InputContainer>
        </St.ProfileNickNameContainer>
        <St.ProfileBrithContainer>
          <St.SubTitle>생년월일(필수)</St.SubTitle>
          <St.Requirement>※ 만 14세 이상만 가입가능합니다.</St.Requirement>
          <St.InputContainer>
            <St.YearInputForm id="year" />
            <St.Down>
              <IcDownArrow />
            </St.Down>
            <St.Text>년</St.Text>
            <St.MonthInputForm id="month" />
            <St.Down>
              <IcDownArrow />
            </St.Down>
            <St.Text>월</St.Text>
            <St.DateInputForm id="date" />
            <St.Down>
              <IcDownArrow />
            </St.Down>
            <St.Text>일</St.Text>
          </St.InputContainer>
        </St.ProfileBrithContainer>
        <St.ProfileGenderContainer>
          <St.SubTitle>성별</St.SubTitle>
          <St.InputContainer>
            <St.GenderInputForm id="gender" placeholder="성별을 체크해주세요" />
            <St.Down>
              <IcDownArrow />
            </St.Down>
          </St.InputContainer>
        </St.ProfileGenderContainer>
        <St.NextButton>다음으로</St.NextButton>
      </St.ProfileContainer>
      <Footer />
    </St.Root>
  );
}
