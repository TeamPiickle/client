import { St } from "./style";

export default function ProfileImage() {
  return (
    <St.ProfileNickname>
      <St.InputContainer>
        <St.NickNameInputForm id="nickname" placeholder="홍길동" />
        <St.CheckBtn>중복확인</St.CheckBtn>
      </St.InputContainer>
    </St.ProfileNickname>
  );
}
