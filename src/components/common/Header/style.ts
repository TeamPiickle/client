import styled from "styled-components";

export const St = {
  HeaderWrapper: styled.header`
    display: flex;
    position: sticky;
    top: 0;
    align-items: center;
    justify-content: space-between;

    padding: 0 1.6rem;

    height: 5.2rem;

    background-color: ${({ theme }) => theme.colors.white};

    z-index: 10;
  `,
};
