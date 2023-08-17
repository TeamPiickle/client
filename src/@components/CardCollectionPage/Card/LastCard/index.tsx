import React, { forwardRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { IcCongratPiickle } from "../../../../asset/icon";
import { routePaths } from "../../../../core/routes/path";
import { LocationType } from "../../../../types/cardCollection";
import useShowByCardType from "../../../@common/hooks/useShowByQuery";
import useToast from "../../../@common/Toast/hooks/useToast";
import * as St from "./style";

const TOAST_SESSON_KEY = "showToast";

const LastCard = forwardRef(function LastCard(_, ref: React.ForwardedRef<HTMLDivElement>) {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const showToastFlag = !!sessionStorage.getItem(TOAST_SESSON_KEY);
  const { isShow: isReplayBtnShow } = useShowByCardType([
    LocationType.BEST,
    LocationType.MEDLEY,
    LocationType.RECENT,
    LocationType.BOOKMARK,
    LocationType.MALE,
    LocationType.FEMALE,
  ]);

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
        {isReplayBtnShow && <St.ReplayBtn onClick={reloadForSimilarTopic}>비슷한 주제 계속 보기</St.ReplayBtn>}
        <St.CategoryBtn onClick={goToCategory}>카테고리 보러 가기</St.CategoryBtn>
      </St.BtnContainer>
    </St.Card>
  );
});

export default React.memo(LastCard);
