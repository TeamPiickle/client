import React from "react";

import { recommendTitles } from "../../../util/best/bestPiickleTitles";
import HeadingTitleContainer from "../../@common/HeadingTitleContainer";
import useScrollableContainer from "../../@common/hooks/useScrollableContainer";
import BestPiickleCard from "../../MainPage/BestPiickle/BestPiickleCard";
import { useBestPiickle } from "../../MainPage/hooks/useBestPiickle";
import * as St from "./style";

export default function BestPiickleRecommend() {
  const { bestPiickle } = useBestPiickle();
  const { scrollableContainerProps, isDragging } = useScrollableContainer(); // 요거 먼가요??
  return (
    <St.RecommendContainer>
      <HeadingTitleContainer headingTitles={recommendTitles} paddingVerticalValue={0} />

      {/* todo: 코어로 빼기 */}
      {[
        "💖 유저들이 가장 최근에 북마크한 대화주제",
        "👩 여성이 북마크한 대화주제들",
        "👱‍♂️ 남성이 북마크한 대화주제를 확인해보세요",
      ].map((recommendType, idx) => (
        <St.RecommemdItem key={idx}>
          <St.RecommendType>{recommendType}</St.RecommendType>

          {bestPiickle && (
            <St.SliderWrapper {...scrollableContainerProps}>
              {bestPiickle &&
                bestPiickle.data.slice(0, 5).map((bestPiickle, idx) => {
                  return (
                    <BestPiickleCard
                      key={bestPiickle._id}
                      bestPiickle={bestPiickle}
                      idx={idx}
                      canNavigate={!isDragging}
                    />
                  );
                })}
            </St.SliderWrapper>
          )}
        </St.RecommemdItem>
      ))}
    </St.RecommendContainer>
  );
}
