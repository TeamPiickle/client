import { useRef, useState } from "react";

import { IcChangeProfileBtn } from "../../../asset/icon/index";
import useUserProfile, { real } from "../../../core/api/myPage";
import { St } from "./style";
const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;
export default function MyInfo() {
  const { userProfile, isLoading, isError } = useUserProfile();
  const profileImg = useRef(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (LOGIN_STATE === false) return;
    if (e.target.files === null) return;

    const selectedImg = e.target.files[0];
    const formData = new FormData();
    formData.append("img", selectedImg);

    handlePatch(formData);
  };

  const handlePatch = (formData: FormData) => {
    real.patchProfileImg(formData);
  };

  return (
    <St.MyInfoContainer>
      {userProfile && (
        <St.Profile>
          <St.Images>
            <St.ProfileImage src={userProfile.data.profile_image_url} alt="프로필" />
            <St.ButtonIcContainer>
              <IcChangeProfileBtn />
            </St.ButtonIcContainer>
            <St.ChangeButton
              type="file"
              onChange={handleImageChange}
              accept="image/jpg, image/png, image/jpeg"
              ref={profileImg}></St.ChangeButton>
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
