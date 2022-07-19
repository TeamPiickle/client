import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { IcChangeProfileBtn } from "../../../asset/icon/index";
import { ImgDefaultProfile } from "../../../asset/image";
import useUserProfile from "../../../core/api/myPage";
import { activeStateModal } from "../../../core/atom/menuBar";
import NicknameModal from "../NicknameModal";
import { St } from "./style";

export default function MyInfo() {
  const setIsActiveModal = useSetRecoilState(activeStateModal);
  const { userProfile, isLoading } = useUserProfile();
  const navigation = useNavigate();

  const isToken = localStorage.getItem("piickle-token") ? true : false;

  const [isOpened, setIsOpened] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading) {
      if (!isToken) navigation("/login");
    }
  }, [isLoading, isToken, navigation]);

  const openModal = () => {
    setIsOpened(true);
    setIsActiveModal(true);
  };

  const closeModal = () => {
    setIsOpened(false);
    setIsActiveModal(false);
  };

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
            <St.ProfileNicknameEdit onClick={() => openModal()}>닉네임 수정</St.ProfileNicknameEdit>
          </St.ProfileNickname>
          <St.ProfileEmail>{userProfile ? userProfile.data.email : "-"}</St.ProfileEmail>
        </St.ProfileDetail>
      </St.Profile>

      {isOpened && <NicknameModal closeHandler={closeModal} nickname={userProfile.data.nickname} />}
    </St.MyInfoContainer>
  );
}
