import styled from "styled-components";

export const St = {
  FlexContainer: styled.div`
    display: flex;
    justify-content: center;
    padding: 0 1.6rem;
  `,

  CategoryItemContainer: styled.section`
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
};
