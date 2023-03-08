import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { IcCloseBtn } from "../../../../asset/icon";
import { useMedleyLists } from "../../../../core/api/main";
import { sliderIdxState } from "../../../../core/atom/slider";
import { routePaths } from "../../../../core/routes/path";
import useOutClickCloser from "../../../@common/hooks/useOutClickCloser";
import St from "./style";

interface MedleyPreviewProps {
  closePreview: () => void;
}

export default function MedleyPreview(props: MedleyPreviewProps) {
  const { closePreview } = props;
  const outClickCloserRef = useOutClickCloser(closePreview);
  const { medleyLists } = useMedleyLists();
  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const navigate = useNavigate();

  const moveMedley = (id: string) => {
    navigate(routePaths.CardCollection, { state: { type: "medley", medleyId: id } });
    setSliderIdx(0);
  };

  return (
    <St.Root>
      <St.Container ref={outClickCloserRef}>
        <St.CloseBtnContainer onClick={closePreview}>
          <IcCloseBtn />
        </St.CloseBtnContainer>
        {medleyLists &&
          medleyLists.data.map((medleyLists) => {
            return (
              <St.MedleyPreview key={medleyLists._id}>
                <St.Tag>{medleyLists.sticker}</St.Tag>
                <St.Title>{medleyLists.title}</St.Title>
                <St.Description>{medleyLists.description}</St.Description>
                <St.PreviewCards>
                  {medleyLists.previewCards.map((item: object, i: number) => {
                    return <St.CardWrapper key={i}>{medleyLists.previewCards[i].content}</St.CardWrapper>;
                  })}
                </St.PreviewCards>
                <St.MoveBtn onClick={() => moveMedley(medleyLists._id)}>카드 보기</St.MoveBtn>
              </St.MedleyPreview>
            );
          })}
      </St.Container>
    </St.Root>
  );
}
