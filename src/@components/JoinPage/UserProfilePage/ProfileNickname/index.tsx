import axios, { AxiosResponse } from "axios";

import { joinApi } from "../../../../core/api/join";
import { JOIN_PROFILE_ALERT_KEY } from "../../../../core/join/userProfileErrorMessage";
import checkInvalidNickName from "../../../../util/checkInvalidNickName";
import { St } from "./style";

interface ProfileNicknameProps {
  nickName: string;
  setNickName: (nickName: string) => void;
  isChecked: boolean;
  isInComplete: boolean;
  setIsChecked: (button: boolean) => void;
  handleErrorMsg: (err: string) => void;
}

export default function ProfileNickname(props: ProfileNicknameProps) {
  const { nickName, setNickName, isChecked, setIsChecked, isInComplete, handleErrorMsg } = props;

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 8) e.target.value = e.target.value.slice(0, 8);

    if (nickName !== e.target.value) {
      handleErrorMsg(JOIN_PROFILE_ALERT_KEY.Okay);
      setIsChecked(false);
    }
    setNickName(e.target.value);
  };

  const checkSpaceBar = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      e.preventDefault();
      return false;
    }
  };

  const isVaildCheckBtn = async () => {
    try {
      const response: AxiosResponse = await joinApi.fetchNickNameValid(nickName);
      if (checkInvalidNickName(nickName)) {
        handleErrorMsg(JOIN_PROFILE_ALERT_KEY.nickName.valid);
      } else if (response.data) {
        handleErrorMsg(JOIN_PROFILE_ALERT_KEY.nickName.fail);
      } else {
        setIsChecked(true);
        handleErrorMsg(JOIN_PROFILE_ALERT_KEY.Okay);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorData = error.response?.data;
        if (errorData.status === 400) handleErrorMsg(JOIN_PROFILE_ALERT_KEY.nickName.input);
      }
    }
  };

  return (
    <St.ProfileNickname>
      <St.InputContainer>
        <St.NickNameInputForm
          id="nickname"
          placeholder="홍길동"
          defaultValue={nickName}
          onChange={onChangeNickname}
          isincompletestate={nickName === "" && isInComplete}
          isvalidstate={isChecked}
          onKeyDown={checkSpaceBar}
        />
        <St.CheckBtn onClick={isVaildCheckBtn}>중복확인</St.CheckBtn>
      </St.InputContainer>
    </St.ProfileNickname>
  );
}
