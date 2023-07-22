import IcBookmarkCheck_23_28 from "../../../../asset/icon/IcBookmarkCheck_23_28";
import IcMenuBtn from "../../../../asset/icon/IcMenuBtn";
import IcShareBtn from "../../../../asset/icon/IcShareBtn";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import useCardBookmark from "../../hooks/useCardBookmark";
import { LoginCheckProps } from "..";
import * as St from "./style";

export default function CardMenu(props: LoginCheckProps) {
  const { _id, isBookmark, openLoginModalHandler, toggleMenuModal } = props;

  const { isBookmarked, handleClickBookmark } = useCardBookmark(isBookmark, openLoginModalHandler);
  return (
    <St.MenuContainer>
      <St.ButtonWrapper onClick={toggleMenuModal}>
        <IcMenuBtn isLighted={false} />
      </St.ButtonWrapper>
      <St.ButtonWrapper>
        <St.IconWrapper>
          <IcShareBtn isLighted={false} />
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
    </St.MenuContainer>
  );
}
