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
    height: 17.9rem;
    padding: 2rem 0 0 1.6rem;

    background: url(${ImgCategoryBanner});
    background-size: cover;

    position: relative;
  `,

  BannerTitle: styled.h2`
    ${({ theme }) => theme.newFonts.graphic1};
    color: ${({ theme }) => theme.colors.darkblue};
  `,

  BannerSubTitle: styled.p`
    ${({ theme }) => theme.newFonts.h2};
    color: ${({ theme }) => theme.colors.gray800};
  `,

  GoBestPiickleBtn: styled.button`
    position: absolute;

    height: 20px;
    right: 11.76px;
    bottom: 12px;

    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.newFonts.btn1};

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  BtnTitle: styled.p`
    margin-right: 0.8rem;
  `,
};
