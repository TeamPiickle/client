import styled from "styled-components";

export const St = {
  Wrapper: styled.section`
    touch-action: pan-x;

    position: relative;

    & .slick-slide {
      height: calc(100vh - 14.8rem);
      max-height: 49.5em;
    }

    & .slick-slide > div {
      height: 100%;
      margin: 0 1.2rem;
    }

    & .slick-slide.slick-active article {
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(1.2rem);

      transform: scale(1.05);
      transition: scale 0.5s;
    }

    & .slick-track {
      height: 52rem;

      display: flex;
      align-items: center;

      scroll-snap-type: x mandatory;
    }
  `,
};
