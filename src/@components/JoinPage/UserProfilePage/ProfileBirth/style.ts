/* eslint-disable indent */
import styled from "styled-components";

export const St = {
  ProfileBirth: styled.section``,

  InputContainer: styled.div`
    height: 4.4rem;

    display: flex;
    justify-content: center;
    margin: 1.2rem 0 2.4rem 0;
  `,

  BirthInputForm: styled.input<{ isbirth: string; isInComplete: boolean }>`
    width: calc(100% - 3.2rem);
    height: 100%;

    padding-left: 2.4rem;
    margin-left: -1.5rem;

    border: solid 0.1rem
      ${({ isbirth, isInComplete, theme }) =>
        isInComplete && isbirth === "" ? theme.colors.red : theme.colors.gray300};
    border-radius: 4.9rem;
    ${({ theme }) => theme.fonts.body6}
    color: ${({ theme }) => theme.colors.bg};

    ${({ theme }) => theme.media.desktop`
      width: 32.8rem;
    `};
  `,

  PickerContainer: styled.div`
    .datepicker {
      position: fixed;
    }
  `,

  Down: styled.div`
    display: inline-block;
    margin-left: -3rem;
    margin-top: 1.3rem;
  `,

  ErrorMessage: styled.div`
    margin: -2rem 4.2rem 1.6rem 2rem;

    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.fonts.caption3}
  `,
};
