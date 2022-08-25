import styled from "styled-components";

export const St = {
  Container: styled.section`
    margin: 4.8rem 0;
  `,

  CategoryWrapper: styled.div`
    height: 37.6rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 0.8rem;

    margin: 0 1.6rem;
  `,

  CategoryOneLine: styled.div`
    height: 16rem;
  `,

  Category: styled.article<{
    columnStart: number;
    columnEnd: number;
    rowStart: number;
    rowEnd: number;
    imgUrl: string;
  }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 0.1rem solid #e0e0e0;
    border-radius: 1.6rem;

    background: url(${({ imgUrl }) => imgUrl});
    background-size: cover;

    grid-column-start: ${({ columnStart }) => columnStart};
    grid-column-end: ${({ columnEnd }) => columnEnd};
    grid-row-start: ${({ rowStart }) => rowStart};
    grid-row-end: ${({ rowEnd }) => rowEnd};
  `,

  CategoryTitle: styled.strong`
    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.bg};
  `,

  CategoryContent: styled.p`
    ${({ theme }) => theme.fonts.caption2};
    color: ${({ theme }) => theme.colors.gray600};
  `,
};
