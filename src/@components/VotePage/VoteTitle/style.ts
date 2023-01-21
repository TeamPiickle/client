import styled from "styled-components";

const VoteTitleContainer = styled.article`
  padding: 0 1.6rem;
`;

const VoteTitleText = styled.h1`
  ${({ theme }) => theme.newFonts.h1}

  color: ${({ theme }) => theme.colors.gray900};

  margin-bottom: 0.4rem;
`;

const VoteSubTitleText = styled.h2`
  ${({ theme }) => theme.newFonts.h2}

  color: ${({ theme }) => theme.colors.gray700};
`;

const St = {
  VoteTitleContainer,
  VoteTitleText,
  VoteSubTitleText,
};

export default St;
