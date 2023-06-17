import styled from "styled-components";

import Header from "../@common/Header";
import useGTMPage from "../@common/hooks/useGTMPage";
import SuspenseBoundary from "../@common/SuspenseBoundary";
import VoteContent from "./VoteContent";
import VoteTitle from "./VoteTitle";

export default function VotePage() {
  useGTMPage();

  return (
    <main>
      <Header />
      <VoteTitle />
      <St.ContentWrapper>
        <SuspenseBoundary>
          <VoteContent />
        </SuspenseBoundary>
      </St.ContentWrapper>
    </main>
  );
}

const St = {
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
};
