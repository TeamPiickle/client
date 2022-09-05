import styled from "styled-components";

export const St = {
  SuccessButton: styled.button`
    height: 5rem;
    width: 100%;
    /* width: 32.8rem; */

    background-color: ${({ theme }) => theme.colors.black};

    border-radius: 5rem;

    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.btn2}
  `,
};
