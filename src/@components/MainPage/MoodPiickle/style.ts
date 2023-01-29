import styled from "styled-components";

const Container = styled.section``;

const CategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0.8rem;

  margin: 0 1.6rem;
`;

const Category = styled.article<{
  columnStart: number;
  columnEnd: number;
  rowStart: number;
  rowEnd: number;
  gradation: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding-left: 0.8rem;

  aspect-ratio: 1 / 1;

  background: ${({ gradation }) => gradation};
  background-size: cover;

  grid-column-start: ${({ columnStart }) => columnStart};
  grid-column-end: ${({ columnEnd }) => columnEnd};
  grid-row-start: ${({ rowStart }) => rowStart};
  grid-row-end: ${({ rowEnd }) => rowEnd};
`;

const CategoryTitle = styled.strong`
  ${({ theme }) => theme.newFonts.body3};
  color: ${({ theme }) => theme.colors.gray900};
`;

const CategoryContent = styled.p`
  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme }) => theme.colors.gray800};
`;

const CategoryImoji = styled.p`
  font-size: 3rem;

  margin-bottom: 0.7rem;
`;

const St = {
  Container,
  CategoryWrapper,
  Category,
  CategoryTitle,
  CategoryContent,
  CategoryImoji,
};
export default St;
