import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { IcCloseBtn, IcMenuBarImg } from "../../../asset/icon";
import { activeState } from "../../../core/atom/menuBar";
import { St, StContentsContainer } from "./style";

const MenuBarDummy = {
  profileImg: <IcMenuBarImg />,
  name: "윤지영",
};

export default function MenuBar() {
  const setIsActive = useSetRecoilState(activeState);

  const navigate = useNavigate();
  const moveCardCollection = () => {
    navigate("/card-collection", { state: { type: "all" } });
    setIsActive(false);
  };

  return (
    <St.Root>
      <StContentsContainer>
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
            <St.CardRecomendWrapper onClick={moveCardCollection}>
              <St.Title>대화 주제 추천 카드</St.Title>
            </St.CardRecomendWrapper>
            <St.RecomendWrapper to="/category">
              <St.Title>Mood Piickles</St.Title>
              <St.MoveBtn>카테고리별 대화주제 추천</St.MoveBtn>
            </St.RecomendWrapper>
            <St.RecomendWrapper to="/vote">
              <St.Title>Piickle Me</St.Title>
              <St.MoveBtn>진행중인 투표</St.MoveBtn>
            </St.RecomendWrapper>
          </St.RecomendContainer>
        </St.Contents>
      </StContentsContainer>
    </St.Root>
  );
}
