import styled from "styled-components";

export const SubTitle = styled.p`
  height: 6.6rem;

  padding: 2.4rem 0;
  margin-left: 1.6rem;

  ${({ theme }) => theme.newFonts.h2}
  color: ${({ theme }) => theme.newColors.gray900};
`;

export const Medley = styled.article`
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
