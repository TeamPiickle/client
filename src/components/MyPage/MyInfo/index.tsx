import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { IcChangeProfileBtn } from "../../../asset/icon/index";
import { ImgDefaultProfile } from "../../../asset/image";
import useUserProfile, { myPageApi } from "../../../core/api/myPage";
import { activeStateModal } from "../../../core/atom/menuBar";
import NicknameModal from "../NicknameModal";
import { St } from "./style";

export default function MyInfo() {
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;
  const setIsActiveModal = useSetRecoilState(activeStateModal);
  const { userProfile, isLoading, handleNewProfile } = useUserProfile();
  const navigation = useNavigate();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState(ImgDefaultProfile);

  useEffect(() => {
    if (!isLoading) {
      if (!LOGIN_STATE) navigation("/login");
    }
  }, [isLoading, LOGIN_STATE, navigation]);

  const openModal = () => {
    setIsOpened(true);
    setIsActiveModal(true);
  };

  const closeModal = () => {
    setIsOpened(false);
    setIsActiveModal(false);

    handleNewProfile();
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    const selectedImg = e.target.files[0];
    const formData = new FormData();
    formData.append("img", selectedImg);
    console.log(formData);

    handlePatch(formData);
    handleNewProfile();
  };

  const handlePatch = async (formData: FormData) => {
    await myPageApi.patchProfileImg(formData);
  };

  // const saveNewProfile = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files === null) return;
  //   setProfileImage(URL.createObjectURL(e.target.files[0]));
  //   console.log("profileImage: ", profileImage);
  //   console.log("e.target.files[0]: ", e.target.files[0]);
  //   await myPageApi.patchProfileImg(profileImage);
  // };

  useEffect(() => {
    console.log(userProfile && userProfile.data.profileImageUrl);
  }, [userProfile]);

  return (
    <St.MyInfoContainer>
      <St.Profile>
        <St.Images>
          <St.ProfileImage src={userProfile ? userProfile.data.profileImageUrl : ImgDefaultProfile} alt="프로필" />
          <St.ProfileChangeBtnLabel aria-label="프로필 이미지 수정">
            <St.ChangeBtnWrapper>
              <IcChangeProfileBtn />
            </St.ChangeBtnWrapper>
            <St.ChangeButton type="file" onChange={handleImageChange} accept="image/*" />
          </St.ProfileChangeBtnLabel>
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
