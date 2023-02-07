import styled from "styled-components";

const Root = styled.section`
  margin-top: 1.2rem;
`;

const SliderWrapper = styled.article`
  touch-action: pan-x;

  & .slick-list {
    height: 13.6rem;
    padding-left: 1.6rem;
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
