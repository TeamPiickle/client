import styled from "styled-components";

export const RecommemdItemContainer = styled.article`
  display: flex;
  flex-direction: column;
  &:first-of-type > h2 {
    padding-top: 0;
  }
`;

export const RecommendType = styled.h2`
  ${({ theme }) => theme.newFonts.body4};
  padding: 2.4rem 1.6rem;
`;

export const SliderWrapper = styled.article`
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
