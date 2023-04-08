import styled from "styled-components";

import { IcEmptyHeart } from "../../../asset/icon";

export const St = {
  Card: styled.article`
    position: relative;

    width: 100%;
    height: 100%;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray200};
    backdrop-filter: blur(1.2rem);
    border-radius: 1.5rem;
  `,

  /*
    width: 30rem;
    height: calc(100vh - 14.8rem);
    height: calc(calc(var(--vh, 1vh) * 100) - 14.8rem);
    max-height: 49.5em;
    */

  TagsWrapper: styled.div`
    margin: 1.6rem 2.4rem 0;
  `,

  ContentWrapper: styled.p`
    margin: 4.7rem 2.4rem 0;

    ${({ theme }) => theme.fonts.cardBody5};
    color: ${({ theme }) => theme.colors.bg};

    white-space: pre-wrap;
  `,

  HeartWrapper: styled.div`
    position: absolute;
    bottom: 2.4rem;
    left: 2.4rem;

    width: 3.8rem;
    height: 3.2rem;
  `,

  IcEmptyHeart: styled(IcEmptyHeart)`
    position: absolute;
  `,
};
