import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { IcChangeProfileBtn } from "../../../asset/icon/index";
import { ImgDefaultProfile } from "../../../asset/image";
import useUserProfile, { myPageApi } from "../../../core/api/myPage";
import { activeStateModal } from "../../../core/atom/menuBar";
import Loading from "../../common/Loading";
import NicknameModal from "../NicknameModal";
import { St } from "./style";

export default function MyInfo() {
  const { userProfile, isLoading, handleNewProfile } = useUserProfile();
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;

  const setIsActiveModal = useSetRecoilState(activeStateModal);
  const navigation = useNavigate();

  const [isOpened, setIsOpened] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading) {
      if (!LOGIN_STATE) navigation("/login");
    }
  }, [isLoading, LOGIN_STATE, navigation]);

  const openNicknameModal = () => {
    setIsOpened(true);
    setIsActiveModal(true);
  };

  const closeNicknameModal = () => {
    setIsOpened(false);
    setIsActiveModal(false);

    handleNewProfile();
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    const selectedImg = e.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedImg);

    handlePatch(formData);
  };

  const handlePatch = async (formData: FormData) => {
    await myPageApi.patchProfileImg(formData);

    handleNewProfile();
  };

  if (!userProfile) return <Loading backgroundColor="white" />;
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
            <St.ProfileNicknameEdit onClick={openNicknameModal} role="dialog">
              닉네임 수정
            </St.ProfileNicknameEdit>
          </St.ProfileNickname>
          <St.ProfileEmail>{userProfile ? userProfile.data.email : "-"}</St.ProfileEmail>
        </St.ProfileDetail>
      </St.Profile>

      {isOpened && (
        <NicknameModal closeHandler={closeNicknameModal} nickname={userProfile ? userProfile.data.nickname : "○○○"} />
      )}
    </St.MyInfoContainer>
  );
}
