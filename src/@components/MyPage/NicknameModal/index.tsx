import axios from "axios";
import { useState } from "react";

import { myPageApi } from "../../../core/api/myPage";
import checkInvalidNickName from "../../../util/checkInvalidNickName";
import Modal from "../../@common/Modal";
import { St } from "./style";

interface ModifyNicknameProps {
  closeHandler: () => void;
  nickname: string;
}

export default function NicknameModal(props: ModifyNicknameProps) {
  const { closeHandler, nickname } = props;
  const [newNickname, setNewNickname] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 8) e.target.value = e.target.value.slice(0, 8);

    setNewNickname(e.target.value);
  };

  const saveNewNickname = async () => {
    try {
      await myPageApi.patchUserNickName({ nickname: newNickname });
      checkInvalidNickName(newNickname) ? setErrorMessage("닉네임에 특수문자를 포함할 수 없습니다") : closeHandler();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorData = error.response?.data;

        if (errorData.status === 400) setErrorMessage("이미 존재하는 닉네임입니다");
      }
    }
  };

  const checkSpaceBar = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      e.preventDefault();
      return false;
    }
  };

  return (
    <Modal closeHandler={closeHandler}>
      <St.Container>
        <St.Wrapper>
          <St.Label>현재 닉네임</St.Label>
          <St.CurrentNickname aria-label={nickname} type="text" placeholder={nickname} disabled />
        </St.Wrapper>
        <St.Wrapper>
          <St.Label>새로운 닉네임</St.Label>
          <St.NewNickname
            aria-label="새로운 닉네임 입력칸"
            type="text"
            id="newNickname"
            onChange={onChangeNickname}
            onKeyDown={(e) => checkSpaceBar(e)}
          />
          {errorMessage !== "" && <St.ErrorMessage>{errorMessage}</St.ErrorMessage>}
        </St.Wrapper>
        <St.ButtonWrapper>
          <St.SaveButton type="button" onClick={saveNewNickname}>
            변경사항 저장
          </St.SaveButton>
        </St.ButtonWrapper>
      </St.Container>
    </Modal>
  );
}
