import React from "react";

import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import TagsSlider from "../TagsSlider";
import CardMenu from "./CardMenu";
import St from "./style";

interface LoginCheckProps {
  openLoginModalHandler: () => void;
  _id: string;
  content: string;
  isBookmark: boolean;
  tags: string[];
  toggleMenuModal: () => void;
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
