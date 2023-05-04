import { VERSION_UPDATES } from "../../../util/main/versionUpdateList";
import HeadlessCTAButton from "../../@common/CTABtn/HeadlessCTAButton";
import Modal from "../../@common/Modal";
import useUpdateModal from "../hooks/useUpdateModal";
import * as St from "./style";

export default function UpdateModal() {
  const { isOpened, handleCloseModal } = useUpdateModal();

  if (!isOpened) return null;

  return (
    <Modal theme="GRAY_BOTTOM" closeHandler={handleCloseModal} isNoCloseBtn={true}>
      <St.Container>
        <St.Tag>23.04.20 업데이트</St.Tag>
        <St.Title>피클 업데이트 안내</St.Title>
        <St.Description>
          Piickle 유저분들의 피드백을 바탕으로 더 사용하기 좋게 만들었어요😎
          <br />
          여러분이 더 편할 수 있도록 돕기 위한 알림이니 처음 보셨다면 꼭 읽어주세요! <br />
          업데이트 안내는 약 1주일동안만 보일 예정으로 이해 부탁 드릴게요!
        </St.Description>
        <St.UpdateLists>
          {VERSION_UPDATES.map((versionUpdate) => (
            <St.ContentsWrapper key={versionUpdate.id}>
              ✅<St.Content>{versionUpdate.content}</St.Content>
            </St.ContentsWrapper>
          ))}
        </St.UpdateLists>
        <HeadlessCTAButton onClick={handleCloseModal}>확인했어요</HeadlessCTAButton>
      </St.Container>
    </Modal>
  );
}
