import styled from "styled-components";

export const St = {
  Root: styled.section`
    height: 100vh;
    width: 100%;
  `,

  EmailConfirmContainer: styled.section`
    width: 100%;
    height: 54.4rem;

    padding-top: 2.4rem;

    position: relative;
  `,

  EmailConfirmTitle: styled.h1`
    ${({ theme }) => theme.fonts.h1};

    colors: ${({ theme }) => theme.colors.bg};

    margin-bottom: 0.8rem;
    margin-left: 1.6rem;
  `,

  EmailConfirmDescription: styled.h2`
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

  EmailSendErrorText: styled.h3`
    ${({ theme }) => theme.fonts.caption3};

    color: ${({ theme }) => theme.colors.gray600};
  `,

  EmailReSendBtn: styled.button`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 140%;

    text-decoration-line: underline;

    color: ${({ theme }) => theme.colors.gray600};
  `,
};
