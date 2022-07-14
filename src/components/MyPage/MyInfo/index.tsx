import { St } from "./style";

export default function MyInfo() {
  return (
    <St.MyInfoContainer>
      <St.ProfileImage></St.ProfileImage>
      <St.Profile>
        <St.ProfileNickname>
          <St.ProfileMyNickname>피클깡패</St.ProfileMyNickname>
          <St.ProfileNicknameEdit type="button">닉네임 수정</St.ProfileNicknameEdit>
        </St.ProfileNickname>
        <St.ProfileEmail>piickle_people@piickle.com</St.ProfileEmail>
      </St.Profile>
    </St.MyInfoContainer>
  );
}
