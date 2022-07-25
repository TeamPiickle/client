import styled from "styled-components";

export const St = {
  BannerSlider: styled.section`
    touch-action: pan-x;

    position: relative;
    height: 21.7rem;
    margin-top: -2.4rem;
  `,

  ImageWrapper: styled.img`
    width: 36rem;
    height: 21.7rem;
  `,

  ContentsPages: styled.div`
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    gap: 0.8rem;

    width: 3.9rem;
    height: 1.8rem;

    background: rgba(0, 0, 0, 0.5);
  `,

  CurrentPage: styled.span`
    ${({ theme }) => theme.fonts.caption4};
    line-height: 1.8rem;
    color: ${({ theme }) => theme.colors.white};
  `,
};
