import Modal from "../../../@common/Modal";
import useToast from "../../../@common/Toast/hooks/useToast";
import * as St from "./style";

interface MenuModalProps {
  closeHandler: () => void;
}

type ModalItem = {
  emoji: string;
  title: string;
  isNeedLogin?: boolean;
  handleClickItem: () => void;
};

export default function MenuModal(props: MenuModalProps) {
  const { closeHandler } = props;
  const showToast = useToast();

  const ModalItems: ModalItem[] = [
    {
      emoji: "🥲",
      title: "이 주제 별로예요",
      handleClickItem: () => {
        closeHandler();
        showToast({ message: "🥰 소중한 의견 주셔서 감사해요", duration: 2.5 });
      },
    },
    {
      emoji: "👀",
      title: "주제 다시 안보기",
      isNeedLogin: true,
      handleClickItem: () => {
        /* todo */
      },
    },
    {
      emoji: "❓",
      title: "주제에 대한 다른 사람들의 의견이 궁금해요",
      handleClickItem: () => {
        closeHandler();
        showToast({ message: "📢 다른 사람들의 의견을 모아서 들려드릴게요", duration: 2.5 });
      },
    },
  ];

  return (
    <Modal theme="WHITE_BOTTOM" closeHandler={closeHandler} isNoCloseBtn>
      <St.ModalContainer>
        {ModalItems.map(({ emoji, title, isNeedLogin, handleClickItem }, idx) => (
          <St.ModalItemWrapper key={idx} onClick={handleClickItem}>
            <St.EmojiWrapper>{emoji}</St.EmojiWrapper>
            {title}
            {isNeedLogin && <St.MessageWrapper>로그인 시 사용가능 합니다</St.MessageWrapper>}
          </St.ModalItemWrapper>
        ))}
      </St.ModalContainer>
    </Modal>
  );
}
