import React from "react";

import { useMedleyLists } from "../../../../core/api/main";
import St from "./style";

export default function MedleyPreview() {
  const { medleyLists } = useMedleyLists();

  return (
    <St.Root>
      <St.Container>
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
                <St.MoveBtn>카드 보기</St.MoveBtn>
              </St.MedleyPreview>
            );
          })}
      </St.Container>
    </St.Root>
  );
}
