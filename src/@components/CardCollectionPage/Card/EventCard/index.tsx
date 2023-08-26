import React, { forwardRef } from "react";

import * as St from "./style";

const EventTitles = {
  title: "피클의 미래 모습을 체험하시러 온\n여러분을 환영합니다!",
  subtitle:
    "여러분이 작성해주시는 소중한 내용들 하나하나 읽어볼게요:)\n많은 질문에 답변을 남기는 만큼 당첨 확률이 올라갑니다!",
};

const EventCard = forwardRef(function EventCard(_, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <St.Card ref={ref}>
      <St.Title>{EventTitles.title}</St.Title>
      <St.Subtitle>{EventTitles.subtitle}</St.Subtitle>
    </St.Card>
  );
});

export default React.memo(EventCard);
