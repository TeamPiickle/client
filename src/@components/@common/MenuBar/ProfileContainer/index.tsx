import { useNavigate } from "react-router-dom";

import { ImgDefaultProfile } from "../../../../asset/image";
import useUserProfile from "../../../../core/api/myPage";
import { routePaths } from "../../../../core/routes/path";
import DefaultProfileContainer from "./DefaultProfileContainer";
import { St } from "./style";

export interface ProfileContainerProps {
  closeMenuBar: () => void;
}

export default function ProfileContainer(props: ProfileContainerProps) {
  const { closeMenuBar } = props;

  const { userProfile } = useUserProfile();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("piickle-token");
    navigate(routePaths.Main);
    closeMenuBar();
  };

  if (!userProfile) return <DefaultProfileContainer closeMenuBar={closeMenuBar} />;
  return (
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
        <St.MyProfileBtn to={routePaths.MyPage} onClick={closeMenuBar} className="GTM_MyProfile">
          My 프로필
        </St.MyProfileBtn>
        <St.LogoutBtn onClick={handleLogout} className="GTM_Logout">
          로그아웃
        </St.LogoutBtn>
      </St.BtnContainer>
    </St.ProfileContainer>
  );
}
