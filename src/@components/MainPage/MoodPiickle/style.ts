import styled from "styled-components";

export const St = {
  Container: styled.section``,

  CategoryWrapper: styled.div`
    height: 32.8rem;
    width: 32.8rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 0.8rem;

    margin: auto;
  `,

  CategoryOneLine: styled.div`
    height: 16rem;
  `,

  Category: styled.article<{
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

    width: 16rem;
    height: 16rem;

    background: ${({ gradation }) => gradation};
    background-size: cover;

    grid-column-start: ${({ columnStart }) => columnStart};
    grid-column-end: ${({ columnEnd }) => columnEnd};
    grid-row-start: ${({ rowStart }) => rowStart};
    grid-row-end: ${({ rowEnd }) => rowEnd};
  `,

  CategoryTitle: styled.strong`
    ${({ theme }) => theme.newFonts.body3};
    color: ${({ theme }) => theme.colors.gray900};
  `,

  CategoryContent: styled.p`
    ${({ theme }) => theme.newFonts.caption1};
    color: ${({ theme }) => theme.colors.gray800};
  `,

  CategoryImoji: styled.p`
    font-size: 3rem;

    margin-bottom: 0.7rem;
  `,
};
