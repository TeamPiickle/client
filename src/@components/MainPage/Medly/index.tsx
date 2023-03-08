import React from "react";

import { useMedleyLists } from "../../../core/api/main";
import Loading from "../../@common/Loading";
import St from "./style";

export default function Medly() {
  const { medleyLists } = useMedleyLists();

  return (
    <St.Container>
      <St.Title>👍 여러분을 위해 피클이 직접 뽑은 주제들!</St.Title>
      {medleyLists ? (
        <St.Medley>
          {medleyLists &&
            medleyLists.data.slice(0, 2).map((medleyLists, idx) => {
              return (
                <St.MedleyWrapper key={medleyLists._id}>
                  <St.ContentTag>{medleyLists.sticker}</St.ContentTag>
                  <St.ContentTitle>{medleyLists.title}</St.ContentTitle>
                </St.MedleyWrapper>
              );
            })}
        </St.Medley>
      ) : (
        <Loading backgroundColor="white" />
      )}
    </St.Container>
  );
}
