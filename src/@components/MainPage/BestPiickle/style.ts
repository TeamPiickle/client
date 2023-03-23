import styled from "styled-components";

const Root = styled.section`
  margin-top: 1.2rem;
`;

const SliderWrapper = styled.article`
  display: flex;
  overflow-x: scroll;

  padding: 0 1.6rem;

  & > button:not(:first-child) {
    margin-left: 0.8rem;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const St = {
  Root,
  SliderWrapper,
};
export default St;
