import styled from "styled-components";

export const St = {
  Button: styled.button`
    display: flex;

    position: fixed;
    bottom: 0rem;
    left: 50%;
    transform: translate(-50%, 0);

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.gray900};

    width: 100%;
    height: 5.8rem;

    backdrop-filter: blur(0.6rem);
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.btn2};

    ${({ theme }) => theme.media.desktop`
      width: 36rem;
    `};
  `,
};
