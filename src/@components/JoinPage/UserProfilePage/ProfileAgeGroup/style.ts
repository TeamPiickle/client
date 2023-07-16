/* eslint-disable indent */
import styled from "styled-components";

import IcDownArrow from "../../../../asset/icon/downArrow.svg";

export const St = {
  ProfileAgeGroup: styled.section`
    height: 4.4rem;

    display: flex;
    justify-content: center;
    margin: 1.2rem 0 2.4rem 0;
  `,

  AgeGroupInputForm: styled.select<{ value: string }>`
    width: calc(100% - 3.2rem);
    height: 100%;

    padding-left: 2.4rem;

    border: solid 0.1rem ${({ theme }) => theme.colors.gray300};
    border-radius: 4.9rem;
    ${({ theme }) => theme.fonts.body6}
    color: ${({ theme, value }) => (value.length === 0 ? theme.colors.gray400 : theme.colors.bg)};

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background-image: url(${IcDownArrow});
    background-repeat: no-repeat;
    background-position: calc(100% - 10px) center;
    background-color: ${({ theme }) => theme.newColors.white};

    ${({ theme }) => theme.media.desktop`
      width: 32.8rem;
    `};
  `,
};
