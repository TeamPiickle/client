import styled from "styled-components";

const Root = styled.section`
  margin-top: 1.2rem;
`;

const SliderWrapper = styled.article`
  touch-action: pan-x;

  & .slick-list {
    height: 13.6rem;
    margin-left: -14.5rem; // MEMO :: 눈대중 임의의 값
    padding: 1.6rem;
  }

  & .slick-initialized {
    overflow: hidden;
  }

  & .slick-track {
    scroll-snap-type: x mandatory;
  }
`;

const St = {
  Root,
  SliderWrapper,
};
export default St;
