import styled from "styled-components";

import { IcEmptyHeart } from "../../../asset/icon";

export const St = {
  Card: styled.article`
    position: relative;

    width: 30rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray200};
    backdrop-filter: blur(1.2rem);
    border-radius: 1.5rem;
  `,

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
