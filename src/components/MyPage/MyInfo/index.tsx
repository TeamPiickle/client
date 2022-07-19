import { IcChangeProfileBtn } from "../../../asset/icon/index";
import useUserProfile from "../../../core/api/myPage";
import { St } from "./style";

export default function MyInfo() {
  const { userProfile, isLoading, isError } = useUserProfile();

  return (
    <St.MyInfoContainer>
      {userProfile && (
        <St.Profile>
          <St.Images>
            <St.ProfileImage src={userProfile.data.profile_image_url} alt="프로필" />
            <St.ChangeButton>

              <IcChangeProfileBtn />
            </St.ChangeButton>
          </St.Images>
          <St.ProfileDetail>
            <St.ProfileNickname>
              <St.ProfileMyNickname>{userProfile.data.nickname}</St.ProfileMyNickname>
              <St.ProfileNicknameEdit>닉네임 수정</St.ProfileNicknameEdit>
            </St.ProfileNickname>
            <St.ProfileEmail>{userProfile.data.email}</St.ProfileEmail>
          </St.ProfileDetail>
        </St.Profile>
      )}
    </St.MyInfoContainer>
  );
}
