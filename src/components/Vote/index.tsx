import styled from "styled-components";

import VoteContent from "./VoteContent";
import VoteTitle from "./VoteTitle";

export default function Vote() {
  return (
    <StRoot>
      <VoteTitle />
      <VoteContent />
    </StRoot>
  );
}

const StRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
