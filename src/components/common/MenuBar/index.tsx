import { useSetRecoilState } from "recoil";

import { IcCloseBtn, IcMenuBarImg } from "../../../asset/icon";
import { activeState } from "../../../core/atom/menuBar";
import { St } from "./style";

const MenuBarDummy = {
  profileImg: <IcMenuBarImg />,
  name: "윤지영",
};

export default function MenuBar() {
  const setIsActive = useSetRecoilState(activeState);

  return (
    <St.Root>
      <St.ContentsContainer>
        <St.CloseBtnContainer onClick={() => setIsActive((prevState) => !prevState)}>
          <IcCloseBtn />
        </St.CloseBtnContainer>
        <St.Contents>
          <St.ProfileContainer>
            {MenuBarDummy.profileImg}
            <St.WelcomeText>
              {MenuBarDummy.name}님, <br />
              안녕하세요
            </St.WelcomeText>
            <St.DescriptText>오늘도 피클과 함께 대화 나눠요</St.DescriptText>
            <St.BtnContainer>
              <St.MyProfileBtn>My 프로필</St.MyProfileBtn>
              <St.LogoutBtn>로그아웃</St.LogoutBtn>
            </St.BtnContainer>
          </St.ProfileContainer>
          <St.RecomendContainer>
            <St.TitleText>대화 주제 추천 카드</St.TitleText>
            <St.MoodPiickleContainer>
              <St.MoodPiickleText>Mood Piickles</St.MoodPiickleText>
              <St.GoMoodPiickleBtn>카테고리별 대화주제 추천</St.GoMoodPiickleBtn>
            </St.MoodPiickleContainer>
            <St.PiickleMeContainer>
              <St.PiickleMeText>Piickle Me</St.PiickleMeText>
              <St.GoPiickleMeBtn>진행중인 투표</St.GoPiickleMeBtn>
            </St.PiickleMeContainer>
          </St.RecomendContainer>
        </St.Contents>
      </St.ContentsContainer>
    </St.Root>
  );
}
