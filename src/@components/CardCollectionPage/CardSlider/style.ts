import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  height: 100%;
  padding-top: 3.3rem;

  & .swiper {
    width: 100%;
    height: 100%;
  }

  & .swiper-slide {
    height: calc((100% + 3.3rem) * 0.77);
  }

  & .swiper-slide:last-child {
    height: calc(100vh - 3.3rem);
  }
`;

const St = {
  Wrapper,
};
export default St;
