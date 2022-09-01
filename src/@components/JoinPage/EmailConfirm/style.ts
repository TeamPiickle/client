import styled from "styled-components";

export const St = {
  Root: styled.section`
    height: 100vh;
  `,

  EmailConfirmContainer: styled.section`
    height: 54.4rem;

    padding-top: 2.4rem;

    position: relative;
  `,

  TitleText: styled.h1`
    ${({ theme }) => theme.fonts.h1};

    colors: ${({ theme }) => theme.colors.bg};

    margin-bottom: 0.8rem;
    margin-left: 1.6rem;
  `,

  ConfirmDescription: styled.h2`
    ${({ theme }) => theme.fonts.body12};

    colors: ${({ theme }) => theme.colors.gray600};

    margin-left: 1.6rem;
  `,

  EmailErrorContainer: styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    bottom: 5.2rem;
  `,

  SendErrorText: styled.h3`
    ${({ theme }) => theme.fonts.caption3};

    color: ${({ theme }) => theme.colors.gray600};
  `,

  ReSendBtn: styled.button`
    ${({ theme }) => theme.fonts.caption05}

    text-decoration-line: underline;

    color: ${({ theme }) => theme.colors.gray600};
  `,
};
