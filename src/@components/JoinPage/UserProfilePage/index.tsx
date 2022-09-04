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
      <St.Title>프로필을 설정해주세요</St.Title>
      <St.ProfileImageContainer>
        <St.SubTitle>프로필 사진(선택)</St.SubTitle>
      </St.ProfileImageContainer>
      <St.ProfileNickNameContainer>
        <St.SubTitle>닉네임(필수)</St.SubTitle>
        <St.Requirement></St.Requirement>
      </St.ProfileNickNameContainer>
      <St.ProfileBrithContainer>
        <St.SubTitle>생년월일(필수)</St.SubTitle>
        <St.Requirement></St.Requirement>
      </St.ProfileBrithContainer>
      <St.ProfileGenderContainer>
        <St.SubTitle>성별</St.SubTitle>
      </St.ProfileGenderContainer>
      <St.NextButton>다음으로</St.NextButton>
      <Footer />
    </St.Root>
  );
}
