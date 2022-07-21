import styled from "styled-components";

export const St = {
  Button: styled.button`
    display: flex;

    position: fixed;
    right: 1.6rem;
    bottom: 2.4rem;
    left: 1.6rem;

    align-items: center;
    justify-content: center;

    border-radius: 6.6rem;
    background-color: ${({ theme }) => theme.colors.black};

    height: 5rem;

    backdrop-filter: blur(1.2rem);
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.btn2};
  `,
};
