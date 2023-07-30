import styled from "styled-components";

export const BannerSlider = styled.section`
  touch-action: pan-x;

  position: relative;
  height: 30.2rem;

  & .slick-track {
    scroll-snap-type: x mandatory;
  }

  cursor: pointer;
`;

export const ContentsPages = styled.div`
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

  z-index: 10;
`;

export const CurrentPage = styled.span`
  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme }) => theme.newColors.white};
`;

export const PagingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3.2rem;

  gap: 1.6rem;

  cursor: default;
`;

export const PagingButton = styled.div<{ isselected: boolean }>`
  width: 0.8rem;
  height: 0.8rem;

  border-radius: 50%;

  background: ${({ theme, isselected }) => (isselected ? theme.newColors.green : theme.newColors.gray300)};
`;
