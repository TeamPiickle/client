import styled from "styled-components";

import { IcFilterBtn } from "../../../asset/icon";

export const St = {
  Wrapper: styled.section`
    position: relative;

    & .slick-slide {
      width: 30rem;
      height: calc(100vh - 14.8rem);
      max-height: 52.3rem;
    }

    & .slick-slide > div {
      height: 100%;
      margin: 0 1.2rem;
    }

    & .slick-slide article {
      height: 100%;
    }

    & .slick-slide.slick-active article {
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(1.2rem);

      transform: scale(1.05);
      transition: all 0.5s;
    }

    & .slick-track {
      height: calc(100vh - 10.5rem);

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
