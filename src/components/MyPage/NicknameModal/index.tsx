import axios from "axios";
import { useState } from "react";

import { myPageApi } from "../../../core/api/myPage";
import Modal from "../../common/Modal";
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
    setNewNickname(e.target.value);
  };

  const saveNewNickname = async () => {
    try {
      await myPageApi.patchUserNickName(newNickname);
      closeHandler();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorData = error.response?.data;

        if (errorData.status === 400) setErrorMessage("이미 존재하는 닉네임입니다");
      }
    }
  };

  return (
    <Modal closeHandler={closeHandler}>
      <St.Container>
        <St.Wrapper>
          <St.Label>현재 닉네임</St.Label>
          <St.CurrentNickname type="text" placeholder={nickname} disabled />
        </St.Wrapper>
        <St.Wrapper>
          <St.Label>새로운 닉네임</St.Label>
          <St.NewNickname type="text" id="newNickname" onChange={onChangeNickname} />
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
