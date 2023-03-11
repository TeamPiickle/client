import styled from "styled-components";

import { ImgCategoryBanner } from "../../asset/image";
import { OriginImgCategoryBanner } from "../../asset/image/origin";

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

    background-image: url(${ImgCategoryBanner});
    background-image: image-set(
      ${ImgCategoryBanner} type("image/webp"),
      ${OriginImgCategoryBanner} type("image/png"),
    )
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

    height: 1.5rem;
    right: 1.6rem;
    bottom: 1.2rem;

    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.newFonts.btn2};

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  BtnTitle: styled.p`
    margin-right: 0.8rem;
  `,
};
