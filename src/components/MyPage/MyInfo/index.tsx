import { useState } from "react";

import { IcChangeProfileBtn } from "../../../asset/icon/index";
import useUserProfile from "../../../core/api/myPage";
import NicknameModal from "../NicknameModal";
import { St } from "./style";

export default function MyInfo() {
  const { userProfile, isLoading, isError } = useUserProfile();

  const [isOpened, setIsOpened] = useState<boolean>(false);

  const openModal = () => {
    setIsOpened(true);
  };

  const closeModal = () => {
    setIsOpened(false);
  };

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
              <St.ProfileNicknameEdit onClick={() => openModal()}>닉네임 수정</St.ProfileNicknameEdit>
            </St.ProfileNickname>
            <St.ProfileEmail>{userProfile.data.email}</St.ProfileEmail>
          </St.ProfileDetail>
        </St.Profile>
      )}

      {isOpened && <NicknameModal closeHandler={closeModal} nickname={userProfile.data.nickname} />}
    </St.MyInfoContainer>
  );
}
