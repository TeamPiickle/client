import { versionUpdateList } from "../../../util/main/updateListsContents";
import Modal from "../../@common/Modal";
import * as St from "./style";

interface UpdateModalProps {
  closeHandler: () => void;
}

export default function UpdateModal(props: UpdateModalProps) {
  const { closeHandler } = props;

  return (
    <Modal theme="GRAY_BOTTOM" closeHandler={closeHandler}>
      <St.Container>
        <St.Tag>23.04.20 업데이트</St.Tag>
        <St.Title>피클 업데이트 안내</St.Title>
        <St.Description>
          Piickle 유저분들의 피드백을 바탕으로 더 사용하기 좋게 만들었어요 <br />
          앞으로도 많은 피드백 부탁 드립니다 <br />
          지금 하는 안내는 1주일 정도만 유지되니 이해 부탁드릴게요!
        </St.Description>
        <St.UpdateLists>
          {versionUpdateList.map((versionUpdateList) => (
            <St.ContentsWrapper key={versionUpdateList.id}>
              ✅<St.Content>{versionUpdateList.content}</St.Content>
            </St.ContentsWrapper>
          ))}
        </St.UpdateLists>
        <St.CheckBtn onClick={closeHandler}>확인했어요</St.CheckBtn>
      </St.Container>
    </Modal>
  );
}
