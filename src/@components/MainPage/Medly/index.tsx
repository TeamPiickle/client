import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { useMedleyLists } from "../../../core/api/main";
import { sliderIdxState } from "../../../core/atom/slider";
import { routePaths } from "../../../core/routes/path";
import Loading from "../../@common/Loading";
import St from "./style";

export default function Medly() {
  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const { medleyLists } = useMedleyLists();
  const navigate = useNavigate();

  const moveMedley = (id: string) => {
    navigate(routePaths.CardCollection, { state: { type: "medley", medleyId: id } });
    setSliderIdx(0);
  };

  return (
    <St.Container>
      <St.Title>👍 여러분을 위해 피클이 직접 뽑은 주제들!</St.Title>
      {medleyLists ? (
        <St.Medley>
          {medleyLists &&
            medleyLists.data.map((medleyLists, idx) => {
              return (
                <St.MedleyWrapper key={medleyLists._id} onClick={() => moveMedley(medleyLists._id)}>
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
