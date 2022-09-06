/* eslint-disable indent */
import styled, { css } from "styled-components";

export const St = {
  ProfileJender: styled.section`
    height: 4.4rem;

    display: flex;
    justify-content: center;
    margin: 1.2rem 0 2.4rem 0;
  `,

  GenderInputForm: styled.select`
    width: 32.8rem;
    padding-left: 2.4rem;
    margin-left: -1.5rem;

    border: solid 0.1rem ${({ theme }) => theme.colors.gray300};
    border-radius: 4.9rem;
    ${({ theme }) => theme.fonts.body6}
    color: ${({ theme }) => theme.colors.bg};

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  `,

  Option: styled.option``,

  Down: styled.div<{ isOpened: boolean }>`
    display: inline-block;
    margin-left: -3rem;
    margin-top: 1.3rem;
    ${({ isOpened }) =>
      isOpened &&
      css`
        transform: rotate(-180deg);
        margin-bottom: 1.3rem;
      `}
  `,
};
