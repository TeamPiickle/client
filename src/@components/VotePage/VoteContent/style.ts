import styled from "styled-components";

const VoteContentContainer = styled.article`
  padding: 2.4rem 1.6rem 3.4rem;

  display: flex;
  flex-direction: column;
`;

const VoteContentTitle = styled.h2`
  ${({ theme }) => theme.fonts.body5}
  color: ${({ theme }) => theme.colors.gray900};
`;

const St = {
  VoteContentContainer,
  VoteContentTitle,
};

export default St;
