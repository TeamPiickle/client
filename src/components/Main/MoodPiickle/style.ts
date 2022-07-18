import styled from "styled-components";

export const St = {
  Container: styled.section`
    margin-top: 4.8rem;
  `,

  CategoryWrapper: styled.div`
    padding: 0rem 1.6rem 4.8rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    justify-content: center;
  `,

  CategoryOneLine: styled.div`
    display: flex;
    height: 16rem;
    margin-bottom: 0.8rem;
  `,

  Category: styled.article`
    position: relative;
    flex: 1;
    aspect-ratio: 1 / 1;
    width: 16rem;

    box-sizing: border-box;
    display: flex;

    border: 0.1rem solid #e0e0e0;
    border-radius: 1.6rem;
    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.bg};
    align-items: center;
    justify-content: center;
  `,
};
