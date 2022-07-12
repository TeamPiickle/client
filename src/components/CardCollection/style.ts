import styled from "styled-components";

import { IcEmptyHeart, IcFullHeart } from "../../asset/icon";

export const St = {
  MainPage: styled.main`
    height: 100vh;

    padding: 6.4rem 2.8rem 5.1rem;

    background: ${({ theme }) => theme.colors.card};
  `,

  Card: styled.article`
    position: relative;

    width: 100%;
    height: 100%;

    background: rgba(255, 255, 255, 0.5);
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    backdrop-filter: blur(1.2rem);
    border-radius: 1.5rem;
  `,

  TagsWrapper: styled.ul`
    margin: 1.6rem 0 0 1.4rem;
  `,

  ContentWrapper: styled.article`
    margin: 4.7rem 0 0 2.4rem;

    ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.bg};
  `,

  HeartWrapper: styled.div`
    position: absolute;
    bottom: 2.4rem;
    left: 2.4rem;

    width: 3.8rem;
    height: 3.2rem;
  `,

  // HeartWrapper: styled.div`
  //   position: relative;
  // `,

  IcEmptyHeart: styled(IcEmptyHeart)`
    position: absolute;
  `,

  IcFullHeart: styled(IcFullHeart)`
    position: absolute;
    top: 0;
    left: 0;
  `,
};
