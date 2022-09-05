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

  PasswordContainer: styled.article`
    /* height: 14.9rem; */

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

  SuccessBtnContainer: styled.div`
    bottom: 2rem;

    width: 100%;
  `,
};
