import styled from "styled-components";

export const St = {
  Root: styled.section`
    height: 100vh;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.bg};

    position: absolute;
    top: 0;

    display: flex;
    justify-content: center;
  `,

  ErrorPopupContainer: styled.section`
    height: 13.6rem;
    width: 32.8rem;

    background-color: ${({ theme }) => theme.colors.white};

    margin-top: 25.2rem;

    border-radius: 1rem;
  `,

  ErrorTitle: styled.h1`
    ${({ theme }) => theme.fonts.body1};

    color: ${({ theme }) => theme.colors.bg};

    margin-top: 2.6rem;
    margin-left: 2rem;
  `,

  ErrorDescription: styled.h2`
    ${({ theme }) => theme.fonts.caption4};

    color: ${({ theme }) => theme.colors.gray600};

    margin-left: 2rem;
  `,

  Closebtn: styled.button`
    ${({ theme }) => theme.fonts.caption4};

    color: ${({ theme }) => theme.colors.bg};

    margin-left: 28.2rem;
    margin-top: 2.8rem;
  `,
};
