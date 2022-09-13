import axios, { AxiosResponse } from "axios";
import { useState } from "react";

import { joinApi } from "../../../../core/api/join";
import { errorMessage } from "../../../../core/join/userProfileErrorMsg";
import { St } from "./style";

interface ProfileNicknameProps {
  nickName: string;
  setNickName: (nickName: string) => void;
  isChecked: boolean;
  isInComplete: boolean;
  setIsChecked: (button: boolean) => void;
}

export default function ProfileNickname(props: ProfileNicknameProps) {
  const { nickName, setNickName, isChecked, setIsChecked, isInComplete } = props;
  const [isError, setIsError] = useState<string>("");
  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 8) e.target.value = e.target.value.slice(0, 8);
    setNickName(e.target.value);
  };

  const isVaildCheckBtn = async () => {
    try {
      const response: AxiosResponse = await joinApi.fetchNickNameValid(nickName);
      if (response.data) {
        setIsError("fail");
      } else {
        setIsChecked(true);
        setIsError("success");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorData = error.response?.data;
        if (errorData.status === 400) setIsError("input");
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
          nickName={nickName}
          isChecked={isChecked}
          isInComplete={isInComplete}
          isError={isError}
        />
        <St.CheckBtn onClick={isVaildCheckBtn}>중복확인</St.CheckBtn>
      </St.InputContainer>
      {(isInComplete && nickName == "") || isError === "input" ? (
        <St.ErrorMessage>{errorMessage.nickName.input}</St.ErrorMessage>
      ) : isInComplete && !isChecked ? (
        <St.ErrorMessage>{errorMessage.nickName.check}</St.ErrorMessage>
      ) : null}
      {isError === "fail" ? (
        <St.ErrorMessage>{errorMessage.nickName.fail}</St.ErrorMessage>
      ) : isError === "success" ? (
        <St.SuccessMessage>{errorMessage.nickName.success}</St.SuccessMessage>
      ) : (
        ""
      )}
    </St.ProfileNickname>
  );
}
