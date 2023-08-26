import React from "react";

import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import useModal from "../../@common/hooks/useModal";
import LoginModal from "../../@common/LoginModal";
import useBlacklist from "../hooks/useBlacklist";
import { autoSlideType } from "../hooks/useCardSwiper";
import { useComments } from "../hooks/useComments";
import TagsSlider from "../TagsSlider";
import CardMenu from "./CardMenu";
import CommentModal from "./CommentModal";
import MenuModal from "./MenuModal";
import St from "./style";

interface LoginCheckProps {
  autoSlide: autoSlideType;
  _id: string;
  content: string;
  isBookmark: boolean;
  tags: string[];
  essential?: boolean;
}

const Card = (props: LoginCheckProps) => {
  const { _id, content, tags, autoSlide } = props;

  const { isModalOpen: isMenuModalOpen, toggleModal: toggleMenuModal } = useModal();
  const { isModalOpen: isBookmarkModalOpen, toggleModal: toggleBookmarkModalOpen } = useModal();
  const { isModalOpen: isBlacklistModalOpen, toggleModal: toggleBlacklistModalOpen } = useModal();
  const { isModalOpen: isCommentModalOpen, toggleModal: toggleCommenttModalOpen } = useModal();

  const { getIsBlacklist, handleClickAddBlacklist, handleClickCancelBlacklist } =
    useBlacklist(toggleBlacklistModalOpen);

  const { comments, handleSubmitComment, handleClickComment, isComment } = useComments(_id, toggleCommenttModalOpen);

  return (
    <St.Card className={GTM_CLASS_NAME.cardSwipe}>
      <St.Container>
        <St.ContentWrapper className={GTM_CLASS_NAME.cardSwipe}>{content}</St.ContentWrapper>
        <St.TagsWrapper>
          <TagsSlider tags={tags} />
        </St.TagsWrapper>
      </St.Container>
      <CardMenu
        {...props}
        toggleCommentModal={handleClickComment}
        toggleMenuModal={toggleMenuModal}
        onClickLogoutBookmark={toggleBookmarkModalOpen}
      />

      {getIsBlacklist(_id) && (
        <St.BlockCardWrapper>
          <St.BlockCardText>다시 안보기를 설정한 주제입니다</St.BlockCardText>
          <St.BlockCardButton
            onClick={() => handleClickCancelBlacklist({ _id })}
            className={GTM_CLASS_NAME.cardEtcCancelBlock}>
            취소하기
          </St.BlockCardButton>
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
      {isComment && comments && (
        <CommentModal
          cardId={_id}
          comments={comments}
          handleSubmitComment={handleSubmitComment}
          onClickBackground={handleClickComment}
        />
      )}

      {isBookmarkModalOpen && <LoginModal closeHandler={toggleBookmarkModalOpen} contents={"북마크 기능을"} />}
      {isBlacklistModalOpen && (
        <LoginModal closeHandler={toggleBlacklistModalOpen} contents={"주제 다시 안보기 기능을"} />
      )}
      {isCommentModalOpen && <LoginModal closeHandler={toggleBlacklistModalOpen} contents={"댓글 기능을"} />}
    </St.Card>
  );
};

export default React.memo(Card);
