import styled from "styled-components";

export const St = {
  Button: styled.button`
    display: flex;

    position: fixed;
    bottom: 2.4rem;
    left: 50%;
    transform: translate(-50%, 0);

    align-items: center;
    justify-content: center;

    border-radius: 6.6rem;
    background-color: ${({ theme }) => theme.colors.black};

    width: calc(100% - 3.2rem);
    @media screen and (min-width: 48rem), screen and (min-height: 48rem) and (orientation: landscape) {
      width: 32.8rem;
    }
    height: 5rem;

    backdrop-filter: blur(1.2rem);
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.btn2};
  `,
};
