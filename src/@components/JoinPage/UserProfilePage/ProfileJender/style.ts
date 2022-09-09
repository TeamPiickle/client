import styled from "styled-components";

import IcDownArrow from "../../../../asset/icon/downArrow.svg";

export const St = {
  ProfileJender: styled.section`
    height: 4.4rem;

    display: flex;
    justify-content: center;
    margin: 1.2rem 0 2.4rem 0;
  `,

  GenderInputForm: styled.select<{ value: string }>`
    width: 32.8rem;
    height: 100%;
    padding: 0 2.4rem;

    border: solid 0.1rem ${({ theme }) => theme.colors.gray300};
    border-radius: 4.9rem;

    color: ${({ theme, value }) => (value.length === 0 ? theme.colors.gray500 : theme.colors.bg)};
    ${({ theme }) => theme.fonts.body6}

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background-image: url(${IcDownArrow});
    background-repeat: no-repeat;
    background-position: calc(100% - 10px) center;
    background-color: ${({ theme }) => theme.colors.white};
  `,

  Option: styled.option``,
};
