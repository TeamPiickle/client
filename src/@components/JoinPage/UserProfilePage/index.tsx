import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import Footer from "../../@common/Footer";
import Header from "../common/Header";
import PageProgressBar from "../common/PageProgressBar";
import ProfileBirth from "./ProfileBirth";
import ProfileImage from "./ProfileImage";
import ProfileJender from "./ProfileJender";
import ProfileNickname from "./ProfileNickname";
import { St } from "./style";

export default function UserProfilePage() {
  return (
    <St.Root>
      <Header prevPage={prevPages[4].prevPage} />
      <PageProgressBar rate={progressRate[3].rate} />
      <St.ProfileContainer>
        <St.Title>프로필을 설정해주세요</St.Title>
        <St.SubTitle>프로필 사진(선택)</St.SubTitle>
        <ProfileImage />
        <St.SubTitle>닉네임(필수)</St.SubTitle>
        <St.Requirement>※ 한글, 영문, 숫자 상관없이 8자 이내</St.Requirement>
        <ProfileNickname />
        <St.SubTitle>생년월일(필수)</St.SubTitle>
        <St.Requirement>※ 만 14세 이상만 가입가능합니다.</St.Requirement>
        <ProfileBirth />
        <St.SubTitle>성별</St.SubTitle>
        <ProfileJender />
        <St.NextButton>다음으로</St.NextButton>
      </St.ProfileContainer>
      <Footer />
    </St.Root>
  );
}
