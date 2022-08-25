import styled from "styled-components";
export const St = {
  Root: styled.section`
    height: 100vh;
  `,

  EmailAuthenticationSection: styled.section`
    height: 54.4rem;
    width: 100%;
  `,

  EmailAuthenticationTitle: styled.article`
    height: 9.2rem;

    padding: 2.4rem 0 3.2rem 1.6rem;
  `,
  EmailAuthenticationTitleText: styled.h1`
    ${({ theme }) => theme.fonts.h1}

    color : ${({ theme }) => theme.colors.bg}
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

  TitleContainer: styled.div`
    display: flex;

    ${({ theme }) => theme.fonts.body6}
  `,

  TitleText: styled.h2``,

  EssentialText: styled.div`
    color: ${({ theme }) => theme.colors.bg};
  `,

  EssentialIcon: styled.div`
    color: ${({ theme }) => theme.colors.red};
  `,

  EmailAuthenticationInputContainer: styled.div`
    height: 4.4rem;

    display: flex;
  `,

  EmailAuthenticationInputForm: styled.input`
    width: 24.8rem;

    border: solid 0.1rem ${({ theme }) => theme.colors.gray300};
    border-radius: 4.9rem;

    margin-right: 0.8rem;
    padding-left: 2.4rem;

    ${({ theme }) => theme.fonts.body6}
  `,
  EmailWarningText: styled.div`
    ${({ theme }) => theme.fonts.caption3};

    color: ${({ theme }) => theme.colors.red};

    margin-left: 3.6rem;
  `,

  SendBtn: styled.button`
    width: 1.7rem;

    ${({ theme }) => theme.fonts.caption05}

    text-decoration-line: underline;
  `,
};
