import { useRecoilState, useSetRecoilState } from "recoil";

import { activeStateToast } from "../../../../core/atom/menuBar";
import Modal from "../../../@common/Modal";
import * as St from "./style";

interface MenuModalProps {
  closeHandler: () => void;
  fireToast: () => void;
}

export default function MenuModal(props: MenuModalProps) {
  const { closeHandler, fireToast } = props;
  const setActiveToast = useSetRecoilState(activeStateToast);

  return (
    <Modal theme="WHITE_BOTTOM" closeHandler={closeHandler} isNoCloseBtn>
      <St.ModalContainer>
        <St.ModalItemWrapper
          onClick={() => {
            closeHandler();
            setActiveToast({ message: "🥰 소중한 의견 주셔서 감사해요", duration: 2.5 });
            fireToast();
          }}>
          <St.EmojiWrapper>🥲</St.EmojiWrapper>이 주제 별로예요
        </St.ModalItemWrapper>
        <St.ModalItemWrapper>
          <St.EmojiWrapper>👀</St.EmojiWrapper>주제 다시 안보기
          <St.MessageWrapper>로그인 시 사용가능 합니다</St.MessageWrapper>
        </St.ModalItemWrapper>
        <St.ModalItemWrapper
          onClick={() => {
            closeHandler();
            setActiveToast({ message: "📢 다른 사람들의 의견을 모아서 들려드릴게요", duration: 2.5 });
            fireToast();
          }}>
          <St.EmojiWrapper>❓</St.EmojiWrapper>주제에 대한 다른 사람들의 의견이 궁금해요
        </St.ModalItemWrapper>
      </St.ModalContainer>
    </Modal>
  );
}
