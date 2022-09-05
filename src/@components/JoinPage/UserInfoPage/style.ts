import styled from "styled-components";

export const St = {
  ContainerWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 0 1.6rem 2rem;

    height: 51.3rem;
  `,

  UserInfoContainer: styled.section`
    position: relative;
  `,

  ContentTitle: styled.h1`
    ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.bg};

    margin: 2.4rem 0 3.2rem 0;
  `,

  EmailContainer: styled.article`
    height: 7.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 2.4rem;
  `,

  EmailTitleWrapper: styled.h2`
    width: 100%;
    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.bg};
    /* margin-left: 1.6rem; */
  `,

  EmailTitleText: styled.div`
    margin-left: 0;
  `,

  EmailInputForm: styled.input`
    height: 4.2rem;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.gray100};

    border-radius: 4.9rem;

    margin-top: 1.2rem;
    padding-left: 2.4rem;

    color: ${({ theme }) => theme.colors.gray400};

    ${({ theme }) => theme.fonts.body6}
  `,

  PasswordContainer: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  PasswordTitleWrapper: styled.div`
    width: 100%;
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

  PasswordInputForm: styled.input`
    height: 4.2rem;
    width: 100%;

    border: solid 0.1rem ${({ theme }) => theme.colors.gray300};
    border-radius: 4.9rem;

    margin-top: 1.2rem;
    padding-left: 2.4rem;

    color: ${({ theme }) => theme.colors.gray400};

    ${({ theme }) => theme.fonts.body6}
  `,

  SuccessBtnContainer: styled.div`
    bottom: 2rem;

    width: 100%;
  `,
};
