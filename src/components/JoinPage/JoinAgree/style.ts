import { Link } from "react-router-dom";
import styled from "styled-components";

export const St = {
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

  AgreeContentItem: styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    gap: 1.6rem;
    padding: 1.6rem;
    height: 5.6rem;

    ${({ theme }) => theme.fonts.body12};
    color: ${({ theme }) => theme.colors.bg};
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

  JoinButton: styled.button`
    margin: auto;
    display: block;
    margin-top: 15.4rem;

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
