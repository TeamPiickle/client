import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { IcCloseBtn } from "../../../asset/icon";
import { ImgDefaultProfile } from "../../../asset/image";
import { useBallotLists } from "../../../core/api/main";
import useUserProfile from "../../../core/api/myPage";
import { sliderIdxState } from "../../../core/atom/slider";
import { routePaths } from "../../../core/routes/path";
import { St, StContentsContainer } from "./style";

interface MenuBarProps {
  closeMenuBar: () => void;
}

export default function MenuBar(props: MenuBarProps) {
  const { closeMenuBar } = props;

  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const navigate = useNavigate();

  const { userProfile } = useUserProfile();
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;

  const { ballotLists } = useBallotLists();

  const moveCardCollection = () => {
    navigate(routePaths.CardCollection, { state: { type: "all" } });
    setSliderIdx(0);
    closeMenuBar();
  };

  const handleLogout = () => {
    localStorage.removeItem("piickle-token");
    navigate(routePaths.Main);
    closeMenuBar();
  };

  const handleJoin = () => {
    navigate(`${routePaths.Join_}${routePaths.Join_EmailAuthentication}`);
  };

  return (
    <St.Root>
      <StContentsContainer>
        <St.CloseBtnContainer onClick={closeMenuBar}>
          <IcCloseBtn />
        </St.CloseBtnContainer>
        <St.Contents>
          {LOGIN_STATE && userProfile ? (
            <St.ProfileContainer>
              <St.ProfileImage
                src={userProfile.data.profileImageUrl === "test" ? ImgDefaultProfile : userProfile.data.profileImageUrl}
                alt="프로필"
              />
              <St.WelcomeText>
                {userProfile.data.nickname}님, <br />
                안녕하세요
              </St.WelcomeText>
              <St.DescriptText>오늘도 피클과 함께 대화 나눠요</St.DescriptText>
              <St.BtnContainer>
                <St.MyProfileBtn to={routePaths.MyPage} onClick={closeMenuBar}>
                  My 프로필
                </St.MyProfileBtn>
                <St.LogoutBtn onClick={handleLogout}>로그아웃</St.LogoutBtn>
              </St.BtnContainer>
            </St.ProfileContainer>
          ) : (
            <St.ProfileContainer>
              <St.ProfileImage src={ImgDefaultProfile} alt="프로필" />
              <St.WelcomeText>안녕하세요</St.WelcomeText>
              <St.DescriptText>오늘도 피클과 함께 대화 나눠요</St.DescriptText>
              <St.BtnContainer>
                <St.MyProfileBtn to={routePaths.Login} onClick={closeMenuBar}>
                  로그인
                </St.MyProfileBtn>
                <St.LogoutBtn onClick={handleJoin}>회원가입</St.LogoutBtn>
              </St.BtnContainer>
            </St.ProfileContainer>
          )}
          <St.RecomendContainer>
            <St.CardRecomendWrapper onClick={moveCardCollection}>
              <St.Title>대화 주제 추천 카드</St.Title>
            </St.CardRecomendWrapper>
            <St.RecomendWrapper to={routePaths.Category} onClick={closeMenuBar}>
              <St.Title>Mood Piickles</St.Title>
              <St.SubTitle>카테고리별 대화주제 추천</St.SubTitle>
            </St.RecomendWrapper>
            <St.RecomendWrapper to={`${routePaths.Vote}/${ballotLists?.data[0]._id}`} onClick={closeMenuBar}>
              <St.Title>Piickle Me</St.Title>
              <St.SubTitle>진행중인 투표</St.SubTitle>
            </St.RecomendWrapper>
          </St.RecomendContainer>
        </St.Contents>
      </StContentsContainer>
    </St.Root>
  );
}
