import styled from "styled-components";

export const St = {
  Root: styled.main`
    height: 100vh;
  `,

  ProfileContainer: styled.section``,

  Title: styled.article`
    padding: 2.4rem 1.6rem 0.8rem;

    ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.bg};
  `,

  SubTitle: styled.p`
    margin-left: 1.6rem;

    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.bg};
  `,

  Requirement: styled.p`
    margin: 0.4rem 0 0 1.6rem;

    ${({ theme }) => theme.fonts.caption3};
    color: ${({ theme }) => theme.colors.gray600};
  `,

  NextButton: styled.button`
    width: calc(100% - 3.2rem);
    height: 5rem;

    margin: 6.9rem auto 2rem;
    display: block;

    border-radius: 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.btn2};

    ${({ theme }) => theme.media.desktop`
      width: 32.8rem;
    `};
  `,

  ErrorMessage: styled.div`
    margin: -2rem 4.2rem 1.6rem 2rem;

    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.fonts.caption3}
  `,
};
