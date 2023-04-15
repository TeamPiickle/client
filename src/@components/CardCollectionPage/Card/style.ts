import styled from "styled-components";

import { IcEmptyHeart } from "../../../asset/icon";

export const St = {
  Card: styled.article`
    position: relative;

    margin: 0.8rem;
    height: 100%;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray200};
    border-radius: 0.8rem;
    background: linear-gradient(180deg, #ddfbf0 0%, rgba(232, 252, 244, 0.5) 100%);
  `,

  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 2.4rem;

    position: absolute;
    width: 100%;
    top: 5.6rem;
  `,

  ContentWrapper: styled.p`
    text-align: center;

    word-break: keep-all;

    ${({ theme }) => theme.newFonts.body1};
    color: ${({ theme }) => theme.newColors.gray900};
  `,

  TagsWrapper: styled.div`
    margin-top: 1.6rem;
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
