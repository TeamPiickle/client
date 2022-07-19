import styled from "styled-components";

export const St = {
  MainPage: styled.main`
    /* height: calc(var(--vh, 1vh) * 100); */
    height: 100vh;
    min-height: -webkit-fill-available;
    min-height: fill-available;

    padding: 8rem 0 5.1rem;

    background: ${({ theme }) => theme.colors.card};
  `,
};
