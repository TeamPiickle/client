import styled from "styled-components";

export const St = {
  Card: styled.section`
    margin-bottom: 1.6rem;
  `,

  ContentWrapper: styled.div`
    padding: 2.4rem 1.6rem;
  `,

  ContentTitle: styled.strong`
    ${({ theme }) => theme.newFonts.h1};
    color: ${({ theme }) => theme.newColors.gray900};
  `,

  Content: styled.p`
    ${({ theme }) => theme.newFonts.h2};
    color: ${({ theme }) => theme.newColors.gray900};
  `,
};
