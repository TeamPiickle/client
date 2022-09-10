import { St } from "./style";

interface nickNameTypes {
  setNickName: (nickName: string) => void;
  isChecked: boolean;
  setIsChecked: (button: boolean) => void;
}

export default function ProfileNickname(props: nickNameTypes) {
  const { setNickName, isChecked, setIsChecked } = props;
  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const saveNickname = () => {
    setIsChecked(true);
  };

  return (
    <St.ProfileNickname>
      <St.InputContainer>
        <St.NickNameInputForm id="nickname" placeholder="홍길동" onChange={onChangeNickname} isChecked={isChecked} />
        <St.CheckBtn onClick={saveNickname}>중복확인</St.CheckBtn>
      </St.InputContainer>
    </St.ProfileNickname>
  );
}
