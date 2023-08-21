import IcBookmarkCheck_23_28 from "../../../../asset/icon/IcBookmarkCheck_23_28";
import IcMenuBtn from "../../../../asset/icon/IcMenuBtn";
import IcShareBtn from "../../../../asset/icon/IcShareBtn";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import useCardBookmark from "../../hooks/useCardBookmark";
import useCardShare from "../../hooks/useCardShare";
import * as St from "./style";

interface CardMenuProps {
  _id: string;
  isBookmark: boolean;
  onClickLogoutBookmark: () => void;
  toggleMenuModal: () => void;
}

export default function CardMenu(props: CardMenuProps) {
  const { _id, isBookmark, onClickLogoutBookmark, toggleMenuModal } = props;

  const { handleCopyClipBoard } = useCardShare();
  const { isBookmarked, handleClickBookmark } = useCardBookmark(isBookmark, onClickLogoutBookmark);

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
