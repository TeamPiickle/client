import styled from "styled-components";

export const St = {
  Section: styled.section`
    padding: 0 1.2rem;
  `,

  Form: styled.form``,

  Title: styled.h2`
    margin-bottom: 2rem;

    ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.bg};
  `,

  Label: styled.label`
    display: inline-block;

    margin: 1.6rem 0 1.2rem;

    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.gray600};
  `,

  ErrorMessage: styled.strong`
    margin-left: 1.5rem;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 140%;

    /* piickle_red */

    color: ${({ theme }) => theme.colors.red}; ;
  `,

  Input: styled.input`
    width: 100%;
    height: 4.4rem;

    padding: 1.2rem 0 1.2rem 2.4rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray300};
    border-radius: 4.9rem;

    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.gray400};
  `,

  LoginBtn: styled.button`
    width: 100%;
    height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2.4rem;

    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 5rem;

    ${({ theme }) => theme.fonts.btn2};
    color: ${({ theme }) => theme.colors.white};
  `,

  LinkWrapper: styled.ul`
    margin: 3.9rem 0 19.3rem;

    display: flex;
    justify-content: center;

    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.gray600};
  `,

  Link: styled.li``,

  Delimeter: styled.span`
    margin: 0 1rem;
  `,
};
