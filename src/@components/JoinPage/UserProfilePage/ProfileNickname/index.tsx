import axios, { AxiosResponse } from "axios";

import { joinApi } from "../../../../core/api/join";
import { St } from "./style";

interface ProfileNicknameProps {
  nickName: string;
  setNickName: (nickName: string) => void;
  isChecked: boolean;
  isInComplete: boolean;
  setIsChecked: (button: boolean) => void;
  errorMsg: (err: string) => void;
  isError: string;
}

export default function ProfileNickname(props: ProfileNicknameProps) {
  const { nickName, setNickName, isChecked, setIsChecked, isInComplete, errorMsg, isError } = props;
  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 8) e.target.value = e.target.value.slice(0, 8);
    if (nickName !== e.target.value) {
      errorMsg("");
      setIsChecked(false);
    }
    setNickName(e.target.value);
  };

  const isVaildCheckBtn = async () => {
    try {
      const response: AxiosResponse = await joinApi.fetchNickNameValid(nickName);
      if (response.data) {
        errorMsg("nickNameFail");
      } else {
        setIsChecked(true);
        errorMsg("");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorData = error.response?.data;
        if (errorData.status === 400) errorMsg("nickNameInput");
      }
    }
  };

  return (
    <St.ProfileNickname>
      <St.InputContainer>
        <St.NickNameInputForm
          id="nickname"
          placeholder="홍길동"
          onChange={onChangeNickname}
          isincompletestate={nickName === "" && isInComplete}
          isvalidstate={isChecked}
        />
        <St.CheckBtn onClick={isVaildCheckBtn}>중복확인</St.CheckBtn>
      </St.InputContainer>
    </St.ProfileNickname>
  );
}
