import { useEffect, useState } from "react";

import { real } from "../../../core/api/login";
import useUserProfile from "../../../core/api/myPage";
import { St } from "./style";

type profileType = {
  name: string;
  nickname: string;
  email: string;
  profile_image_url: string;
};

export default function MyInfo() {
  const { userProfile, isLoading, isError } = useUserProfile();

  useEffect(() => {
    console.log(userProfile);
  }, [userProfile]);
  return (
    <St.MyInfoContainer>
      {userProfile && (
        <St.Profile>
          <St.ProfileImage src={userProfile.data.profile_image_url} alt={userProfile.data.profile_image_url} />
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
