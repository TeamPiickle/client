import { forwardRef } from "react";

import CategoryContents from "../../../CategoryPage/CategoryContents";
import { St } from "./style";

const LastCard = forwardRef(function LastCard(_, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <St.Card ref={ref}>
      <St.ContentTitle>의미있는 대화를 나누셨나요?</St.ContentTitle>
      <St.Content>끊임없는 대화를 위해 대화주제를 선택해주세요</St.Content>
      <CategoryContents />
    </St.Card>
  );
});

export default LastCard;
