import styled from "styled-components";

export const St = {
  EmailConfirmContainer: styled.section`
    width: 100%;
    height: 36rem;

    padding-left: 1.6rem;
    padding-top: 2.4rem;
  `,

  EmailConfirmTitle: styled.h1`
    ${({ theme }) => theme.fonts.h1};

    colors: ${({ theme }) => theme.colors.bg};

    margin-bottom: 0.8rem;
  `,

  EmailConfirmDescription: styled.h2`
    ${({ theme }) => theme.fonts.body12}

    colors : ${({ theme }) => theme.colors.gray600}
  `,
};
