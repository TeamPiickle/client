import styled from "styled-components";

export const St = {
  FlexContainer: styled.div`
    display: flex;
    justify-content: center;

    padding: 0 1.6rem;
  `,

  CategoryItemContainer: styled.section`
    width: 100%;
    height: 57.8rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(14, 1fr);
    grid-gap: 0.8rem;
  `,

  CategoryItem: styled.article<{
    columnStart: number;
    columnEnd: number;
    rowStart: number;
    rowEnd: number;
    imgUrl: string;
  }>`
    grid-column-start: ${({ columnStart }) => columnStart};
    grid-column-end: ${({ columnEnd }) => columnEnd};
    grid-row-start: ${({ rowStart }) => rowStart};
    grid-row-end: ${({ rowEnd }) => rowEnd};

    background: url(${({ imgUrl }) => imgUrl});
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding-left: 0.8rem;
  `,

  CategoryTitle: styled.h2`
    ${({ theme }) => theme.newFonts.body2};
    color: ${({ theme }) => theme.colors.gray900};
  `,

  CategoryDescription: styled.p`
    ${({ theme }) => theme.newFonts.caption1};
    color: ${({ theme }) => theme.colors.gray800};
  `,

  CategoryImoji: styled.p`
    font-size: 3rem;

    margin-bottom: 0.7rem;
  `,
};
