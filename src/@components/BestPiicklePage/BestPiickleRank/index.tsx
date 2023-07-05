import React, { useState } from "react";

import { rankTitles } from "../../../util/best/bestPiickleTitles";
import HeadingTitleContainer from "../../@common/HeadingTitleContainer";
import RankItem from "./RankItem";
import * as St from "./style";

export default function BestPiickleRank() {
  return (
    <St.RankContainer>
      {/* todo : padding 조정 */}
      <HeadingTitleContainer headingTitles={rankTitles} />
      <RankItem cardId="1" content="상대방의첫인상을기억하나요저는몰라요그냥해..." idx={1} />
      <RankItem cardId="1" content="상대방의 첫인상을 기억하나요?" idx={2} />
      <RankItem cardId="1" content="상대방의 첫인상을 기억하나요?" idx={3} />
      <RankItem cardId="1" content="상대방의 첫인상을 기억하나요?" idx={4} />
      <RankItem cardId="1" content="상대방의 첫인상을 기억하나요?" idx={5} />
      <RankItem cardId="1" content="상대방의 첫인상을 기억하나요?" idx={6} />
      <RankItem cardId="1" content="상대방의 첫인상을 기억하나요?" idx={7} />
      <RankItem cardId="1" content="상대방의 첫인상을 기억하나요?" idx={8} />
      <St.ButtonWrapper>
        <St.ContinueButton>이어서 베스트 피클 카드 보기</St.ContinueButton>
      </St.ButtonWrapper>
    </St.RankContainer>
  );
}
