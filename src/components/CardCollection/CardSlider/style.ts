/*
마지막 편집자: 22-07-13 joohaem
변경사항 및 참고:
  - height/scale, background 애니메이션이 너무 이상하게 들어가서 
  주석처리 된 부분들 디자인팀과 소통이 좀 필요할 것 같아요
    
고민점:
  - 
*/

import styled from "styled-components";

export const St = {
  Wrapper: styled.section`
    & .slick-slide article {
      width: calc(100vw - 5.6rem);
      height: calc(100vh - 10.5rem);
      /* height: calc(100vh - 14.8rem); */

      margin: 0 1.2rem;

      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(1.2rem);
      /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), rgba(211, 245, 232, 0.5);
      backdrop-filter: blur(1.2rem); */
    }

    & .slick-slide.slick-active article {
      /* height: calc(100vh - 10.5rem); */

      /* background: all 0.5s; */
    }

    & .slick-track {
      display: flex;
      align-items: center;
    }
  `,
};
