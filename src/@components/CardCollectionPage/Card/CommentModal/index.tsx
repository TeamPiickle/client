import { useState } from "react";

import IcSubmitBtn from "../../../../asset/icon/IcSubmitBtn";
import useDraggableYContainer from "../../../@common/hooks/useDraggableYContainer";
import useDrawer from "../../../@common/hooks/useDrawer";
import Modal from "../../../@common/Modal";
import { useComments } from "../../hooks/useComments";
import * as St from "./style";

interface CommentModalProps {
  cardId: string;
  onClickBackground: () => void;
  onSubmitComment?: (_id: string) => void;
}

export default function CommentModal(props: CommentModalProps) {
  const { cardId, onClickBackground, onSubmitComment } = props;
  const { scrollableContainerProps, isScrollEnd } = useDraggableYContainer();
  const { drawerProps, knobRef } = useDrawer(onClickBackground);

  const [answer, setAnswer] = useState<string>();

  const { comments } = useComments(cardId);

  const handleClickSubmit = () => {
    onSubmitComment && onSubmitComment(cardId);
  };

  return (
    <Modal theme="COMMENT" closeHandler={onClickBackground}>
      <St.CommentWrapper {...drawerProps}>
        <St.KnobWrapper ref={knobRef}>
          <St.Knob />
        </St.KnobWrapper>
        <St.Comments {...scrollableContainerProps}>
          {comments &&
            comments.map(({ _id, nickname, content, profileImageUrl }) => (
              <St.Comment key={_id}>
                <St.ProfileImgWrapper>
                  <St.ProfileImg alt="사용자 프로필 이미지" src={profileImageUrl} />
                </St.ProfileImgWrapper>

                <St.CommentContent>
                  <St.Nickname>{nickname}</St.Nickname>
                  <St.Text>{content}</St.Text>
                </St.CommentContent>
              </St.Comment>
            ))}
        </St.Comments>
        {!isScrollEnd && <St.Gradient />}
        <St.InputWrapper>
          <St.Input
            placeholder="답변하기"
            onChange={(e) => setAnswer(e.target.value)}
            maxLength={150}
            rows={answer ? answer?.split("\n").length : 1}
          />
          {answer && (
            <St.SubmitBtn onClick={handleClickSubmit}>
              <IcSubmitBtn />
            </St.SubmitBtn>
          )}
        </St.InputWrapper>
      </St.CommentWrapper>
    </Modal>
  );
}
