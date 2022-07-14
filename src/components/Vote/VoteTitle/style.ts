import styled from "styled-components";

export const St = {
  VoteTitleContainer: styled.article`
    height: 7.4rem;
    width: 36rem;

    padding-top: 0.2rem;
    padding-left: 1.6rem;
    padding-bottom: 4.6rem;
  `,

  VoteTitleText: styled.h1`
    ${({ theme }) => theme.fonts.h1}

    color: ${({ theme }) => theme.colors.bg};
  `,

  VoteSubTitleText: styled.h2`
    ${({ theme }) => theme.fonts.body}

    color: ${({ theme }) => theme.colors.gray600};
  `,
};
