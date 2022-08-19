import styled from "styled-components";
export const St = {
  Root: styled.section`
    height: 100%;
  `,

  EmailAuthenticationSection: styled.section`
    height: 16.8rem;
    width: 100%;
  `,

  EmailAuthenticationTitle: styled.article`
    height: 9.2rem;

    padding: 2.4rem 0 3.2rem 1.6rem;
  `,

  EmailAuthenticationTitleText: styled.h1`
    ${({ theme }) => theme.fonts.h1}
  `,

  EmailAuthenticationContent: styled.article`
    height: 7.6rem;

    padding: 0 2.5rem 0 1.6rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  EmailAuthenticationContentTitle: styled.h2`
    ${({ theme }) => theme.fonts.body6}
  `,

  EmailAuthenticationInputContainer: styled.div`
    height: 4.4rem;

    display: flex;
    /* justify-content: space-between; */
  `,

  EmailAuthenticationInputForm: styled.input`
    width: 24.8rem;

    border: solid 0.1rem ${({ theme }) => theme.colors.gray300};
    border-radius: 4.9rem;

    margin-right: 0.8rem;
    padding-left: 2.4rem;

    ${({ theme }) => theme.fonts.body6}
  `,

  SendBtn: styled.button`
    width: 1.7rme;

    ${({ theme }) => theme.fonts.caption05}

    text-decoration-line: underline;
  `,
};
