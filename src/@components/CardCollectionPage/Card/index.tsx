import React from "react";

import IcBookmarkCheck_22_28 from "../../../asset/icon/IcBookmarkCheck_23_28";
import IcMenuBtn from "../../../asset/icon/IcMenuBtn";
import IcShareBtn from "../../../asset/icon/IcShareBtn";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import useCardBookmark from "../hooks/useCardBookmark";
import TagsSlider from "../TagsSlider";
import CardMenu from "./CardMenu";
import St from "./style";

export interface LoginCheckProps {
  openLoginModalHandler: () => void;
  _id: string;
  content: string;
  isBookmark: boolean;
  tags: string[];
}

const Card = (props: LoginCheckProps) => {
  const { content, tags } = props;

  return (
    <St.Card className={GTM_CLASS_NAME.cardSwipe}>
      <St.Container>
        <St.ContentWrapper className={GTM_CLASS_NAME.cardSwipe}>{content}</St.ContentWrapper>
        <St.TagsWrapper>
          <TagsSlider tags={tags} />
        </St.TagsWrapper>
      </St.Container>
      <CardMenu {...props} />
    </St.Card>
  );
};

export default React.memo(Card);
