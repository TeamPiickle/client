import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { IcCloseBtn, IcMenuBarImg } from "../../../asset/icon";
import { useBallotLists } from "../../../core/api/main";
import useUserProfile from "../../../core/api/myPage";
import { activeState } from "../../../core/atom/menuBar";
import { sliderIdxState } from "../../../core/atom/slider";
import { St, StContentsContainer } from "./style";

const MenuBarDummy = {
  profileImg: <IcMenuBarImg />,
  name: "윤지영",
};

export default function MenuBar() {
  const setIsActive = useSetRecoilState(activeState);
  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const navigate = useNavigate();
  const { userProfile } = useUserProfile();

  const { ballotLists, isLoading, isError } = useBallotLists();

  const moveCardCollection = () => {
    navigate("/card-collection", { state: { type: "all" } });
    setSliderIdx(0);
    closeMenuBar();
  };

  const closeMenuBar = () => {
    setIsActive(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("piickle-token");
    navigate("/");
    closeMenuBar();
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
              {userProfile ? userProfile.data.nickname : "○○○"}님, <br />
              안녕하세요
            </St.WelcomeText>
            <St.DescriptText>오늘도 피클과 함께 대화 나눠요</St.DescriptText>
            <St.BtnContainer>
              <St.MyProfileBtn to="/my-page" onClick={closeMenuBar}>
                My 프로필
              </St.MyProfileBtn>
              <St.LogoutBtn onClick={handleLogout}>로그아웃</St.LogoutBtn>
            </St.BtnContainer>
          </St.ProfileContainer>
          <St.RecomendContainer>
            <St.CardRecomendWrapper onClick={moveCardCollection}>
              <St.Title>대화 주제 추천 카드</St.Title>
            </St.CardRecomendWrapper>
            <St.RecomendWrapper to="/category" onClick={closeMenuBar}>
              <St.Title>Mood Piickles</St.Title>
              <St.SubTitle>카테고리별 대화주제 추천</St.SubTitle>
            </St.RecomendWrapper>
            <St.RecomendWrapper to={`/vote/${ballotLists?.data[0]._id}`} onClick={closeMenuBar}>
              <St.Title>Piickle Me</St.Title>
              <St.SubTitle>진행중인 투표</St.SubTitle>
            </St.RecomendWrapper>
          </St.RecomendContainer>
        </St.Contents>
      </StContentsContainer>
    </St.Root>
  );
}
