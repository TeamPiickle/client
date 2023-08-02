import React from "react";

import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import useModal from "../../@common/hooks/useModal";
import TagsSlider from "../TagsSlider";
import CardMenu from "./CardMenu";
import MenuModal from "./MenuModal";
import St from "./style";

interface LoginCheckProps {
  openLoginModalHandler: () => void;
  _id: string;
  content: string;
  isBookmark: boolean;
  tags: string[];
}

const Card = (props: LoginCheckProps) => {
  const { _id, content, tags } = props;
  const { isModalOpen: isMenuModalOpen, toggleModal: toggleMenuModal } = useModal();

  return (
    <St.Card className={GTM_CLASS_NAME.cardSwipe}>
      <St.Container>
        <St.ContentWrapper className={GTM_CLASS_NAME.cardSwipe}>{content}</St.ContentWrapper>
        <St.TagsWrapper>
          <TagsSlider tags={tags} />
        </St.TagsWrapper>
      </St.Container>
      <CardMenu {...props} toggleMenuModal={toggleMenuModal} />
      {isMenuModalOpen && <MenuModal currentCardId={_id} closeHandler={toggleMenuModal} />}
    </St.Card>
  );
};

export default React.memo(Card);
