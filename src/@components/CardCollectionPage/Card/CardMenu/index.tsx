import IcBookmarkCheck_23_28 from "../../../../asset/icon/IcBookmarkCheck_23_28";
import IcCommentBtn from "../../../../asset/icon/IcCommentBtn";
import IcMenuBtn from "../../../../asset/icon/IcMenuBtn";
import IcShareBtn from "../../../../asset/icon/IcShareBtn";
import { LocationType } from "../../../../types/cardCollection";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import useCardType from "../../../@common/hooks/useCardType";
import useToast from "../../../@common/Toast/hooks/useToast";
import useCardBookmark from "../../hooks/useCardBookmark";
import useCardShare from "../../hooks/useCardShare";
import * as St from "./style";

interface CardMenuProps {
  _id: string;
  isBookmark: boolean;
  onClickLogoutBookmark: () => void;
  toggleMenuModal: () => void;
  toggleCommentModal: () => void;
}

export default function CardMenu(props: CardMenuProps) {
  const { _id, isBookmark, onClickLogoutBookmark, toggleMenuModal, toggleCommentModal } = props;

  const { handleCopyClipBoard } = useCardShare();
  const { isBookmarked, handleClickBookmark } = useCardBookmark(isBookmark, onClickLogoutBookmark);

  const { cardType } = useCardType();
  const { showToast } = useToast();

  const handleClickBlockedMenu = () =>
    showToast({
      message: "❌ 댓글달기 기능만 사용 가능합니다!",
      duration: 2.5,
      isDark: true,
    });

  if (cardType === LocationType.EVENT) {
    return (
      <St.MenuContainer ismenuadded>
        <St.ButtonWrapper onClick={handleClickBlockedMenu}>
          <IcMenuBtn />
        </St.ButtonWrapper>

        <St.ButtonWrapper onClick={handleClickBlockedMenu}>
          <St.IconWrapper>
            <IcShareBtn />
          </St.IconWrapper>
          <St.ButtonLabel ismenuadded>공유하기</St.ButtonLabel>
        </St.ButtonWrapper>

        <St.ButtonWrapper
          className={GTM_CLASS_NAME.cardBookmark}
          onClick={handleClickBlockedMenu}
          aria-label="북마크"
          role="dialog">
          <St.IconWrapper>
            <IcBookmarkCheck_23_28 isChecked={isBookmarked} />
          </St.IconWrapper>
          <St.ButtonLabel ismenuadded>저장하기</St.ButtonLabel>
        </St.ButtonWrapper>

        <St.ButtonWrapper onClick={toggleCommentModal}>
          <St.IconWrapper>
            <IcCommentBtn />
          </St.IconWrapper>
          <St.ButtonLabel ismenuadded islighted>
            댓글달기
          </St.ButtonLabel>
        </St.ButtonWrapper>
      </St.MenuContainer>
    );
  }

  return (
    <St.MenuContainer>
      <St.ButtonWrapper className={GTM_CLASS_NAME.cardEtc} onClick={toggleMenuModal}>
        <IcMenuBtn />
      </St.ButtonWrapper>

      <St.ButtonWrapper className={GTM_CLASS_NAME.cardShare} onClick={() => handleCopyClipBoard(_id)}>
        <St.IconWrapper className={GTM_CLASS_NAME.cardShare}>
          <IcShareBtn />
        </St.IconWrapper>
        <St.ButtonLabel className={GTM_CLASS_NAME.cardShare}>공유하기</St.ButtonLabel>
      </St.ButtonWrapper>

      <St.ButtonWrapper
        className={GTM_CLASS_NAME.cardBookmark}
        onClick={() => handleClickBookmark(_id)}
        aria-label="북마크"
        role="dialog">
        <St.IconWrapper className={GTM_CLASS_NAME.cardBookmark}>
          <IcBookmarkCheck_23_28 isChecked={isBookmarked} />
        </St.IconWrapper>
        <St.ButtonLabel className={GTM_CLASS_NAME.cardBookmark}>저장하기</St.ButtonLabel>
      </St.ButtonWrapper>
    </St.MenuContainer>
  );
}
