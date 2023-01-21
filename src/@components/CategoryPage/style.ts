import styled from "styled-components";

import { ImgCategoryBanner } from "../../asset/image";

export const St = {
  Root: styled.main`
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
    margin-top: -2.4rem;
  `,

  CategoryBanner: styled.section`
    height: 19.8rem;
    padding: 2rem 0 0 1.6rem;

    background: url(${ImgCategoryBanner});
    background-size: cover;

    position: relative;
  `,

  BannerTitle: styled.h2`
    ${({ theme }) => theme.fonts.body10};
    color: ${({ theme }) => theme.colors.darkblue};
  `,

  BannerSubTitle: styled.p`
    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.gray800};
  `,

  GoBestPiickleBtn: styled.button`
    position: absolute;
    bottom: 0rem;

    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.newFonts.btn1};

    width: 100%;
    height: 5.4rem;
    margin-left: -1.6rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
