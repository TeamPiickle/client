import styled from "styled-components";

export const St = {
  PasswordContainer: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  PasswordTitleWrapper: styled.div`
    width: 100%;

    margin-top: 1.2rem;
  `,

  PasswordTitleText: styled.h2`
    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.bg};
  `,

  PasswordDescription: styled.h3`
    ${({ theme }) => theme.fonts.caption3};
    color: ${({ theme }) => theme.colors.gray600};

    margin-top: 0.4rem;
  `,

  InputWrapper: styled.div`
    width: 100%;

    margin-top: 1.2rem;
  `,

  PasswordInputForm: styled.input<{ isinvalid: boolean }>`
    height: 4.2rem;
    width: 100%;

    border: solid 0.1rem ${({ theme, isinvalid }) => (isinvalid ? theme.colors.red : theme.colors.gray300)};
    border-radius: 4.9rem;

    color: ${({ theme, isinvalid }) => (isinvalid ? theme.colors.red : theme.colors.gray400)};

    ${({ theme }) => theme.fonts.body6}

    padding-left: 2.4rem;
  `,

  ErrorText: styled.div`
    color: ${({ theme }) => theme.colors.red};

    ${({ theme }) => theme.fonts.caption3}

    margin: 0 4.2rem 0 2rem;
  `,
};
