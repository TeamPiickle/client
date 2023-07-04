import React from "react";

import Header from "../@common/Header";
import SuspenseBoundary from "../@common/SuspenseBoundary";
import BestPiickleRank from "./BestPiickleRank";
import St from "./style";

export default function BestPiicklePage() {
  return (
    <St.Root>
      <Header />
      <SuspenseBoundary>
        <BestPiickleRank />
      </SuspenseBoundary>
    </St.Root>
  );
}
