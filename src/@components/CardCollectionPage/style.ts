import styled from "styled-components";

export const St = {
  MainPage: styled.main`
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    min-height: -webkit-fill-available;

    padding-top: 5.2rem;

    background: ${({ theme }) => theme.colors.card};
  `,
};
