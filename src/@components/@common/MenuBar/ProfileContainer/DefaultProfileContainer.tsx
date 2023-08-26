import { ImgDefaultProfile } from "../../../../asset/image";
import { routePaths } from "../../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import { ProfileContainerProps } from ".";
import St from "./style";

export default function DefaultProfileContainer(props: ProfileContainerProps) {
  const { closeMenuBar } = props;

  return (
    <St.ProfileContainer>
      <St.ProfileImage src={ImgDefaultProfile} alt="프로필" />
      <St.WelcomeText>안녕하세요</St.WelcomeText>
      <St.DescriptText>오늘도 피클과 함께 대화 나눠요</St.DescriptText>
      <St.BtnContainer>
        <St.MyProfileBtn to={routePaths.Login} className={GTM_CLASS_NAME.menuLogin} onClick={closeMenuBar}>
          로그인
        </St.MyProfileBtn>
      </St.BtnContainer>
    </St.ProfileContainer>
  );
}
