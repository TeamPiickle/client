import styled, { keyframes } from "styled-components";

export const St = {
  Root: styled.section`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;

    background-color: ${({ theme }) => theme.colors.gray600};

    z-index: 10;
  `,

  Contents: styled.div``,

  CloseBtnContainer: styled.div`
    position: absolute;
    top: 1.9rem;
    right: 1.6rem;
  `,

  ProfileContainer: styled.article`
    border-bottom: solid 2px #f1f1f1;

    padding-bottom: 3.6rem;
  `,

  WelcomeText: styled.h1`
    ${({ theme }) => theme.fonts.body1};
    font-size: 24px;
    line-height: 3.36rem;

    color: ${({ theme }) => theme.colors.bg};

    margin-top: 1.6rem;
  `,

  DescriptText: styled.h2`
    ${({ theme }) => theme.fonts.body12};
    font-size: 16px;

    color: ${({ theme }) => theme.colors.gray600};

    margin-top: 0.4rem;
  `,

  BtnContainer: styled.div`
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.gray600};

    margin-top: 3.6rem;
  `,

  MyProfileBtn: styled.button`
    ${({ theme }) => theme.fonts.btn2};

    color: ${({ theme }) => theme.colors.gray600};

    border-right: solid 1.5px #606060;

    padding-right: 1rem;
  `,

  LogoutBtn: styled.button`
    ${({ theme }) => theme.fonts.body12};
    color: ${({ theme }) => theme.colors.gray600};

    padding-left: 1rem;
  `,

  RecomendContainer: styled.article`
    padding-top: 3.6rem;
  `,

  TitleText: styled.h1`
    ${({ theme }) => theme.fonts.caption1};

    color: ${({ theme }) => theme.colors.bg};
  `,

  MoodPiickleContainer: styled.div`
    display: flex;

    margin-top: 2.4rem;
  `,

  MoodPiickleText: styled.h2`
    ${({ theme }) => theme.fonts.caption1};

    color: ${({ theme }) => theme.colors.bg};

    margin-right: 1.2rem;
  `,

  GoMoodPiickleBtn: styled.button`
    ${({ theme }) => theme.fonts.body12};

    color: ${({ theme }) => theme.colors.gray600};
  `,

  PiickleMeContainer: styled.div`
    display: flex;

    margin-top: 2.4rem;
  `,

  PiickleMeText: styled.h2`
    ${({ theme }) => theme.fonts.caption1};

    color: ${({ theme }) => theme.colors.bg};

    margin-right: 1.2rem;
  `,

  GoPiickleMeBtn: styled.button`
    ${({ theme }) => theme.fonts.body12};

    color: ${({ theme }) => theme.colors.gray600};
  `,
};

const ani = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  50% {
    width: 28.8rem;
  }
  100% {
    opacity: 1;
  }
  `;

export const StContentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;

  width: 28.8rem;
  height: 100vh;
  float: right;

  background-color: ${({ theme }) => theme.colors.white};

  padding-left: 1.8rem;

  animation: ${ani} 0.8s ease-in-out;
`;
