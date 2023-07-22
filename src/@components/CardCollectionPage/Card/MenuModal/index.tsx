import useModal from "../../../@common/hooks/useModal";
import Modal from "../../../@common/Modal";
import * as St from "./style";

interface MenuModalProps {
  closeHandler: () => void;
}

export default function MenuModal(props: MenuModalProps) {
  const { closeHandler } = props;

  return (
    <Modal theme="WHITE_BOTTOM" closeHandler={closeHandler} isNoCloseBtn>
      <St.ModalContainer>
        <St.ModalItemWrapper>
          <St.EmojiWrapper>🥲</St.EmojiWrapper>이 주제 별로예요
        </St.ModalItemWrapper>
        <St.ModalItemWrapper>
          <St.EmojiWrapper>👀</St.EmojiWrapper>주제 다시 안보기
          <St.MessageWrapper>로그인 시 사용가능 합니다</St.MessageWrapper>
        </St.ModalItemWrapper>
        <St.ModalItemWrapper>
          <St.EmojiWrapper>❓</St.EmojiWrapper>주제에 대한 다른 사람들의 의견이 궁금해요
        </St.ModalItemWrapper>
      </St.ModalContainer>
    </Modal>
  );
}
