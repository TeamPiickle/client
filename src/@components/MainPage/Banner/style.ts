import styled from "styled-components";

const BannerSlider = styled.section`
  touch-action: pan-x;

  position: relative;
  height: 30.2rem;

  & .slick-track {
    scroll-snap-type: x mandatory;
  }
`;

const ImageWrapper = styled.img`
  width: 100%;
  height: 30.2rem;
  object-fit: cover;
`;

const ContentsPages = styled.div`
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

const CurrentPage = styled.span`
  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme }) => theme.colors.white};
`;

const St = {
  BannerSlider,
  ImageWrapper,
  ContentsPages,
  CurrentPage,
};
export default St;
