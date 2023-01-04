import styled from "styled-components";

export const St = {
  EmailContainer: styled.article`
    /* height: 7.4rem; */

    display: flex;
    flex-direction: column;
    align-items: center;

    /* margin-bottom: 2.4rem; */
  `,

  // EmailTitleWrapper: styled.h2`
  EmailTitleWrapper: styled.div`
    width: 100%;
  `,

  EmailTitleText: styled.h2`
    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.bg};
  `,

  EmailDescription: styled.h3`
    ${({ theme }) => theme.fonts.caption3};
    color: ${({ theme }) => theme.colors.gray600};

    margin-top: 0.4rem;
  `,

  // EmailInputForm: styled.div`
  //   height: 4.2rem;
  InputContainer: styled.div`
    margin-top: 1.2rem;

    width: 100%;
  `,

  EmailInput: styled.input<{ emailInvalid: string }>`
    width: 100%;
    height: 4.2rem;
    padding: 0 2.4rem;

    border: solid 0.1rem ${({ theme, emailInvalid }) => (emailInvalid ? theme.colors.red : theme.colors.gray300)};
    border-radius: 4.9rem;

    color: ${({ theme, emailInvalid }) => (emailInvalid ? theme.colors.red : theme.colors.gray400)};

    ${({ theme }) => theme.fonts.body6}
  `,

  WarningText: styled.div`
    width: 100%;

    margin: 0 4.2rem 0 2rem;

    ${({ theme }) => theme.fonts.caption3};
    color: ${({ theme }) => theme.colors.red};
  `,
};
