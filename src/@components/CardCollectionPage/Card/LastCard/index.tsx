import React, { forwardRef, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { IcCongratPiickle } from "../../../../asset/icon";
import { routePaths } from "../../../../core/routes/path";
import useToast from "../../../@common/Toast/hooks/useToast";
import * as St from "./style";

const TOAST_SESSON_KEY = "showToast";

const LastCard = forwardRef(function LastCard(_, ref: React.ForwardedRef<HTMLDivElement>) {
  const navigate = useNavigate();
  const showToast = useToast();
  const showToastFlag = !!sessionStorage.getItem(TOAST_SESSON_KEY);
  const [isReplayBtn, setIsReplayBtn] = useState(false);
  const [searchParams] = useSearchParams();
  const cardType = searchParams.get("type");

  useEffect(() => {
    const noRepalyTypes = ["female", "male", "bookmark", "medley", "recent", "best"];

    setIsReplayBtn(!noRepalyTypes.includes(cardType || ""));
  }, [cardType]);

  useEffect(() => {
    if (showToastFlag) {
      showToast({ message: "😢 일부 겹치는 주제가 있을 수 있어요", duration: 2.5 });
      sessionStorage.removeItem(TOAST_SESSON_KEY);
    }
  }, [showToastFlag, showToast]);

  const reloadForSimilarTopic = () => {
    sessionStorage.setItem(TOAST_SESSON_KEY, "true");
    window.location.reload();
  };

  const goToCategory = () => navigate(routePaths.Category);

  return (
    <St.Card ref={ref}>
      <St.ContentTitle>의미있는 대화를 나누셨나요?</St.ContentTitle>
      <St.Content>끊임없는 대화를 위해 버튼을 선택해주세요</St.Content>
      <IcCongratPiickle />
      <St.BtnContainer>
        {isReplayBtn && <St.ReplayBtn onClick={reloadForSimilarTopic}>비슷한 주제 계속 보기</St.ReplayBtn>}
        <St.CategoryBtn onClick={goToCategory}>카테고리 보러 가기</St.CategoryBtn>
      </St.BtnContainer>
    </St.Card>
  );
});

export default React.memo(LastCard);
