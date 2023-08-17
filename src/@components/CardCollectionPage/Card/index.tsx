import React from "react";

import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import useModal from "../../@common/hooks/useModal";
import useBlacklist from "../hooks/useBlacklist";
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
}

const Card = (props: LoginCheckProps) => {
  const { _id, content, tags, autoSlide, openLoginModalHandler } = props;
  const { isModalOpen: isMenuModalOpen, toggleModal: toggleMenuModal } = useModal();
  const { getIsBlacklist, handleClickAddBlacklist, handleClickCancelBlacklist } = useBlacklist(openLoginModalHandler);

  return (
    <St.Card className={GTM_CLASS_NAME.cardSwipe}>
      <St.Container>
        <St.ContentWrapper className={GTM_CLASS_NAME.cardSwipe}>{content}</St.ContentWrapper>
        <St.TagsWrapper>
          <TagsSlider tags={tags} />
        </St.TagsWrapper>
      </St.Container>
      <CardMenu {...props} toggleMenuModal={toggleMenuModal} />

      {getIsBlacklist(_id) && (
        <St.BlockCardWrapper>
          <St.BlockCardText>다시 안보기를 설정한 주제입니다</St.BlockCardText>
          <St.BlockCardButton onClick={() => handleClickCancelBlacklist({ _id })}>취소하기</St.BlockCardButton>
        </St.BlockCardWrapper>
      )}

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
