import React from "react";

import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import useModal from "../../@common/hooks/useModal";
import { handleClickBlacklistType } from "../hooks/useBlacklist";
import { autoSlideType } from "../hooks/useCardSwiper";
import TagsSlider from "../TagsSlider";
import CardMenu from "./CardMenu";
import MenuModal from "./MenuModal";
import St from "./style";

interface LoginCheckProps {
  autoSlide: autoSlideType;
  _id: string;
  content: string;
  isBookmark: boolean;
  tags: string[];
  openLoginModalHandler: () => void;
  handleClickAddBlacklist: handleClickBlacklistType;
  handleClickCancelBlacklist: handleClickBlacklistType;
}

const Card = (props: LoginCheckProps) => {
  const { _id, content, tags, autoSlide, handleClickAddBlacklist, handleClickCancelBlacklist } = props;
  const { isModalOpen: isMenuModalOpen, toggleModal: toggleMenuModal } = useModal();

  return (
    <St.Card className={GTM_CLASS_NAME.cardSwipe}>
      <St.Container>
        <St.ContentWrapper className={GTM_CLASS_NAME.cardSwipe}>{content.replace(/\\n/g, "")}</St.ContentWrapper>
        <St.TagsWrapper>
          <TagsSlider tags={tags} />
        </St.TagsWrapper>
      </St.Container>
      <CardMenu {...props} toggleMenuModal={toggleMenuModal} />
      {isMenuModalOpen && (
        <MenuModal
          currentCardId={_id}
          closeHandler={toggleMenuModal}
          autoSlide={autoSlide}
          handleClickAddBlacklist={handleClickAddBlacklist}
          handleClickCancelBlacklist={handleClickCancelBlacklist}
        />
      )}
    </St.Card>
  );
};

export default React.memo(Card);
