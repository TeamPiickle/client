import { LocationType } from "../../../../types/cardCollection";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import useShowByCardType from "../../../@common/hooks/useShowByQuery";
import Modal from "../../../@common/Modal";
import useToast from "../../../@common/Toast/hooks/useToast";
import { handleClickBlacklistType } from "../../hooks/useBlacklist";
import { autoSlideType } from "../../hooks/useCardSwiper";
import * as St from "./style";

interface MenuModalProps {
  currentCardId: string;
  closeHandler: () => void;
  autoSlide: autoSlideType;
  handleClickAddBlacklist: handleClickBlacklistType;
  handleClickCancelBlacklist: handleClickBlacklistType;
}

type ModalItem = {
  emoji: string;
  title: string;
  isNeedLogin?: boolean;
  handleClickItem: () => void;
  gtmClassName: string;
};

export default function MenuModal(props: MenuModalProps) {
  const { currentCardId, closeHandler, autoSlide, handleClickAddBlacklist, handleClickCancelBlacklist } = props;
  const { showToast, blackoutToast } = useToast();

  const { isShow: isBlockShow } = useShowByCardType([LocationType.BEST, LocationType.MEDLEY]);

  const onSuccessAddBlacklist = () => {
    closeHandler();
    showToast({
      message: "🚫 해당 대화주제가 더 이상 추천되지 않아요",
      duration: 3.5,
      handleClickCancel: () => {
        handleClickCancelBlacklist({ _id: currentCardId, onSuccess: blackoutToast });
        autoSlide.slideUp();
      },
    });
    autoSlide.slideDown();
  };

  const ModalItems: ModalItem[] = [
    {
      emoji: "🥲",
      title: "이 주제 별로예요",
      handleClickItem: () => {
        closeHandler();
        showToast({ message: "🥰 소중한 의견 주셔서 감사해요", duration: 2.5 });
      },
      gtmClassName: GTM_CLASS_NAME.cardEtcBad,
    },
    {
      emoji: "👀",
      title: "주제 다시 안보기",
      isNeedLogin: true,
      handleClickItem: () => {
        handleClickAddBlacklist({
          _id: currentCardId,
          onSuccess: onSuccessAddBlacklist,
        });
      },
      gtmClassName: GTM_CLASS_NAME.cardEtcBlock,
    },
    {
      emoji: "❓",
      title: "주제에 대한 다른 사람들의 의견이 궁금해요",
      handleClickItem: () => {
        closeHandler();
        showToast({ message: "📢 다른 사람들의 의견을 모아서 들려드릴게요", duration: 2.5 });
      },
      gtmClassName: GTM_CLASS_NAME.cardEtcWonder,
    },
  ];

  return (
    <Modal theme="WHITE_BOTTOM" closeHandler={closeHandler} isNoCloseBtn>
      <St.ModalContainer>
        {ModalItems.map(({ emoji, title, isNeedLogin, handleClickItem, gtmClassName }, idx) => {
          if (idx === 1 && !isBlockShow) {
            return null;
          } else {
            return (
              <St.ModalItemWrapper key={idx} onClick={handleClickItem} className={gtmClassName}>
                <St.EmojiWrapper className={gtmClassName}>{emoji}</St.EmojiWrapper>
                {title}
                {isNeedLogin && (
                  <St.MessageWrapper className={gtmClassName}>로그인 시 사용가능 합니다</St.MessageWrapper>
                )}
              </St.ModalItemWrapper>
            );
          }
        })}
      </St.ModalContainer>
    </Modal>
  );
}
