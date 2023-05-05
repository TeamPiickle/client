import React from "react";

import IcBookmarkCheck from "../../../asset/icon/IcBookmarkCheck";
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
  firstCardObsvRef?: React.RefObject<HTMLDivElement>;
}

const Card = (props: LoginCheckProps) => {
  const { _id, content, isBookmark, tags, openLoginModalHandler, firstCardObsvRef } = props;

  const { isBookmarked, handleClickBookmark } = useCardBookmark(isBookmark, openLoginModalHandler);

  return (
    <St.Card ref={firstCardObsvRef} className={GTM_CLASS_NAME.cardSwipe}>
      <St.Container>
        <St.ContentWrapper className={GTM_CLASS_NAME.cardSwipe}>{content}</St.ContentWrapper>
        <St.TagsWrapper>
          <TagsSlider tags={tags} />
        </St.TagsWrapper>
      </St.Container>
      <St.BookmarkWrapper
        className={GTM_CLASS_NAME.cardBookmark}
        onClick={() => handleClickBookmark(_id)}
        aria-label="북마크"
        role="dialog">
        <IcBookmarkCheck isChecked={isBookmarked} />
      </St.BookmarkWrapper>
    </St.Card>
  );
};

export default React.memo(Card);
