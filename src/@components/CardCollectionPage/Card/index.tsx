import React from "react";

import IcBookmarkCheck_22_28 from "../../../asset/icon/IcBookmarkCheck_23_28";
import IcMenuBtn from "../../../asset/icon/IcMenuBtn";
import IcShareBtn from "../../../asset/icon/IcShareBtn";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import useCardBookmark from "../hooks/useCardBookmark";
import TagsSlider from "../TagsSlider";
import St from "./style";

interface LoginCheckProps {
  openLoginModalHandler: () => void;
  _id: string;
  content: string;
  isBookmark: boolean;
  tags: string[];
}

const Card = (props: LoginCheckProps) => {
  const { _id, content, isBookmark, tags, openLoginModalHandler } = props;

  const { isBookmarked, handleClickBookmark } = useCardBookmark(isBookmark, openLoginModalHandler);

  return (
    <St.Card className={GTM_CLASS_NAME.cardSwipe}>
      <St.Container>
        <St.ContentWrapper className={GTM_CLASS_NAME.cardSwipe}>{content}</St.ContentWrapper>
        <St.TagsWrapper>
          <TagsSlider tags={tags} />
        </St.TagsWrapper>
      </St.Container>
      <St.MenuWrapper>
        <St.ButtonWrapper>
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
            <IcBookmarkCheck_22_28 isChecked={isBookmarked} />
          </St.IconWrapper>
          <St.ButtonLabel>저장하기</St.ButtonLabel>
        </St.ButtonWrapper>
      </St.MenuWrapper>
    </St.Card>
  );
};

export default React.memo(Card);
