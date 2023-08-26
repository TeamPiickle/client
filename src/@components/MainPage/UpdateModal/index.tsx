import { VERSION_UPDATES } from "../../../util/main/versionUpdateList";
import HeadlessCTAButton from "../../@common/CTABtn/HeadlessCTAButton";
import useStorageModal from "../../@common/hooks/useStorageModal";
import Modal from "../../@common/Modal";
import * as St from "./style";
const POPUP_SESSION_KEY = "update-popup-shown";

export default function UpdateModal() {
  const { isOpened, handleCloseModal } = useStorageModal(sessionStorage, POPUP_SESSION_KEY);

  if (!isOpened) return null;
  return (
    <Modal theme="GRAY_BOTTOM" closeHandler={handleCloseModal} isNoCloseBtn={true}>
      <St.Container>
        <St.Tag>23.08.26 업데이트</St.Tag>
        <St.Title>피클 4차 업데이트 안내</St.Title>
        <St.Description>
          Piickle 유저분들의 피드백을 바탕으로 더 사용하기 좋게 만들었어요.
          <br />
          앞으로도 많은 피드백 부탁 드려요🥰
          <br />약 1주일동안만 업데이트 알림이 안내될 예정입니다.
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
