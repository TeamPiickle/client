import styled from "styled-components";

export const St = {
  Wrapper: styled.div`
    padding: 2.4rem 1.6rem;
  `,
  Title: styled.h2`
    ${({ theme }) => theme.fonts.h1};
  `,
  Content: styled.p`
    margin-top: 0.4rem;

    color: ${({ theme }) => theme.colors.gray600};
    ${({ theme }) => theme.fonts.h2};
  `,
};
