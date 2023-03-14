import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { sliderIdxState } from "../../../../core/atom/slider";
import { routePaths } from "../../../../core/routes/path";
import Modal from "../../../@common/Modal";
import St from "./style";
interface MedleyPreviewProps {
  closeHandler: () => void;
  medleyPreview: {
    _id: string;
    title: string;
    sticker: string;
    description: string;
    previewCards: { _id: string; content: string }[];
  };
  medleyIdx: number;
}

export default function MedleyPreview(props: MedleyPreviewProps) {
  const { closeHandler, medleyPreview, medleyIdx } = props;
  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const navigate = useNavigate();

  const moveCardCollectionFromMedley = (id: string) => {
    navigate(routePaths.CardCollection, { state: { type: "medley", medleyId: id } });
    setSliderIdx(0);
  };

  return (
    <Modal theme="WHITE" closeHandler={closeHandler}>
      <St.Container>
        <St.MedleyPreview>
          <St.Tag>{medleyPreview.sticker}</St.Tag>
          <St.Title>{medleyPreview.title}</St.Title>
          <St.Description>{medleyPreview.description}</St.Description>
          <St.PreviewCards>
            {medleyPreview.previewCards.map((item: object, i: number) => (
              <St.CardWrapper key={i}>{medleyPreview.previewCards[i].content}</St.CardWrapper>
            ))}
          </St.PreviewCards>
          <St.MoveBtn onClick={() => moveCardCollectionFromMedley(medleyPreview._id)}>카드 보기</St.MoveBtn>
        </St.MedleyPreview>
      </St.Container>
    </Modal>
  );
}
