import styled from "styled-components";

import { IcFilterBtn } from "../../../asset/icon";

export const St = {
  Wrapper: styled.section`
    position: relative;
  `,
  /*
      touch-action: pan-x;
      & .slick-slide {
        height: calc(100vh - 14.8rem);
        height: calc(calc(var(--vh, 1vh) * 100) - 14.8rem);
        max-height: 49.5em;
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
        transition: scale 0.5s;
      }
      & .slick-track {
        height: 52rem;
        display: flex;
        align-items: center;
        scroll-snap-type: x mandatory;
      }
  */
  IcFilterBtn: styled(IcFilterBtn)`
    z-index: 1;
    position: fixed;
    right: 2.3rem;
    bottom: 3.4rem;
    ${({ theme }) => theme.media.desktop`
        right: 50%;
        transform: translate(15.7rem, 0);
      `};
  `,
};
