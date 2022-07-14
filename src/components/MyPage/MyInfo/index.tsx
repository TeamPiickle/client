import { St } from "./style";

export default function MyInfo() {
  return (
    <St.Container>
      <St.ProfileImage>사진</St.ProfileImage>
      <St.Profile>
        <St.ProfileNickname>
          <p>피클깡패</p>
          <button>닉네임 수정</button>
        </St.ProfileNickname>
        <St.ProfileEmail>piickle_people@piickle.com</St.ProfileEmail>
      </St.Profile>
    </St.Container>
  );
}
