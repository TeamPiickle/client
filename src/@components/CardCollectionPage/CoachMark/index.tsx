import IcMenuBtn from "../../../asset/icon/IcMenuBtn";
import IcShareBtn from "../../../asset/icon/IcShareBtn";
import useOutClickCloser from "../../@common/hooks/useOutClickCloser";
import Modal from "../../@common/Modal";
import * as St from "./style";

interface CoachMarkProps {
  closeHandler: () => void;
}

export default function CoachMark(props: CoachMarkProps) {
  const { closeHandler } = props;
  const outClickCloserRef = useOutClickCloser(closeHandler, true);

  return (
    <Modal theme={"COACHMARK"} closeHandler={closeHandler}>
      <St.Container ref={outClickCloserRef}>
        <St.Contents>
          새로 생긴 기능들을
          <br />
          확인해보세요
        </St.Contents>
        <St.ImageWrapper>
          <St.ButtonWrapper>
            <IcMenuBtn isLighted={true} />
          </St.ButtonWrapper>
          <St.ButtonWrapper>
            <St.IconWrapper>
              <IcShareBtn isLighted={true} />
            </St.IconWrapper>
            <St.ButtonLabel>공유하기</St.ButtonLabel>
          </St.ButtonWrapper>
        </St.ImageWrapper>
      </St.Container>
    </Modal>
  );
}
