import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { sliderIdxState } from "../../../../core/atom/slider";
import { routePaths } from "../../../../core/routes/path";
import { MedleyCard } from "../../../../types/main";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import Modal from "../../../@common/Modal";
import St from "./style";
interface MedleyPreviewProps {
  closeHandler: () => void;
  medleyCard: MedleyCard;
}

export default function MedleyPreview(props: MedleyPreviewProps) {
  const { closeHandler, medleyCard } = props;
  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const navigate = useNavigate();

  const moveCardCollectionFromMedley = (id: string) => {
    navigate(routePaths.CardCollection, { state: { type: "medley", medleyId: id } });
    setSliderIdx(0);
  };

  return (
    <Modal
      theme="GRAY"
      closeOpacityClassName={GTM_CLASS_NAME[`medleyPreviewClose${medleyCard.sticker.slice(0, 2)}`]}
      closeBtnClassName={GTM_CLASS_NAME[`medleyPreviewClose${medleyCard.sticker.slice(0, 2)}`]}
      closeHandler={closeHandler}>
      <St.Container>
        <St.MedleyPreview>
          <St.Tag>{medleyCard.sticker}</St.Tag>
          <St.Title>{medleyCard.title}</St.Title>
          <St.Description>{medleyCard.description}</St.Description>
          <St.PreviewCards>
            {medleyCard.previewCards.map((_, i: number) => (
              <St.CardWrapper key={i}>{medleyCard.previewCards[i].content}</St.CardWrapper>
            ))}
          </St.PreviewCards>
          <St.MoveBtn
            className={GTM_CLASS_NAME[`medleyPreview${medleyCard.sticker.slice(0, 2)}`]}
            onClick={() => moveCardCollectionFromMedley(medleyCard._id)}>
            카드 보기
          </St.MoveBtn>
        </St.MedleyPreview>
      </St.Container>
    </Modal>
  );
}
