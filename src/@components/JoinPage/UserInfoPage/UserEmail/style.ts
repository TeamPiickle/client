import styled from "styled-components";

export const St = {
  EmailContainer: styled.section`
    height: 7.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 2.4rem;
  `,

  EmailAuthenticationContent: styled.article`
    height: 7.6rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  ContentDescription: styled.h2`
    ${({ theme }) => theme.fonts.body6}
  `,

  DescriptionContainer: styled.div`
    display: flex;

    ${({ theme }) => theme.fonts.body6}
  `,

  EssentialText: styled.div`
    color: ${({ theme }) => theme.colors.bg};
  `,

  EssentialIcon: styled.div`
    color: ${({ theme }) => theme.colors.red};
  `,

  InputContainer: styled.div`
    height: 4.4rem;
    margin-top: 1.2rem;

    display: flex;
  `,

  EmailInput: styled.input`
    width: 100%;

    border: solid 0.1rem ${({ theme }) => theme.colors.gray300};
    border-radius: 4.9rem;

    margin-right: 0.8rem;
    padding: 0 2.4rem;

    ${({ theme }) => theme.fonts.body6}
  `,

  WarningText: styled.div`
    width: 100%;

    margin-left: 3.6rem;

    ${({ theme }) => theme.fonts.caption3};
    color: ${({ theme }) => theme.colors.red};
  `,
};

/*
  SendBtn: styled.button`
    ${({ theme }) => theme.fonts.caption05}

    text-decoration-line: underline;
  `,
*/
