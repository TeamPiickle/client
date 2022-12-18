import { useNavigate } from "react-router-dom";

import { ImgDefaultProfile } from "../../../../asset/image";
import { routePaths } from "../../../../core/routes/path";
import { ProfileContainerProps } from ".";
import { St } from "./style";

export default function DefaultProfileContainer(props: ProfileContainerProps) {
  const { closeMenuBar } = props;

  const navigate = useNavigate();

  const handleJoin = () => {
    navigate(`${routePaths.Join_}${routePaths.Join_EmailAuthentication}`);
  };

  return (
    <St.ProfileContainer>
      <St.ProfileImage src={ImgDefaultProfile} alt="프로필" />
      <St.WelcomeText>안녕하세요</St.WelcomeText>
      <St.DescriptText>오늘도 피클과 함께 대화 나눠요</St.DescriptText>
      <St.BtnContainer>
        <St.MyProfileBtn to={routePaths.Login} onClick={closeMenuBar} className="GTM_Login">
          로그인
        </St.MyProfileBtn>
        <St.LogoutBtn onClick={handleJoin} className="GTM_Join">
          회원가입
        </St.LogoutBtn>
      </St.BtnContainer>
    </St.ProfileContainer>
  );
}
