import styled from "styled-components";

export const St = {
  MainPage: styled.main`
    height: 100vh;

    padding: 6.4rem 0 5.1rem;

    background: ${({ theme }) => theme.colors.card};
  `,
};
