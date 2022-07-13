import styled from "styled-components";

export const St = {
  Wrapper: styled.section`
    & .slick-slide article {
      width: calc(100vw - 5.6rem);
      height: calc(100vh - 10.5rem);
      /* height: 49.2rem; */

      /* transform: scale(0.8); */
      margin: 0 1.2rem;
    }

    & .slick-slide.slick-active article {
      /* transform: scale(1); */
      transition: all 0.4s ease-in-out;
    }

    & .slick-track {
      display: flex;
      align-items: center;
    }
  `,
};
