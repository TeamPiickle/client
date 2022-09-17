import styled from "styled-components";

export const St = {
  Root: styled.section`
    margin-top: 1.2rem;
  `,

  SliderWrapper: styled.article`
    touch-action: pan-x;

    width: 100%;

    & .slick-list {
      height: 15.3rem;
      margin-left: -13.5rem;
      padding: 0.4rem 1.6rem;
    }

    & .slick-initialized {
      overflow: hidden;
    }

    & .slick-track {
      scroll-snap-type: x mandatory;
    }
  `,
};
