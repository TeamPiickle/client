import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { IcChangeProfileBtn } from "../../../asset/icon/index";
import { ImgDefaultProfile } from "../../../asset/image";
import useUserProfile, { real } from "../../../core/api/myPage";
import { activeStateModal } from "../../../core/atom/menuBar";
import NicknameModal from "../NicknameModal";
import { St } from "./style";

export default function MyInfo() {
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;
  const setIsActiveModal = useSetRecoilState(activeStateModal);
  const { userProfile, isLoading, handleNewProfile } = useUserProfile();
  const navigation = useNavigate();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // useEffect(() => {
  //   if (!isLoading) {
  //     if (!LOGIN_STATE) navigation("/login");
  //   }
  // }, [isLoading, LOGIN_STATE, navigation]);

  const openModal = () => {
    setIsOpened(true);
    setIsActiveModal(true);
  };

  const closeModal = () => {
    setIsOpened(false);
    setIsActiveModal(false);

    handleNewProfile();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (LOGIN_STATE === false) return;
    if (e.target.files === null) return;

    const selectedImg = e.target.files[0];
    const formData = new FormData();
    formData.append("img", selectedImg);

    handlePatch(formData);
  };

  const handlePatch = async (formData: FormData) => {
    await real.patchProfileImg(formData);
    handleNewProfile();
  };

  return (
    <St.MyInfoContainer>
      <St.Profile>
        <St.Images>
          <St.ProfileImage src={userProfile ? userProfile.data.profile_image_url : ImgDefaultProfile} alt="프로필" />
          <St.ButtonIcContainer>
            <IcChangeProfileBtn />
          </St.ButtonIcContainer>
          <St.ChangeButton
            type="file"
            onChange={handleImageChange}
            accept="image/jpg, image/png, image/jpeg"></St.ChangeButton>
        </St.Images>
        <St.ProfileDetail>
          <St.ProfileNickname>
            <St.ProfileMyNickname>{userProfile ? userProfile.data.nickname : "○○○"}</St.ProfileMyNickname>
            <St.ProfileNicknameEdit onClick={openModal} role="dialog">
              닉네임 수정
            </St.ProfileNicknameEdit>
          </St.ProfileNickname>
          <St.ProfileEmail>{userProfile ? userProfile.data.email : "-"}</St.ProfileEmail>
        </St.ProfileDetail>
      </St.Profile>

      {isOpened && (
        <NicknameModal closeHandler={closeModal} nickname={userProfile ? userProfile.data.nickname : "○○○"} />
      )}
    </St.MyInfoContainer>
  );
}
