import styled from "styled-components";

import { IcFilterBtn } from "../../../asset/icon";

const Wrapper = styled.section`
  position: relative;
  height: 100%;

  & .swiper {
    width: 100%;
    height: 100%;
  }

  & .swiper-slide {
    height: 75%;
  }
`;

const FilterBtn = styled(IcFilterBtn)`
  z-index: 1;
  position: fixed;
  right: 2.3rem;
  bottom: 3.4rem;
  ${({ theme }) => theme.media.desktop`
        right: 50%;
        transform: translate(15.7rem, 0);
      `};
`;

const St = {
  Wrapper,
  FilterBtn,
};
export default St;
