import styled from "styled-components";

import theme from "../../../style/theme";

export const St = {
  BannerSlider: styled.section`
    width: 360px;
    height: 217px;

    background: ${theme.colors.green};
  `,

  ContentsWrapper: styled.article`
    width: 360px;
    height: 217px;
  `,

  Contents: styled.p`
    position: relative;

    width: 211px;
    height: 82px;
    left: 16px;
    top: 32px;

    font: ${theme.fonts.body2};
    color: ${theme.colors.white};
  `,

  ContentsPages: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 4px 8px 5px;
    gap: 8px;

    width: 35px;
    height: 17px;
    margin-left: 325px;
    margin-top: -17px;

    background: rgba(0, 0, 0, 0.5);
  `,

  PagesNumber: styled.p`
    width: 19px;
    height: 8px;
    text-align: center;

    line-height: 81.34%;
    font-weight: 400;
    font-size: 1rem;
    color: ${theme.colors.white};
  `,
};