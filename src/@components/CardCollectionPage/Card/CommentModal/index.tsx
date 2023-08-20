import useDraggableYContainer from "../../../@common/hooks/useDraggableYContainer";
import useDrawer from "../../../@common/hooks/useDrawer";
import Modal from "../../../@common/Modal";
import * as St from "./style";

interface CommentModalProps {
  onClickBackground: () => void;
}

export default function CommentModal(props: CommentModalProps) {
  const { onClickBackground } = props;
  const { scrollableContainerProps, isScrollEnd } = useDraggableYContainer();
  const { drawerProps, knobRef } = useDrawer(onClickBackground);

  const comments = [
    {
      _id: "64a11752b127cb80869488f5",
      nickname: "닉네임",
      content: "텍스트",
      profileImageUrl:
        "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png",
    },
    {
      _id: "123",
      nickname: "닉네임",
      content: "텍스트",
      profileImageUrl:
        "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png",
    },
    {
      _id: "1233",
      nickname: "닉네임",
      content: "텍스트",
      profileImageUrl:
        "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png",
    },
    {
      _id: "324234",
      nickname: "닉네임",
      content: "텍스트",
      profileImageUrl:
        "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png",
    },
    {
      _id: "123213123",
      nickname: "닉네임",
      content: "텍스트",
      profileImageUrl:
        "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png",
    },
    {
      _id: "123adsfasdf",
      nickname: "닉네임",
      content: "텍스트",
      profileImageUrl:
        "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png",
    },
    {
      _id: "12adsfasdfadsf3",
      nickname: "닉네임",
      content: "텍스트",
      profileImageUrl:
        "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png",
    },
    {
      _id: "12adsfasdfadsf3121212",
      nickname: "닉네임",
      content: "텍스트",
      profileImageUrl:
        "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png",
    },
    {
      _id: "12adsfasdfadsf334343",
      nickname: "닉네임",
      content: "텍스트",
      profileImageUrl:
        "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png",
    },
    {
      _id: "12adsfasdfadsf909093",
      nickname: "닉네임",
      content:
        "최고의 기회가 될 것 같습니다\n저와 비슷한 상황의 동료들과 저를 이끌어주실 멘토들이 있다는 점이 너무 힘이 됩니다",
      profileImageUrl:
        "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png",
    },
    {
      _id: "12adsfasdfadsf",
      nickname: "닉네임",
      content:
        "최고의 기회가 될 것 같습니다\n저와 비슷한 상황의 동료들과 저를 이끌어주실 멘토들이 있다는 점이 너무 힘이 됩니다",
      profileImageUrl:
        "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png",
    },
  ];
  return (
    <Modal theme="COMMENT" closeHandler={onClickBackground}>
      <St.CommentWrapper {...drawerProps}>
        <St.KnobWrapper ref={knobRef}>
          <St.Knob />
        </St.KnobWrapper>
        <St.Comments {...scrollableContainerProps}>
          {comments.map(({ _id, nickname, content, profileImageUrl }) => (
            <St.Comment key={_id}>
              <St.ProfileImg alt="사용자 프로필 이미지" src={profileImageUrl} />
              <St.CommentContent>
                <p>{nickname}</p>
                <p>{content}</p>
              </St.CommentContent>
            </St.Comment>
          ))}
        </St.Comments>
        {!isScrollEnd && <St.Gradient />}
        <St.Input placeholder="답변하기" />
      </St.CommentWrapper>
    </Modal>
  );
}
