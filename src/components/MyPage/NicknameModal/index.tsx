import Modal from "../../common/Modal";
import { St } from "./style";

interface ModifyNicknameProps {
  closeHandler: () => void;
  nickname: string;
}

export default function NicknameModal(props: ModifyNicknameProps) {
  const { closeHandler, nickname } = props;

  return (
    <Modal closeHandler={closeHandler}>
      <St.Container>
        <St.Wrapper>
          <St.Label>현재 닉네임</St.Label>
          <St.CurrentNicknameWrapper>
            <St.CurrentNickname type="text" placeholder={nickname} disabled />
          </St.CurrentNicknameWrapper>
        </St.Wrapper>
        <St.Wrapper>
          <St.Label>새로운 닉네임</St.Label>
          <St.NewNicknameWrapper>
            <St.NewNickname type="text" />
          </St.NewNicknameWrapper>
        </St.Wrapper>
        <St.ButtonWrapper>
          <St.SaveButton type="button">변경사항 저장</St.SaveButton>
        </St.ButtonWrapper>
      </St.Container>
    </Modal>
  );
}
