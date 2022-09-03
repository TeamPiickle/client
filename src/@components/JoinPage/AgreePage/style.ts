/* eslint-disable indent */
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const St = {
  Root: styled.main`
    height: 100vh;
  `,

  JoinAgree: styled.section`
    height: 54.2rem;
  `,

  AgreeTitle: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 2.4rem 1.6rem 3.2rem;
    height: 9.2rem;

    ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.bg};
  `,

  AgreeContent: styled.ul``,

  AgreeContentItem: styled.li<{ isActive: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    gap: 1.6rem;
    padding: 1.6rem;
    height: 5.6rem;

    ${({ theme }) => theme.fonts.body12};

    color: ${({ theme, isActive }) => (isActive ? theme.colors.bg : theme.colors.gray600)};
  `,

  CheckBox: styled.button``,

  DetailButton: styled(Link)`
    position: absolute;
    right: 1.6rem;
  `,

  Line: styled.div`
    position: absolute;
    margin-top: 5.6rem;
    margin-left: -1.6rem;
    width: 100%;

    hr {
      height: 0.2rem;
      border-width: 0;
      background-color: ${({ theme }) => theme.colors.gray100};
      color: ${({ theme }) => theme.colors.gray100};
    }

    ${({ theme }) => theme.media.desktop`
      width: 36rem;
    `};
  `,

  ModalContainer: styled.div<{ isopen: boolean }>`
    display: flex;
    margin: auto;
    align-items: center;

    margin-top: 5.7rem;
    padding-left: 1.6rem;
    width: calc(100% - 3.2rem);
    height: 4rem;

    background: ${({ theme }) => theme.colors.gray100};
    border-radius: 10px;

    color: ${({ theme }) => theme.colors.bg};
    ${({ theme }) => theme.fonts.caption4};

    ${({ isopen }) =>
      isopen &&
      css`
        visibility: hidden;
      `};
  `,

  JoinButton: styled.button`
    margin: auto;
    display: block;
    margin-top: 1.2rem;

    border-radius: 5rem;
    background-color: ${({ theme }) => theme.colors.bg};

    width: calc(100% - 3.2rem);
    height: 5rem;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.btn2};

    ${({ theme }) => theme.media.desktop`
      width: 32.8rem;
    `};
  `,
};
