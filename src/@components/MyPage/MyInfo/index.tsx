import { IcChangeProfileBtn } from "../../../asset/icon/index";
import { ImgDefaultProfile } from "../../../asset/image";
import useUserProfile, { myPageApi } from "../../../core/api/myPage";
import useModal from "../../@common/hooks/useModal";
import Loading from "../../@common/Loading";
import NicknameModal from "../NicknameModal";
import { St } from "./style";

export default function MyInfo() {
  const { userProfile, isLoading, handleNewProfile } = useUserProfile();
  const { isModalOpen: isNicknameModalOpen, toggleModal: toggleNicknameModal } = useModal();

  const openNicknameModal = () => {
    toggleNicknameModal();
  };

  const closeNicknameModal = () => {
    toggleNicknameModal();

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

  if (isLoading) return <Loading backgroundColor="white" />;
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

      {isNicknameModalOpen && (
        <NicknameModal closeHandler={closeNicknameModal} nickname={userProfile ? userProfile.data.nickname : "○○○"} />
      )}
    </St.MyInfoContainer>
  );
}
