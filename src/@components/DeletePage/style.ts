/* eslint-disable indent */
import styled, { css } from "styled-components";

export const St = {
  Root: styled.main`
    height: 100vh;
  `,

  TitleContainer: styled.section`
    height: 13.2rem;
    padding: 2.4rem 1.6rem;
  `,

  Title: styled.strong`
    display: block;
    margin-bottom: 0.8rem;

    ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.bg};
  `,

  SubTitle: styled.p`
    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.bg};
  `,

  AgreeContainer: styled.section`
    padding: 2.4rem 1.6rem;
    height: 11rem;

    background-color: ${({ theme }) => theme.colors.sub_green3};
  `,

  AgreeTitle: styled.p`
    display: block;
    margin-bottom: 0.8rem;

    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.bg};
  `,

  AgreeCheck: styled.div`
    display: flex;
    align-items: center;

    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.bg};
  `,

  CheckBox: styled.button`
    margin-right: 0.8rem;
  `,

  FeedBackContainer: styled.section`
    height: 25.9rem;
    margin: 2.4rem 0 1.8rem 0;
    padding: 0px 1.6rem;
  `,

  FeedBackTitle: styled.strong`
    ${({ theme }) => theme.fonts.body12};
    color: ${({ theme }) => theme.colors.bg};
  `,

  FeedBackSubTitle: styled.p`
    display: block;
    margin: 0.4rem 0 1.6rem 0;

    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.gray600};
  `,

  FeedBackList: styled.ul``,

  FeedBackListsContents: styled.li`
    height: 4rem;
    display: flex;
    align-items: center;
    padding: 0.8rem 0;

    ${({ theme }) => theme.fonts.body12};
    color: ${({ theme }) => theme.colors.bg};
  `,

  OptionalCheckBox: styled.button`
    margin-right: 1.6rem;
  `,

  ModalContainer: styled.div<{ isopen: boolean }>`
    margin: auto;
    align-items: center;

    position: absolute;
    right: 1.6rem;
    left: 1.6rem;

    padding: 0 1.6rem;
    height: 4rem;

    background: ${({ theme }) => theme.colors.gray100};
    border-radius: 10px;

    color: ${({ theme }) => theme.colors.bg};
    ${({ theme }) => theme.fonts.caption4};

    ${({ isopen }) =>
      isopen
        ? css`
            display: flex;
          `
        : css`
            display: none;
          `};
  `,

  DeleteBtn: styled.button`
    width: calc(100% - 3.2rem);
    height: 5rem;

    margin: 7rem auto 2rem auto;
    display: block;

    border-radius: 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.btn2};

    ${({ theme }) => theme.media.desktop`
    width: 32.8rem;
  `};
  `,
};
