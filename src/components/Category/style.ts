import styled from "styled-components";

import { ImgCategoryBanner } from "../../asset/image";

export const St = {
  CategoryBanner: styled.section`
    width: 36rem;
    height: 13.6rem;
    padding: 2rem 0 0 1.6rem;

    background: url(${ImgCategoryBanner});

    position: relative;
  `,

  BannerTitle: styled.h2`
    ${({ theme }) => theme.fonts.body10};
    color: ${({ theme }) => theme.colors.white};
  `,

  BannerSubTitle: styled.p`
    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.gray600};
  `,

  GoBestPiickleBtn: styled.button`
    position: absolute;
    right: 1.2rem;
    bottom: 1.4rem;

    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.btn1};

    width: 7.1rem;
    height: 2.5rem;

    border-radius: 4.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
