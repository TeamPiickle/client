import styled from "styled-components";

import Header from "../common/Header";
import VoteContent from "./VoteContent";
import VoteTitle from "./VoteTitle";

export default function Vote() {
  return (
    <main>
      <Header />
      <VoteTitle />
      <St.ContentWrapper>
        <VoteContent />
      </St.ContentWrapper>
    </main>
  );
}

const St = {
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
