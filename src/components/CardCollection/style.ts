import styled from "styled-components";

export const St = {
  MainPage: styled.main`
    height: 100vh;

    padding: 6.4rem 2.8rem 5.1rem;

    background: ${({ theme }) => theme.colors.card};
  `,

  Card: styled.article`
    width: 100%;
    height: 100%;

    background: rgba(255, 255, 255, 0.5);
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    backdrop-filter: blur(1.2rem);
    border-radius: 1.5rem;
  `,
};
