import styled from "styled-components";

export const St = {
  HeaderWrapper: styled.header`
    position: sticky;
    top: 0;

    height: 5.2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 1.6rem;
  `,
  LogoTitle: styled.h1`
    ${({ theme }) => theme.visually_hidden};
  `,
};
