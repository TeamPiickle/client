import styled from "styled-components";

export const St = {
  FlexContainer: styled.div`
    display: flex;
    justify-content: center;
  `,

  CategoryItemContainer: styled.section`
    width: 32.8rem;
    height: 57.8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(14, 1fr);
    grid-gap: 0.8rem;
  `,

  CategoryItem: styled.article<{ columnStart: number; columnEnd: number; rowStart: number; rowEnd: number }>`
    grid-column-start: ${({ columnStart }) => columnStart};
    grid-column-end: ${({ columnEnd }) => columnEnd};
    grid-row-start: ${({ rowStart }) => rowStart};
    grid-row-end: ${({ rowEnd }) => rowEnd};
    background-color: white;
    border-radius: 1.6rem;
    border: 0.1rem solid #e0e0e0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  CategoryTitle: styled.h2`
    ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.bg};
  `,

  CategoryDescription: styled.p`
    ${({ theme }) => theme.fonts.h2};
    color: ${({ theme }) => theme.colors.gray600};
  `,

  CategoryItem2: styled.article`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 6;
    grid-row-end: 9;
    background-color: white;
    border-radius: 1.6rem;
    border: 0.1rem solid #e0e0e0;
  `,
  CategoryItem3: styled.article`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 9;
    grid-row-end: 12;
    background-color: white;
    border-radius: 1.6rem;
    border: 0.1rem solid #e0e0e0;
  `,
  CategoryItem4: styled.article`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 12;
    grid-row-end: 15;
    background-color: white;
    border-radius: 1.6rem;
    border: 0.1rem solid #e0e0e0;
  `,
  CategoryItem5: styled.article`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;
    background-color: white;
    border-radius: 1.6rem;
    border: 0.1rem solid #e0e0e0;
  `,
  CategoryItem6: styled.article`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 7;
    background-color: white;
    border-radius: 1.6rem;
    border: 0.1rem solid #e0e0e0;
  `,
  CategoryItem7: styled.article`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 7;
    grid-row-end: 12;
    background-color: white;
    border-radius: 1.6rem;
    border: 0.1rem solid #e0e0e0;
  `,
  CategoryItem8: styled.article`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 12;
    grid-row-end: 15;
    background-color: white;
    border-radius: 1.6rem;
    border: 0.1rem solid #e0e0e0;
  `,
};
