import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IcChangeProfileBtn } from "../../../asset/icon/index";
import { ImgDefaultProfile } from "../../../asset/image";
import useUserProfile from "../../../core/api/myPage";
import { St } from "./style";

export default function MyInfo() {
  const { userProfile, isLoading } = useUserProfile();
  const navigation = useNavigate();
  const isToken = localStorage.getItem("piickle-token") ? true : false;

  useEffect(() => {
    if (!isLoading) {
      if (!isToken) navigation("/login");
    }
  }, [isLoading, isToken, navigation]);

  return (
    <St.MyInfoContainer>
      <St.Profile>
        <St.Images>
          <St.ProfileImage src={userProfile ? userProfile.data.profile_image_url : ImgDefaultProfile} alt="프로필" />
          <St.ChangeButton>
            <IcChangeProfileBtn />
          </St.ChangeButton>
        </St.Images>
        <St.ProfileDetail>
          <St.ProfileNickname>
            <St.ProfileMyNickname>{userProfile ? userProfile.data.nickname : "○○○"}</St.ProfileMyNickname>
            <St.ProfileNicknameEdit>닉네임 수정</St.ProfileNicknameEdit>
          </St.ProfileNickname>
          <St.ProfileEmail>{userProfile ? userProfile.data.email : "-"}</St.ProfileEmail>
        </St.ProfileDetail>
      </St.Profile>
    </St.MyInfoContainer>
  );
}
