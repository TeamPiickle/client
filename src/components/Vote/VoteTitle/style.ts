import styled from "styled-components";
export const St = {
  VoteTitleContainer: styled.article`
    height: 7.4rem;
    width: 100%;

    padding: 0 1.6rem 4.6rem;
  `,

  VoteTitleText: styled.h1`
    ${({ theme }) => theme.fonts.h1}

    color: ${({ theme }) => theme.colors.bg};

    margin-bottom: 0.4rem;
  `,

  VoteSubTitleText: styled.h2`
    ${({ theme }) => theme.fonts.body}

    color: ${({ theme }) => theme.colors.gray600};
  `,
};
