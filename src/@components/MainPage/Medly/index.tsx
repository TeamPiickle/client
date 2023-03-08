import React from "react";

import { useMedleyLists } from "../../../core/api/main";
import useModal from "../../@common/hooks/useModal";
import Loading from "../../@common/Loading";
import MedleyPreview from "./MedleyPreview";
import St from "./style";

export default function Medly() {
  const { medleyLists } = useMedleyLists();
  const { isModalOpen, toggleModal } = useModal();

  return (
    <St.Container>
      <St.Title>👍 여러분을 위해 피클이 직접 뽑은 주제들!</St.Title>
      {medleyLists ? (
        <St.Medley>
          <St.MedleyContainer isClicked={isModalOpen}>
            {medleyLists &&
              medleyLists.data.map((medleyLists) => {
                return (
                  <St.MedleyWrapper key={medleyLists._id} onClick={toggleModal}>
                    <St.ContentTag>{medleyLists.sticker}</St.ContentTag>
                    <St.ContentTitle>{medleyLists.title}</St.ContentTitle>
                  </St.MedleyWrapper>
                );
              })}
          </St.MedleyContainer>
          {isModalOpen && <MedleyPreview closePreview={toggleModal} />}
        </St.Medley>
      ) : (
        <Loading backgroundColor="white" />
      )}
    </St.Container>
  );
}
