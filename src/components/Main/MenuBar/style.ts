import styled from "styled-components";

import { IcCloseBtn } from "../../../asset/icon";

export const St = {
  Root: styled.section`
    background-color: ${({ theme }) => theme.colors.gray600};

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 10;
  `,

  ContentsContainer: styled.section`
    width: 28.8rem;
    height: 100vh;
    float: right;

    background-color: ${({ theme }) => theme.colors.white};

    padding-top: 10.1rem;
    padding-left: 1.8rem;
  `,

  CloseBtnContainer: styled.div`
    float: right;
    margin-right: 1.6rem;
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
