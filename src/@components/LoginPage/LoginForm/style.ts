import styled from "styled-components";

export const St = {
  Section: styled.section`
    padding: 0 1.6rem;
  `,

  Form: styled.form``,

  Title: styled.h2`
    padding: 1.6rem 0;

    ${({ theme }) => theme.newFonts.h1};
    color: ${({ theme }) => theme.newColors.bg};
  `,

  Label: styled.label`
    display: block;

    margin: 1.6rem 0 1.2rem;

    ${({ theme }) => theme.newFonts.body4};
    color: ${({ theme }) => theme.newColors.gray900};
  `,

  ErrorMessage: styled.strong`
    display: block;

    margin: 0.8rem 0 0 2rem;

    ${({ theme }) => theme.newFonts.caption1};
    color: ${({ theme }) => theme.newColors.red};
  `,

  Input: styled.input`
    width: 100%;
    height: 4.2rem;

    padding: 1.2rem 0 1.2rem 2.4rem;

    border: 0.1rem solid ${({ theme }) => theme.newColors.gray300};
    border-radius: 4.9rem;

    ${({ theme }) => theme.newFonts.body4};
    color: ${({ theme }) => theme.newColors.gray900};
  `,

  LoginBtn: styled.button`
    width: 100%;
    height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2.4rem;

    background-color: ${({ theme }) => theme.newColors.gray900};
    border-radius: 5rem;

    ${({ theme }) => theme.newFonts.btn1};
    color: ${({ theme }) => theme.newColors.white};
  `,

  LinkWrapper: styled.ul`
    margin: 1.6rem 0 6.4rem;

    display: flex;
    justify-content: center;

    ${({ theme }) => theme.newFonts.caption1};
    color: ${({ theme }) => theme.newColors.gray600};
  `,

  Link: styled.li``,

  Delimeter: styled.span`
    margin: 0 1rem;

    color: ${({ theme }) => theme.newColors.gray200};
  `,
};
