import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { useMedleyLists } from "../../../../core/api/main";
import { sliderIdxState } from "../../../../core/atom/slider";
import { routePaths } from "../../../../core/routes/path";
import Modal from "../../../@common/Modal";
import St from "./style";
interface MedleyPreviewProps {
  closeHandler: () => void;
  medleyIdx: number;
}

export default function MedleyPreview(props: MedleyPreviewProps) {
  const { closeHandler, medleyIdx } = props;
  const { medleyLists } = useMedleyLists();
  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const navigate = useNavigate();

  const moveMedley = (id: string) => {
    navigate(routePaths.CardCollection, { state: { type: "medley", medleyId: id } });
    setSliderIdx(0);
  };

  return (
    <Modal theme="WHITE" closeHandler={closeHandler}>
      <St.Container>
        {medleyLists && (
          <St.MedleyPreview>
            <St.Tag>{medleyLists.data[medleyIdx].sticker}</St.Tag>
            <St.Title>{medleyLists.data[medleyIdx].title}</St.Title>
            <St.Description>{medleyLists.data[medleyIdx].description}</St.Description>
            <St.PreviewCards>
              {medleyLists.data[medleyIdx].previewCards.map((item: object, i: number) => (
                <St.CardWrapper key={i}>{medleyLists.data[medleyIdx].previewCards[i].content}</St.CardWrapper>
              ))}
            </St.PreviewCards>
            <St.MoveBtn onClick={() => moveMedley(medleyLists.data[medleyIdx]._id)}>카드 보기</St.MoveBtn>
          </St.MedleyPreview>
        )}
      </St.Container>
    </Modal>
  );
}
