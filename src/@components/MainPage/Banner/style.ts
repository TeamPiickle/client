import styled from "styled-components";

export const St = {
  BannerSlider: styled.section`
    touch-action: pan-x;

    position: relative;
    height: 21.6rem;
    margin-top: -2.4rem;

    & .slick-track {
      scroll-snap-type: x mandatory;
    }
  `,

  ImageWrapper: styled.img`
    width: 100%;
    height: 21.6rem;
    object-fit: cover;
  `,

  ContentsPages: styled.div`
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    width: 4.8rem;
    height: 2.4rem;

    background: rgba(0, 0, 0, 0.5);
  `,

  CurrentPage: styled.span`
    ${({ theme }) => theme.newFonts.caption1};
    color: ${({ theme }) => theme.colors.white};
  `,
};
