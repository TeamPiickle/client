import IcBookmarkCheck_23_28 from "../../../../asset/icon/IcBookmarkCheck_23_28";
import IcCommentBtn from "../../../../asset/icon/IcCommentBtn";
import IcMenuBtn from "../../../../asset/icon/IcMenuBtn";
import IcShareBtn from "../../../../asset/icon/IcShareBtn";
import { LocationType } from "../../../../types/cardCollection";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import useCardType from "../../../@common/hooks/useCardType";
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

  const { cardType } = useCardType();

  return (
    <St.MenuContainer ismenuadded={cardType === LocationType.EVENT}>
      <St.ButtonWrapper onClick={toggleMenuModal}>
        <IcMenuBtn />
      </St.ButtonWrapper>

      <St.ButtonWrapper onClick={() => handleCopyClipBoard(_id)}>
        <St.IconWrapper>
          <IcShareBtn />
        </St.IconWrapper>
        <St.ButtonLabel>공유하기</St.ButtonLabel>
      </St.ButtonWrapper>

      <St.ButtonWrapper
        className={GTM_CLASS_NAME.cardBookmark}
        onClick={() => handleClickBookmark(_id)}
        aria-label="북마크"
        role="dialog">
        <St.IconWrapper>
          <IcBookmarkCheck_23_28 isChecked={isBookmarked} />
        </St.IconWrapper>
        <St.ButtonLabel>저장하기</St.ButtonLabel>
      </St.ButtonWrapper>

      {cardType === LocationType.EVENT && (
        <St.ButtonWrapper onClick={() => handleCopyClipBoard(_id)}>
          <St.IconWrapper>
            <IcCommentBtn />
          </St.IconWrapper>
          <St.ButtonLabel ismenuadded={cardType === LocationType.EVENT}>댓글달기</St.ButtonLabel>
        </St.ButtonWrapper>
      )}
    </St.MenuContainer>
  );
}
