import styled from "styled-components";

import Header from "../common/Header";
import VoteContent from "./VoteContent";
import VoteTitle from "./VoteTitle";

export default function Vote() {
  return (
    <St.Root>
      <Header />
      <VoteTitle />
      <VoteContent />
    </St.Root>
  );
}

const St = {
  Root: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
