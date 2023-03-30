import styled from "styled-components";

const Root = styled.section`
  margin-top: 1.2rem;
`;

const SliderWrapper = styled.article`
  display: flex;
  overflow-x: scroll;

  padding-left: 1.6rem;
  & > button:not(:last-child) > div {
    margin-right: 0.8rem;
  }
  & > button:last-child > div {
    margin-right: 1.6rem;
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
