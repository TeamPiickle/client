import React from "react";

import Header from "../@common/Header";
import SuspenseBoundary from "../@common/SuspenseBoundary";
import BestPiickleRank from "./BestPiickleRank";
import BestPiickleRecommend from "./BestPiickleRecommend";
import * as St from "./style";

export default function BestPiicklePage() {
  return (
    <St.Root>
      <Header />
      <SuspenseBoundary>
        <BestPiickleRank />
        <BestPiickleRecommend />
      </SuspenseBoundary>
    </St.Root>
  );
}
