import styled from "styled-components";

import { IcFilterBtn } from "../../../asset/icon";

export const St = {
  Wrapper: styled.section`
    position: relative;

    & .slick-slide {
      width: 30.5rem;
      height: calc(100vh - 14.8rem);
    }

    & .slick-slide > div {
      height: 100%;
      margin: 0 1.2rem;
    }

    & .slick-slide article {
      height: 100%;
      /* width: calc(100vw - 5.6rem); */
      /* height: calc(100vh - 10.5rem); */
    }

    & .slick-slide.slick-active article {
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(1.2rem);
      /* height: calc(100vh - 10.5rem); */
      transform: scale(1.05);
      transition: all 0.5s;
    }

    & .slick-track {
      height: calc(100vh - 10.5rem);
      /* height: calc(100vh - 14.8rem); */

      display: flex;
      align-items: center;
    }
  `,

  IcFilterBtn: styled(IcFilterBtn)`
    position: fixed;
    right: 2.3rem;
    bottom: 3.4rem;
  `,
};
